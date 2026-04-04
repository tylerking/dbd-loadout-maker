<script setup lang="ts">
import { ref } from 'vue';
import type { Perk, Side } from '../../../data/perks';
import PerkComponent from '../../elements/Perk/Perk.vue';
import Icon from '../../elements/Icon/Icon.vue';
import * as styles from './Loadout.css.ts';

const props = defineProps<{
  type: Side;
}>();

const { data, pending, error } = await useFetch('/api/graphql', {
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
    const dataUrl = await toPng(captureRef.value, { height: 160 });
    const link = document.createElement('a');
    link.download = `${props.type.toLowerCase()}-loadout.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('html-to-image error: ', error);
  }
};
</script>

<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <h2 :class="styles.title">{{ type }} Loadout</h2>
      <div v-if="pending" style="font-size: 0.8rem; color: #888;">Loading perks...</div>
      <div v-else-if="error" style="color: #ff4d4d;">Error loading perks</div>
      <div v-else :class="styles.actions">
        <Icon name="image" :size="24" :class="styles.icon" title="Take Screenshot" @click="takeShot" />
        <Icon name="refresh-cw" :size="24" :class="styles.icon" title="Reset & Randomize" @click="resetLoadout(); randomLoadout()" />
        <Icon name="rotate-ccw" :size="24" :class="styles.icon" title="Reset All" @click="resetLoadout" />
        <Icon name="shuffle" :size="24" :class="styles.icon" title="Randomize Remaining" @click="randomLoadout" />
      </div>
    </div>
    
    <div :class="styles.grid" ref="captureRef">
      <PerkComponent v-if="data" ref="perk1" :perks="data" :side="type" />
      <PerkComponent v-if="data" ref="perk2" :perks="data" :side="type" />
      <PerkComponent v-if="data" ref="perk3" :perks="data" :side="type" />
      <PerkComponent v-if="data" ref="perk4" :perks="data" :side="type" />
    </div>
  </div>
</template>
