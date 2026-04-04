<script setup lang="ts">
import type { Perk } from '../../../data/perks';
import * as styles from './Description.css.ts';

const props = defineProps<{
  perk: Perk;
}>();

</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <h3 :class="styles.title">{{ perk.name }}</h3>
      <h4 :class="styles.subtitle">
        {{ perk.character === 'All' ? 'General' : perk.character }} Perk
      </h4>
    </div>
    <div :class="styles.content">
      <p>{{ perk.description }}</p>
    </div>
  </div>
</template>