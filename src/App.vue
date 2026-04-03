<script setup lang="ts">
import { themeClass } from './lib/styles';
import Loadout from './lib/components/sections/Loadout/Loadout.vue';
import Icon from './lib/components/elements/Icon/Icon.vue';
</script>

<template>
  <div :class="themeClass" id="app">
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #333; background: #111;">
      <h1 style="margin: 0; font-size: 1.5rem; color: #f39c12; letter-spacing: 2px;">DBD LOADOUT MAKER</h1>
      <a href="https://github.com/doitliketyler/dbd-loadout-maker" target="_blank" style="color: #eee;">
        <Icon name="github" :size="32" />
      </a>
    </nav>
    
    <main style="padding: 2rem; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 3rem; width: 100%;">
      <section>
        <Loadout type="Survivor" />
      </section>
      
      <div style="height: 2px; background: linear-gradient(to right, transparent, #333, transparent); width: 100%;"></div>
      
      <section>
        <Loadout type="Killer" />
      </section>
    </main>

    <footer style="padding: 3rem 2rem; text-align: center; border-top: 1px solid #333; margin-top: 4rem; background: #111; color: #666;">
      <p style="margin-bottom: 0.5rem;">&copy; {{ new Date().getFullYear() }} Tyler King - DBD Loadout Maker</p>
      <p style="font-size: 0.8rem;">Dead by Daylight is a trademark of Behaviour Interactive Inc.</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1a1a1a;
  color: #f5f5f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
