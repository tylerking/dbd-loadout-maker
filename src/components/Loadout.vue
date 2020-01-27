<template>
  <div class="loadout-container">
    <h2>
      {{ type }}
      <i v-on:click="takeShot()" class="fas fa-image" title="Take Screenshot"></i>
      <i v-on:click="resetLoadout(), randomLoadout()" class="fas fa-retweet" title="Reset &amp; Randomize w/o Filters"></i>
      <i v-on:click="resetLoadout()" class="fas fa-undo" title="Reset Loadout"></i>
      <i v-on:click="randomLoadout()" class="fas fa-random" title="Randomize w Filters"></i>
    </h2>
    <ul class="loadout" :id='"capture-" + type'>
      <Perk ref="perk1" :perk="perks" :type="type" />
      <Perk ref="perk2" :perk="perks" :type="type" />
      <Perk ref="perk3" :perk="perks" :type="type" />
      <Perk ref="perk4" :perk="perks" :type="type" />
    </ul>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
import Perk from '@/components/Perk.vue'

export default {
  name: 'Loadout',
  components: {
    Perk
  },
  props: {
    perks: Array,
    type: String
  },
  data: function () {
    return {
      count: 4
    }
  },
  mounted() {     
  },
  methods: {
    randomLoadout () {
      this.$refs.perk1.randomPerk()
      this.$refs.perk2.randomPerk()
      this.$refs.perk3.randomPerk()
      this.$refs.perk4.randomPerk()
    },
    resetLoadout () {
      this.$refs.perk1.resetPerk()
      this.$refs.perk2.resetPerk()
      this.$refs.perk3.resetPerk()
      this.$refs.perk4.resetPerk()
    },
    takeShot() {
      var type = this.type
      var node = document.querySelector('#capture-' + this.type);
      domtoimage.toPng(node, {height: 156})
        .then(function (dataUrl) {
          console.log('Node ' + node)
          let link = document.createElement('a');
          link.download = type + '-loadout.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error('domtoimage error: ', error);
        });
    }
  }
}
</script>