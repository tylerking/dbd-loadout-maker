<script setup lang="ts">
import { appInstructions } from '../../../data/info';
import * as styles from './Instructions.css.ts';
</script>

<template>
  <div :class="styles.instructions">
    <h3 :class="styles.instructionsTitle">{{ appInstructions.title }}</h3>
    <ul :class="styles.instructionsList">
      <li v-for="item in appInstructions.items" :key="item" :class="styles.instructionsItem">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
