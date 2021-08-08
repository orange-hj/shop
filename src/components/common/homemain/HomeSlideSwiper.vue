<template>
  <div class="home-slide-swiper">
    <div class="slide-swiper">
      <button class="slider-control slider-control-prev" @click="slidePrev()">
        <span class="iconfont">&#xe600;</span>
      </button>
      <button class="slider-control slider-control-next" @click="sildeNext()">
        <span class="iconfont">&#xe600;</span>
      </button>
      <ul
        v-for="(item, key) in SlideSwiperList"
        :key="key"
        @mousemove="getNum(key)"
      >
        <li v-for="value in item" :key="value.id" :class="key">
          <img :src="value.imgUrl" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SlideSwiperList: {
        '01': [
          { id: '01', imgUrl: require('img/home/1.png') },
          { id: '02', imgUrl: require('img/home/1.png') },
          { id: '03', imgUrl: require('img/home/1.png') }
        ],
        '02': [
          { id: '01', imgUrl: require('img/home/1.jpg') },
          { id: '02', imgUrl: require('img/home/1.png') },
          { id: '03', imgUrl: require('img/home/1.png') }
        ]
      },
      slideNum: 1,
      keys: 0
    }
  },
  methods: {
    getNum(key) {
      this.keys = key
    },
    slidePrev() {
      const slide = document.querySelector('.slide-swiper')
      const ul = slide.querySelectorAll('ul')
      this.keys = parseInt(this.keys)
      // 用slideNum来判定显示的ul
      if (this.slideNum == 1) {
        this.slideNum = ul.length + 1
      }
      this.slideNum--
      this.keys = '0' + this.slideNum
      for (var i = 0; i < ul.length; i++) {
        // 当this.keys的值等于ul中li的class时，显示当前ul
        if (ul[i].children[0].className === this.keys) {
          ul[i].style.display = 'block'
        } else {
          ul[i].style.display = 'none'
        }
      }
    },
    sildeNext() {
      const slide = document.querySelector('.slide-swiper')
      const ul = slide.querySelectorAll('ul')
      this.keys = parseInt(this.keys)
      // 用slideNum来判定显示的ul
      if (this.slideNum == ul.length) {
        this.slideNum = 0
      }
      this.slideNum++
      this.keys = '0' + this.slideNum
      for (var i = 0; i < ul.length; i++) {
        // 当this.keys的值等于ul中li的class时，显示当前ul
        if (ul[i].children[0].className === this.keys) {
          ul[i].style.display = 'block'
        } else {
          ul[i].style.display = 'none'
        }
      }
    }
  },
  mounted() {
    // 将第一个ul显示，其他隐藏
    const slide = document.querySelector('.slide-swiper')
    const ul = slide.querySelectorAll('ul')
    for (var i = 0; i < ul.length; i++) {
      ul[i].style.display = 'none'
    }
    ul[0].style.display = 'block'
  }
}
</script>

<style scoped>
.home-slide-swiper {
  width: 190px;
  margin-left: 10px;
}
.slide-swiper {
  position: relative;
  width: 190px;
  height: 470px;
}
.slide-swiper ul {
  display: block;
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;
}
.slide-swiper ul li {
  width: 190px;
  height: 150px;
  margin-bottom: 10px;
}
.slide-swiper ul li img {
  width: 100%;
  height: 100%;
}

.slider-control {
  position: absolute;
  top: 50%;
  border-radius: 0;
  width: 25px;
  height: 35px;
  line-height: 35px;
  background-color: #d9d9d9;
  background-color: rgba(0, 0, 0, 0.15);
  margin-top: -20px;
  font-size: 20px;
  border: none;
  outline: none;
  z-index: 100;
}
.slider-control-prev {
  left: 0;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.slider-control-next {
  right: 0;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.slider-control .iconfont {
  display: block;
  margin: auto;
  font-size: 16px;
  color: #fff;
}
</style>