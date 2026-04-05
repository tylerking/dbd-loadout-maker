<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Perk, Side } from '../../../data/perks';
import PerkComponent from '../../elements/Perk/Perk.vue';
import * as styles from './Loadout.css.ts';

const props = defineProps<{
  type: Side;
}>();

const { data, pending, error } = useFetch('/api/graphql', {
  key: `perks-${props.type}`,
  method: 'POST',
  body: {
    query: `
      query GetPerks($side: PerkSide) {
        perks(side: $side) {
          id
          name
          description
          character
          categories
          side
          imageUrl
        }
      }
    `,
    variables: {
      side: props.type
    }
  },
  transform: (res: any) => res.data.perks as Perk[]
});

const perk1 = ref<InstanceType<typeof PerkComponent> | null>(null);
const perk2 = ref<InstanceType<typeof PerkComponent> | null>(null);
const perk3 = ref<InstanceType<typeof PerkComponent> | null>(null);
const perk4 = ref<InstanceType<typeof PerkComponent> | null>(null);

const captureRef = ref<HTMLElement | null>(null);

const randomLoadout = () => {
  perk1.value?.randomPerk();
  perk2.value?.randomPerk();
  perk3.value?.randomPerk();
  perk4.value?.randomPerk();
};

const resetLoadout = () => {
  perk1.value?.resetPerk();
  perk2.value?.resetPerk();
  perk3.value?.resetPerk();
  perk4.value?.resetPerk();
};

const takeShot = async () => {
  if (import.meta.server || !captureRef.value) return;
  
  try {
    const { toPng } = await import('html-to-image');
    
    if (document.fonts) {
      await document.fonts.ready;
    }

    await new Promise(resolve => setTimeout(resolve, 100));
    
    const dataUrl = await toPng(captureRef.value, { 
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: 'transparent',
      skipAutoScale: true
    });
    
    const link = document.createElement('a');
    link.download = `dbd-${props.type.toLowerCase()}-loadout.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('screenshot error: ', error);
  }
};

defineExpose({
  randomLoadout,
  resetLoadout,
  takeShot
});
</script>

<template>
  <div :class="styles.root">
    <div v-if="pending" style="padding: 2rem; text-align: center; font-size: 0.8rem; color: #888;">
      Loading perks...
    </div>
    <div v-else-if="error" style="padding: 2rem; text-align: center; color: #ff4d4d;">
      Error loading perks
    </div>
    
    <div v-else :class="styles.grid" ref="captureRef">
      <PerkComponent ref="perk1" :perks="data || []" :side="type" global-filter="Any" />
      <PerkComponent ref="perk2" :perks="data || []" :side="type" global-filter="Any" />
      <PerkComponent ref="perk3" :perks="data || []" :side="type" global-filter="Any" />
      <PerkComponent ref="perk4" :perks="data || []" :side="type" global-filter="Any" />
    </div>
  </div>
</template>
