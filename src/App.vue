<script setup lang="ts">
import { ref } from 'vue';
import { themeClass } from './lib/styles';
import * as styles from './lib/styles/app.css.ts';
import Footer from './lib/components/sections/Footer/Footer.vue';
import Instructions from './lib/components/sections/Instructions/Instructions.vue';
import Actions from './lib/components/sections/Actions/Actions.vue';
import Loadout from './lib/components/sections/Loadout/Loadout.vue';
import Scene from './lib/components/elements/Scene/Scene.vue';

type Side = 'Killer' | 'Survivor';
const activeSide = ref<Side>('Killer');

const killerLoadout = ref<InstanceType<typeof Loadout> | null>(null);
const survivorLoadout = ref<InstanceType<typeof Loadout> | null>(null);

const toggleSide = (side: Side) => {
  activeSide.value = side;
};

const triggerRandomize = () => {
  if (activeSide.value === 'Killer') {
    killerLoadout.value?.randomLoadout();
  } else {
    survivorLoadout.value?.randomLoadout();
  }
};

const triggerReset = () => {
  if (activeSide.value === 'Killer') {
    killerLoadout.value?.resetLoadout();
  } else {
    survivorLoadout.value?.resetLoadout();
  }
};

const triggerScreenshot = () => {
  if (activeSide.value === 'Killer') {
    killerLoadout.value?.takeShot();
  } else {
    survivorLoadout.value?.takeShot();
  }
};
</script>

<template>
  <div :class="[themeClass, styles.app]">
    <Scene />
    
    <main :class="styles.main">
      <div :class="[
        styles.loadoutContainer, 
        activeSide === 'Killer' ? styles.killerBg : styles.survivorBg
      ]">
        <img 
          v-if="activeSide === 'Killer'"
          src="/img/killer.webp" 
          alt="" 
          :class="[styles.sideIcon, styles.sideIconLeft]" 
        />
        <img 
          v-if="activeSide === 'Survivor'"
          src="/img/survivor.webp" 
          alt="" 
          :class="[styles.sideIcon, styles.sideIconRight]" 
        />

        <div :class="styles.tabNav">
          <button 
            :class="[
              styles.toggleButton, 
              styles.killerTab,
              activeSide === 'Killer' && [styles.activeToggle, styles.killerActive]
            ]" 
            @click="toggleSide('Killer')"
            aria-label="Killer Loadout"
          >
            <img src="/img/killer.webp" alt="Killer" :class="styles.toggleImage" />
            <span :class="styles.tabLabel">Killer</span>
          </button>

          <Actions 
            @randomize="triggerRandomize"
            @reset="triggerReset"
            @screenshot="triggerScreenshot"
          />

          <button 
            :class="[
              styles.toggleButton, 
              styles.survivorTab,
              activeSide === 'Survivor' && [styles.activeToggle, styles.survivorActive]
            ]" 
            @click="toggleSide('Survivor')"
            aria-label="Survivor Loadout"
          >
            <span :class="styles.tabLabel">Survivor</span>
            <img src="/img/survivor.webp" alt="Survivor" :class="styles.toggleImage" />
          </button>
        </div>

        <div :class="styles.tabContent">
          <section v-show="activeSide === 'Killer'">
            <Loadout ref="killerLoadout" type="Killer" />
          </section>

          <section v-show="activeSide === 'Survivor'">
            <Loadout ref="survivorLoadout" type="Survivor" />
          </section>
        </div>
      </div>

      <Instructions />
    </main>

    <Footer />
  </div>
</template>
