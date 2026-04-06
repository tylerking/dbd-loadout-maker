<script setup lang="ts">
import Tooltip from '../../elements/Tooltip/Tooltip.vue';
import Icon from '../../elements/Icon/Icon.vue';
import * as styles from './Actions.css.ts';

defineEmits<{
  (e: 'randomize'): void;
  (e: 'reset'): void;
  (e: 'screenshot'): void;
}>();
</script>

<template>
  <div :class="styles.centralActions">
    <Tooltip text="Randomize Loadout">
      <button :class="styles.actionIcon" @click.stop="$emit('randomize')" aria-label="Randomize Loadout">
        <Icon name="shuffle" :size="24" />
      </button>
    </Tooltip>
    
    <Tooltip text="Reset Loadout">
      <button :class="styles.actionIcon" @click.stop="$emit('reset')" aria-label="Reset Loadout">
        <Icon name="rotate-ccw" :size="24" />
      </button>
    </Tooltip>

    <Tooltip text="Screenshot Loadout">
      <button :class="styles.actionIcon" @click.stop="$emit('screenshot')" aria-label="Screenshot Loadout">
        <Icon name="image" :size="24" />
      </button>
    </Tooltip>
  </div>
</template>
