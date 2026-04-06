<script setup lang="ts">
import { ref } from 'vue';
import * as styles from './Tooltip.css.ts';

defineProps<{
  text: string;
}>();

const isVisible = ref(false);
</script>

<template>
  <div 
    :class="styles.container"
    @mouseenter="isVisible = true"
    @mouseleave="isVisible = false"
    @focusin="isVisible = true"
    @focusout="isVisible = false"
  >
    <slot />
    <div v-if="isVisible" role="tooltip" :class="styles.tooltip">
      {{ text }}
    </div>
  </div>
</template>
