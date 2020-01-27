<template>
  <div class="container">
    <Loadout type="survivor" :perks="survivorData" />
    <hr/>
    <Loadout type="killer" :perks="killerData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loadout from '@/components/Loadout.vue'
import dataKillerPerks from '../data/killer-perks';
import dataSurvivorPerks from '../data/survivor-perks';

export default {
  components: {
    Loadout
  },
  data: function () {
    return {
      survivorData: dataSurvivorPerks,
      killerData: dataKillerPerks
    }
  },
  computed: {
    ...mapGetters([
      'survivorPerks',
      'killerPerks'
    ])
  }
}
</script>



