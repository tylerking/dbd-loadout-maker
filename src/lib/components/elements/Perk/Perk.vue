<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { Perk, Side } from '../../../data/perks';
import Description from '../Description/Description.vue';
import Icon from '../Icon/Icon.vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import * as styles from './Perk.css.ts';

const props = defineProps<{
  perks: Perk[];
  side: Side;
  globalFilter: string;
}>();

const chosenPerk = ref<Perk | null>(null);
const filter = ref<string>(props.globalFilter);
const isLocked = ref(false);
const showSearch = ref(false);
const searchQuery = ref('');
const showPopover = ref(false);
const frameButtonRef = ref<HTMLButtonElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);

watch(() => props.globalFilter, (newVal) => {
  if (!isLocked.value) {
    filter.value = newVal;
  }
});

const availableCategories = computed(() => {
  const cats = new Set<string>();
  props.perks.forEach(p => p.categories.forEach(c => cats.add(c)));
  return Array.from(cats).sort();
});

const filteredPerks = computed(() => {
  let pool = props.perks;
  if (filter.value !== 'Any') {
    pool = pool.filter(p => p.categories.includes(filter.value as any));
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    pool = pool.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.character.toLowerCase().includes(q)
    );
  }
  return pool;
});

const randomPerk = () => {
  if (isLocked.value) return;
  
  let pool = props.perks;
  if (filter.value !== 'Any') {
    pool = pool.filter(p => p.categories.includes(filter.value as any));
  }
  
  if (pool.length > 0) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    chosenPerk.value = pool[randomIndex];
  }
};

const resetPerk = () => {
  if (isLocked.value) return;
  chosenPerk.value = null;
  filter.value = props.globalFilter;
  isLocked.value = false;
  showSearch.value = false;
};

const toggleLock = () => {
  isLocked.value = !isLocked.value;
};

const toggleSearch = () => {
  if (isLocked.value || chosenPerk.value) return;
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    nextTick(() => searchInputRef.value?.focus());
  } else {
    nextTick(() => frameButtonRef.value?.focus());
  }
};

const closeSearch = () => {
  showSearch.value = false;
  searchQuery.value = '';
  nextTick(() => frameButtonRef.value?.focus());
};

const selectPerk = (perk: Perk) => {
  chosenPerk.value = perk;
  showSearch.value = false;
  searchQuery.value = '';
  nextTick(() => frameButtonRef.value?.focus());
};

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = '/img/icons/missing-perk.svg';
  target.setAttribute('data-missing', 'true');
};

defineExpose({
  randomPerk,
  resetPerk
});
</script>

<template>
  <div :class="styles.root">
    <div v-if="showSearch" :class="styles.inlineSearch" role="search" aria-label="Search perks">
      <div :class="styles.searchHeader">
        <input
          ref="searchInputRef"
          v-model="searchQuery"
          placeholder="Search perks..."
          :class="styles.searchInput"
          @click.stop
          @keydown.escape="closeSearch"
          aria-label="Search perks by name or character"
        />
        <button
          type="button"
          :class="styles.closeIcon"
          @click.stop="closeSearch"
          aria-label="Close search"
        >
          <Icon name="x" :size="20" />
        </button>
      </div>
      <div
        :class="styles.searchList"
        role="listbox"
        :aria-label="`${filteredPerks.length} perk${filteredPerks.length !== 1 ? 's' : ''} found`"
        aria-live="polite"
        aria-atomic="false"
      >
        <button
          v-for="perk in filteredPerks"
          :key="perk.id"
          :class="styles.searchItem"
          @click.stop="selectPerk(perk)"
          type="button"
          role="option"
          :aria-selected="chosenPerk?.id === perk.id"
        >
          <img
            :src="perk.imageUrl"
            :alt="perk.name"
            :class="styles.searchItemImage"
            @error="handleImageError"
            loading="lazy"
          />
          <div :class="styles.searchItemInfo">
            <div :class="styles.searchItemName">{{ perk.name }}</div>
            <div :class="styles.searchItemCharacter">{{ perk.character }}</div>
          </div>
        </button>
        <div v-if="filteredPerks.length === 0" :class="styles.noResults">
          No results
        </div>
      </div>
    </div>

    <template v-else>
      <button
        ref="frameButtonRef"
        type="button"
        :class="styles.frame"
        @click="toggleSearch"
        @mouseenter="showPopover = true"
        @mouseleave="showPopover = false"
        @focus="showPopover = true"
        @blur="showPopover = false"
        :aria-label="chosenPerk ? `${chosenPerk.name} — ${chosenPerk.character} perk. View description.` : 'Empty perk slot. Press to select.'"
      >
        <template v-if="chosenPerk">
          <img 
            :src="chosenPerk.imageUrl" 
            :alt="chosenPerk.name" 
            :class="styles.image" 
            @error="handleImageError"
          />
        </template>
        <template v-else>
          <div :class="styles.placeholder">
            <Icon name="plus" :size="32" color="#fff" />
          </div>
        </template>
        
      </button>

      <div 
        v-if="chosenPerk && showPopover" 
        :class="styles.popover"
        @mouseenter="showPopover = true"
        @mouseleave="showPopover = false"
      >
        <Description :perk="chosenPerk" />
      </div>

      <div :class="styles.controls">
        <Tooltip text="Randomize Perk">
          <button
            type="button"
            :class="[styles.icon, isLocked && styles.disabledIcon]"
            @click="randomPerk"
            :disabled="isLocked"
            aria-label="Randomize"
          >
            <Icon name="shuffle" :size="20" />
          </button>
        </Tooltip>

        <Tooltip text="Reset Perk">
          <button
            type="button"
            :class="[styles.icon, isLocked && styles.disabledIcon]"
            @click="resetPerk"
            :disabled="isLocked"
            aria-label="Reset"
          >
            <Icon name="rotate-ccw" :size="20" />
          </button>
        </Tooltip>

        <Tooltip :text="isLocked ? 'Unlock Perk' : 'Lock Perk'">
          <button
            type="button"
            :class="[styles.icon, isLocked ? styles.lockedIcon : '']"
            @click="toggleLock"
            aria-label="Toggle Lock"
          >
            <Icon :name="isLocked ? 'lock' : 'unlock'" :size="20" />
          </button>
        </Tooltip>
      </div>

      <div :class="styles.selectWrapper">
        <select v-model="filter" :class="styles.filterSelect" :disabled="isLocked" aria-label="Filter perks by category">
          <option value="Any">Add Category</option>
          <option v-for="cat in availableCategories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <div :class="styles.selectCaret">
          <Icon name="chevron-down" :size="12" />
        </div>
      </div>
    </template>
  </div>
</template>
