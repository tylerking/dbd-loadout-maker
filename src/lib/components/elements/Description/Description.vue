<script setup lang="ts">
import { computed } from 'vue';
import type { Perk } from '../../../data/perks';
import * as styles from './Description.css.ts';

const props = defineProps<{
  perk: Perk;
}>();

const rarityClass = computed(() => {
  switch (props.perk.rarity) {
    case 'Common': return styles.common;
    case 'Uncommon': return styles.uncommon;
    case 'Rare': return styles.rare;
    case 'Very Rare': return styles.veryRare;
    case 'Ultra Rare': return styles.ultraRare;
    default: return '';
  }
});
</script>

<template>
  <div :class="styles.root">
    <div :class="[styles.header, rarityClass]">
      <h3 :class="styles.title">{{ perk.name }}</h3>
      <h4 :class="styles.subtitle">
        {{ perk.rarity }} {{ perk.character === 'All' ? 'General' : perk.character }} Perk
      </h4>
    </div>
    <div :class="styles.content">
      <p>{{ perk.description }}</p>
    </div>
  </div>
</template>
