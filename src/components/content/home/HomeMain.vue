<template>
  <div id="home-main">
    <div class="main">
      <home-category class="categoty"></home-category>
      <home-swiper class="swiper"></home-swiper>
      <home-slide-swiper class="slide-swiper"></home-slide-swiper>
      <home-user></home-user>
    </div>
  </div>
</template>

<script>
import HomeCategory from 'common/homemain/HomeCategory.vue'
import HomeSwiper from 'common/homemain/HomeSwiper.vue'
import HomeSlideSwiper from 'common/homemain/HomeSlideSwiper.vue'
import HomeUser from 'common/homemain/HomeUser.vue'
export default {
  components: { HomeCategory, HomeSwiper, HomeSlideSwiper, HomeUser }
}
</script>

<style scoped>
#home-main {
  position: relative;
  width: 100%;
  height: 475px;
  background-color: #f4f4f4;
}
.main {
  width: 1200px;
  margin: 0 auto;
  padding-top: 5px;
}
.category {
  float: left;
}
.swiper {
  float: left;
}
.slide-swiper {
  float: left;
}
</style>