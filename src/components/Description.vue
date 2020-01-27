<template>
  <div class="perk-info">
    <div :class='"perk-info-header " + updateRarity'>
      <h3>{{ perk.name  }}</h3>
      <h4 v-if="perk.character == 'All'">{{ perk.rarity }} Perk</h4>
      <h4 v-else>{{ perk.rarity }} {{ perk.character }} Perk</h4>
    </div>
    <div class="perk-info-desc">
      <p>{{ perk.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    perk: Object
  },
  computed: {
    updateRarity () {
      return this.perk.rarity.toLowerCase().replace(/\s+/g, '-')
    }
  }
}
</script>