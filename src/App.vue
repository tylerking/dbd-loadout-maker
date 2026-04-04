<script setup lang="ts">
import { ref } from 'vue';
import { themeClass } from './lib/styles';
import * as styles from './lib/styles/app.css.ts';
import Loadout from './lib/components/sections/Loadout/Loadout.vue';
import Icon from './lib/components/elements/Icon/Icon.vue';
import Scene from './lib/components/elements/Scene/Scene.vue';

type Side = 'Killer' | 'Survivor';
const activeSide = ref<Side>('Killer');

const toggleSide = (side: Side) => {
  activeSide.value = side;
};
</script>

<template>
  <div :class="[themeClass, styles.app]">
    <Scene />
    <nav :class="styles.nav">
      <h1 :class="styles.navTitle">DBD LOADOUT MAKER</h1>
      <a href="https://github.com/doitliketyler/dbd-loadout-maker" target="_blank" :class="styles.navLink">
        <Icon name="github" :size="32" />
      </a>
    </nav>
    
    <main :class="styles.main">
      <div :class="styles.toggleContainer">
        <button 
          :class="[styles.toggleButton, activeSide === 'Killer' && styles.activeToggle]" 
          @click="toggleSide('Killer')"
          aria-label="Killer Loadout"
        >
          <img src="/img/killer.webp" alt="Killer" :class="styles.toggleImage" />
        </button>
        <button 
          :class="[styles.toggleButton, activeSide === 'Survivor' && styles.activeToggle]" 
          @click="toggleSide('Survivor')"
          aria-label="Survivor Loadout"
        >
          <img src="/img/survivor.webp" alt="Survivor" :class="styles.toggleImage" />
        </button>
      </div>

      <section v-show="activeSide === 'Killer'">
        <Loadout type="Killer" />
      </section>

      <section v-show="activeSide === 'Survivor'">
        <Loadout type="Survivor" />
      </section>
    </main>

    <footer :class="styles.footer">
      <p :class="styles.footerText">&copy; {{ new Date().getFullYear() }} Tyler King - DBD Loadout Maker</p>
      <p :class="styles.footerSubText">Dead by Daylight is a trademark of Behaviour Interactive Inc.</p>
    </footer>
  </div>
</template>