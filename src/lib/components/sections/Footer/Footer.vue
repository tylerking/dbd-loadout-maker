<script setup lang="ts">
import * as styles from './Footer.css.ts';
</script>

<template>
  <footer :class="styles.footer">
    <p :class="styles.footerText">&copy; {{ new Date().getFullYear() }} Tyler King - DBD Loadout Maker</p>
    <p :class="styles.footerSubText">Dead by Daylight is a trademark of Behaviour Interactive Inc.</p>
  </footer>
</template>
