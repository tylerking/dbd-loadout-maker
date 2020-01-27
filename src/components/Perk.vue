<template>
  <li class="loadout-perk animated jackInTheBox">

    <v-popover trigger="hover" placement="right" v-if="perkActive">
      <div :class='"frame " + updateRarity'>
        <img :src="'../img/' + type + '-perks/' + updateName(chosenPerk.name) + '.png'" :alt='chosenPerk.name'/>
      </div>
      <Description :perk="chosenPerk" slot="popover"/>
    </v-popover>
    <v-popover placement="right" v-else>
      <div class="frame" v-on:click="displayPerks()">
        <i class="fas fa-plus fa-lg"></i>
      </div>
      <div class="loadout-perk-list" slot="popover">
        <ul>
          <span v-on:click="choosePerk(perk.name)" v-for="perk in perks" v-bind:key="perk.name">{{ perk.name }}</span>
        </ul>
      </div>
    </v-popover>

    <i v-on:click="randomPerk()" class="fas fa-random"></i>
    <i v-on:click="resetPerk()" class="fas fa-redo"></i>
    <i v-on:click="resetPerk(), randomPerk()" class="fas fa-retweet" title="Reset &amp; Randomize w/o Filters"></i>
    <i v-if="lockPerk" v-on:click="togglePerkLock()" class="fas fa-lock"></i>
    <i v-else v-on:click="togglePerkLock()" class="fas fa-unlock"></i>

    <br/>

    <select :name="'filter'" v-model="filter" v-if="type == 'Killer'">
      <option value="Any" selected>Any</option>
      <option v-for="filter in killerFilters" :value="filter" v-bind:key="filter">{{ filter }}</option>
    </select>
    <select :name="'filter'" v-model="filter" v-else>
      <option value="Any" selected>Any</option>
      <option v-for="filter in survivorFilters" :value="filter" v-bind:key="filter">{{ filter }}</option>
    </select>

  </li>
</template>

<script>
import Description from '@/components/Description.vue'

export default {
  name: 'Perk',
  components: {
    Description
  },
  props: {
    perk: Array,
    type: String
  },
  data: function () {
    return {
      perks: this.perk,
      perkType: this.type,
      filtered: [],
      perkActive: false,
      chosenPerk: {},
      filter: 'Any',
      lockPerk: false,
      survivorFilters: [
        'Aura',
        'Evasion',
        'Healing',
        'Objective',
        'Stealth'
      ],
      killerFilters: [
        'Aura',
        'Chase',
        'Hunt',
        'Penalty',
        'Terror'
      ]
    }
  },
  computed: {
    updateRarity () {
      return this.chosenPerk.rarity.toLowerCase().replace(/\s+/g, '-')
    }
  },
  methods: {
    choosePerk (perkName) {
      this.perkActive = true
      this.chosenPerk = this.perks.find(perk => perk.name == perkName);
      this.filter = this.chosenPerk.type
    },
    displayPerks () {
      if (this.filter !== 'Any') {
        this.perks = this.perks.filter(perk => perk.type == this.filter)
      } else {
        this.perks = this.perk
      }
    },
    randomPerk () {
      if (this.lockPerk !== true) {
        this.perkActive = true
        if (this.filter == 'Any') {
          this.chosenPerk = this.perks[Math.floor(Math.random() * this.perks.length)];
        } else {
          this.perks = this.perks.filter(perk => perk.type == this.filter)
          this.chosenPerk = this.perks[Math.floor(Math.random() * this.perks.length)];
        }
        this.filter = this.chosenPerk.type
        this.perks = this.perk
      } 
    },
    resetPerk () {
      if (this.lockPerk !== true) {
        this.lockPerk = false
        this.perkActive = false
        this.chosenPerk = {}
        this.filter = 'Any'
      }
    },
    togglePerkLock() {
      this.lockPerk = (this.lockPerk === false) ? true : false;
    },
    updateName (name) {
      return name.replace(/\s+/g, '-').replace(/:/g, '').replace(/'/g, '').replace(/!/g, '').toLowerCase()
    }
  }
}
</script>