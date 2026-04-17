<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Perk, Side } from '../../../data/perks';
import PerkComponent from '../../elements/Perk/Perk.vue';
import * as perkStyles from '../../elements/Perk/Perk.css.ts';
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
      try {
        await document.fonts.ready;
      } catch (e) {
        console.warn('Font loading timed out or failed, continuing anyway');
      }
    }

    const images = captureRef.value.querySelectorAll<HTMLElement>(`.${perkStyles.image}`);
    images.forEach(img => {
      img.style.animation = 'none';
      img.style.transition = 'none';
    });

    await new Promise(resolve => setTimeout(resolve, 600));

    const perkRoots = captureRef.value.querySelectorAll<HTMLElement>(`.${perkStyles.root}`);
    perkRoots.forEach(el => { el.style.borderRight = 'none'; });

    const options = {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: 'transparent',
      filter: (node: any) => {
        if (node.classList) {
          const classes = Array.from(node.classList);
          if (
            classes.includes(perkStyles.controls) ||
            classes.includes(perkStyles.selectWrapper) ||
            classes.includes(perkStyles.filterSelect) ||
            classes.includes(perkStyles.selectCaret) ||
            classes.includes(perkStyles.popover)
          ) {
            return false;
          }
        }
        return true;
      },
      fontEmbedCSS: '',
      includeQueryParams: true
    };

    let dataUrl;
    try {
      dataUrl = await toPng(captureRef.value, options);
    } catch (err: any) {
      if (err.message?.includes('font') || err.toString().includes('trim')) {
        console.warn('Screenshot failed with font error, retrying without font embedding...');
        dataUrl = await toPng(captureRef.value, { ...options, fontEmbedCSS: ' ' });
      } else {
        throw err;
      }
    } finally {
      perkRoots.forEach(el => { el.style.borderRight = ''; });

      images.forEach(img => {
        img.style.animation = '';
        img.style.transition = '';
      });
    }

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
