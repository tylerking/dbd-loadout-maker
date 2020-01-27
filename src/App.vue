<template>
  <div id="app">
    <nav>
      <h1>DBD Loadout Maker</h1>
      <a href="https://github.com/doitliketyler/dbd-loadout-maker"><i class="fab fa-github"></i></a>
    </nav>
    <router-view :key="$route.fullPath"/>
    <nav>
      <p>&copy; Tyler King</p>
      <!--<p>Thanks to <a href="https://dennisreep.nl/dbd/" target="_blank">Dennis Reep</a> for providing the Perk API.</p>-->
    </nav>
  </div>
</template>

<style lang="stylus">
@import '/styles/index.styl'
</style>
