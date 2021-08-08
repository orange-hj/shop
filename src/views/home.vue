<template>
  <div class="home">
    <home-shortcut></home-shortcut>
    <home-header></home-header>
    <home-main></home-main>
    <home-kill></home-kill>
    <home-spec></home-spec>
  </div>
</template>

<script>
import HomeShortcut from 'content/home/HomeShortcut.vue'
import HomeHeader from 'content/home/HomeHeader.vue'
import HomeMain from 'content/home/HomeMain.vue'
import HomeKill from 'content/home/HomeKill.vue'
import HomeSpec from 'content/home/HomeSpec.vue'
export default {
  components: { HomeShortcut, HomeHeader, HomeMain, HomeKill, HomeSpec }
}
</script>
<style scoped>
.home {
  background-color: #f4f4f4;
  /* width: 1519px; */
  height: 3000px;
}
</style>