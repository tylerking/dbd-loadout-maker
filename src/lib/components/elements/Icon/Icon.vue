<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: 'github' | 'plus' | 'lock' | 'unlock' | 'x' | 'shuffle' | 'rotate-ccw' | 'rotate-cw' | 'refresh-cw' | 'image' | 'chevron-down';
  size?: number | string;
  color?: string;
}>();

const iconSize = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size || '1em');
const iconColor = computed(() => props.color || 'currentColor');

const viewBox = computed(() => {
  if (props.name === 'chevron-down') return '0 0 16 16';
  return '0 0 24 24';
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconSize"
    :height="iconSize"
    :viewBox="viewBox"
    fill="none"
    :stroke="name === 'chevron-down' ? 'none' : iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="geist-icon"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'github'">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </template>
    <template v-else-if="name === 'plus'">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </template>
    <template v-else-if="name === 'unlock'">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
    </template>
    <template v-else-if="name === 'x'">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </template>
    <template v-else-if="name === 'shuffle'">
      <polyline points="16 3 21 3 21 8"></polyline>
      <line x1="4" y1="20" x2="21" y2="3"></line>
      <polyline points="21 16 21 21 16 21"></polyline>
      <line x1="15" y1="15" x2="21" y2="21"></line>
      <line x1="4" y1="4" x2="9" y2="9"></line>
    </template>
    <template v-else-if="name === 'rotate-ccw'">
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </template>
    <template v-else-if="name === 'rotate-cw'">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10"></path>
    </template>
    <template v-else-if="name === 'refresh-cw'">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </template>
    <template v-else-if="name === 'image'">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </template>
    <template v-else-if="name === 'chevron-down'">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0607 5.49999L13.5303 6.03032L8.7071 10.8535C8.31658 11.2441 7.68341 11.2441 7.29289 10.8535L2.46966 6.03032L1.93933 5.49999L2.99999 4.43933L3.53032 4.96966L7.99999 9.43933L12.4697 4.96966L13 4.43933L14.0607 5.49999Z" fill="currentColor"></path>
    </template>
  </svg>
</template>

<style scoped>
.geist-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
