<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Perk, PerkCategory, Side } from '../../../data/perks';
import Description from '../Description/Description.vue';
import Icon from '../Icon/Icon.vue';
import * as styles from './Perk.css.ts';

const props = defineProps<{
  perks: Perk[];
  side: Side;
}>();

const chosenPerk = ref<Perk | null>(null);
const filter = ref<string>('Any');
const isLocked = ref(false);
const showSearch = ref(false);
const searchQuery = ref('');

const rarityClass = computed(() => {
  if (!chosenPerk.value) return '';
  switch (chosenPerk.value.rarity) {
    case 'Common': return styles.common;
    case 'Uncommon': return styles.uncommon;
    case 'Rare': return styles.rare;
    case 'Very Rare': return styles.veryRare;
    case 'Ultra Rare': return styles.ultraRare;
    default: return '';
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
  filter.value = 'Any';
  isLocked.value = false;
  showSearch.value = false;
};

const toggleLock = () => {
  isLocked.value = !isLocked.value;
};

const toggleSearch = () => {
  if (isLocked.value) return;
  showSearch.value = !showSearch.value;
};

const selectPerk = (perk: Perk) => {
  chosenPerk.value = perk;
  showSearch.value = false;
  searchQuery.value = '';
};

defineExpose({
  randomPerk,
  resetPerk
});
</script>

<template>
  <div :class="styles.root">
    <div :class="[styles.frame, rarityClass]" @click="toggleSearch">
      <template v-if="chosenPerk">
        <img :src="chosenPerk.imageUrl" :alt="chosenPerk.name" :class="styles.image" />
      </template>
      <template v-else>
        <div :class="styles.placeholder">
          <Icon name="plus" :size="32" color="#333" />
        </div>
      </template>
      
      <div v-if="isLocked" :class="styles.lockOverlay">
        <Icon name="lock" :size="32" color="currentColor" />
      </div>
    </div>

    <div v-if="chosenPerk && !showSearch" :class="styles.popover">
      <Description :perk="chosenPerk" />
    </div>

    <div v-if="showSearch" :class="styles.searchModal">
      <div :class="styles.searchHeader">
        <input 
          v-model="searchQuery" 
          placeholder="Search perks..." 
          :class="styles.searchInput"
          @click.stop
          autofocus
        />
        <Icon name="x" :size="20" :class="styles.closeIcon" @click.stop="toggleSearch" />
      </div>
      <div :class="styles.searchList">
        <div 
          v-for="perk in filteredPerks" 
          :key="perk.id" 
          :class="styles.searchItem"
          @click.stop="selectPerk(perk)"
        >
          <img :src="perk.imageUrl" :alt="perk.name" :class="styles.searchItemImage" />
          <div :class="styles.searchItemInfo">
            <div :class="styles.searchItemName">{{ perk.name }}</div>
            <div :class="styles.searchItemCharacter">{{ perk.character }}</div>
          </div>
        </div>
        <div v-if="filteredPerks.length === 0" :class="styles.noResults">
          No perks found
        </div>
      </div>
    </div>

    <div :class="styles.controls">
      <Icon name="shuffle" :size="18" :class="[styles.icon, isLocked && styles.disabledIcon]" title="Randomize" @click="randomPerk" />
      <Icon name="rotate-ccw" :size="18" :class="[styles.icon, isLocked && styles.disabledIcon]" title="Reset" @click="resetPerk" />
      <Icon 
        :name="isLocked ? 'lock' : 'unlock'" 
        :size="18" 
        :class="[styles.icon, isLocked ? styles.lockedIcon : '']" 
        :title="isLocked ? 'Unlock' : 'Lock'"
        @click="toggleLock" 
      />
    </div>

    <select v-model="filter" :class="styles.filterSelect" :disabled="isLocked">
      <option value="Any">Any Category</option>
      <option v-for="cat in availableCategories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
  </div>
</template>
