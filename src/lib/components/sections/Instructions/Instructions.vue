<script setup lang="ts">
import { appInstructions } from '../../../data/info';
import * as styles from './Instructions.css.ts';
</script>

<template>
  <section :class="styles.instructions" aria-label="How to use">
    <h2 :class="styles.instructionsTitle">{{ appInstructions.title }}</h2>
    <ul :class="styles.instructionsList">
      <li v-for="item in appInstructions.items" :key="item" :class="styles.instructionsItem">
        {{ item }}
      </li>
    </ul>
  </section>
</template>
