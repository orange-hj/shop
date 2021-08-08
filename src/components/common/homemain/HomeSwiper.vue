<template>
  <div class="home-swiper">
    <div class="mt" @mousemove="showButton()" @mouseout="hideButton()">
      <button class="swiper-control swiper-control-prev" @click="prev()">
        <span class="iconfont">&#xf515;</span>
      </button>
      <button class="swiper-control swiper-control-next" @click="next()">
        <span class="iconfont">&#xf516;</span>
      </button>
      <ul class="lbt-wrap">
        <li v-for="item in SwiperList" :key="item.id">
          <a href="#"><img :src="item.imgUrl" alt="" /></a>
        </li>
      </ul>
      <div class="circle">
        <ol class="lbt-circle">
          <li
            v-for="item in SwiperList"
            :key="item.id"
            @click="circleChange(item.id)"
          ></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SwiperList: [
        { id: '01', imgUrl: require('@/assets/img/home/lbt3.jpg') },
        { id: '02', imgUrl: require('@/assets/img/home/lbt4.jpg') },
        { id: '03', imgUrl: require('@/assets/img/home/lbt5.jpg') }
      ],
      num: 0,
      circle: 0,
      liLength: 0
    }
  },
  methods: {
    // 显示按钮
    showButton() {
      const mt = document.querySelector('.mt')
      const btn = mt.querySelectorAll('button')
      for (var i = 0; i < btn.length; i++) {
        btn[i].style.display = 'block'
      }
      const ul = document.querySelector('.lbt-wrap')
      this.liLength = ul.children.length
    },
    // 隐藏按钮
    hideButton() {
      const mt = document.querySelector('.mt')
      const btn = mt.querySelectorAll('button')
      for (var i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none'
      }
    },
    // 上一页按钮
    prev() {
      const mt = document.querySelector('.mt')
      const ul = document.querySelector('.lbt-wrap')
      const ol = document.querySelector('.lbt-circle')
      const u_li = ul.querySelectorAll('li')
      const o_li = ol.querySelectorAll('li')
      if (this.num == 0) {
        ul.style.left = -u_li.length * mt.offsetWidth + 'px'
        this.num = u_li.length - 1
      }
      this.num--
      this.animate_lbt(ul, -this.num * mt.offsetWidth)
      //对应小圆点
      if (this.circle == 0) this.circle = o_li.length
      for (var i = 0; i < o_li.length; i++) {
        o_li[i].className = ''
      }
      o_li[--this.circle].className = 'circle-first'
    },
    // 下一页按钮
    next() {
      const mt = document.querySelector('.mt')
      const ul = document.querySelector('.lbt-wrap')
      const ol = document.querySelector('.lbt-circle')
      const u_li = ul.querySelectorAll('li')
      const o_li = ol.querySelectorAll('li')
      if (this.num == u_li.length - 1) {
        ul.style.left = 0 + 'px'
        this.num = 0
      }
      this.num++
      this.animate_lbt(ul, -this.num * mt.offsetWidth)
      this.circle++
      if (this.circle == o_li.length) this.circle = 0
      //对应小圆点
      for (var i = 0; i < o_li.length; i++) {
        o_li[i].className = ''
      }
      o_li[this.circle].className = 'circle-first'
    },
    // 点击小圆点
    circleChange(count) {
      const mt = document.querySelector('.mt')
      const ol = document.querySelector('ol')
      const ul = document.querySelector('.lbt-wrap')
      const o_li = ol.querySelectorAll('li')
      var count = parseInt(count)
      // 清除全部小圆点显示
      for (var i = 0; i < o_li.length; i++) {
        o_li[i].className = ''
      }
      // 小圆点点击变色
      o_li[count - 1].className = 'circle-first'
      this.num = count - 1
      this.circle = count - 1
      this.animate_lbt(ul, -this.num * mt.offsetWidth)
    },

    //轮播图动画
    animate_lbt(obj, target, cellback) {
      clearInterval(obj.timer)
      obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
          clearInterval(obj.timer)
          if (cellback) {
            cellback()
          }
        } else {
          var objLeft = obj.offsetLeft
          var step = (target - objLeft) / 5
          step = step > 0 ? Math.ceil(step) : Math.floor(step)
          obj.style.left = obj.offsetLeft + step + 'px'
        }
      }, 50)
    },

    keeping() {
      //创建一个ul里面的li在最后和第一个li一样的(克隆)
      const that = this
      const mt = document.querySelector('.mt')
      const ul = document.querySelector('.lbt-wrap')
      const u_li = ul.querySelectorAll('li')
      var first = u_li[0].cloneNode('true')
      ul.appendChild(first)
      const ol = document.querySelector('ol')
      ol.children[0].className = 'circle-first'
      var lbtauto = setInterval(function () {
        //自动调用右侧按钮点击事件
        that.next()
      }, 2000)
      // 鼠标放上去就停止自动播放
      mt.addEventListener('mouseenter', function () {
        clearInterval(lbtauto)
      })
      mt.addEventListener('mouseout', function () {})
    }
  },
  mounted() {
    this.keeping()
  }
}
</script>

<style scoped>
.home-swiper {
  width: 590;
}
.home-swiper .mt {
  position: relative;
  float: left;
  margin-left: 10px;
  height: 470px;
  width: 590px;
  overflow: hidden;
}
.swiper-control {
  display: none;
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
  z-index: 10;
  border: none;
  outline: none;
}
.swiper-control-prev {
  left: 0;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.swiper-control-next {
  right: 0;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.swiper-control .iconfont {
  display: block;
  margin: auto;
  font-size: 16px;
  color: #fff;
}

.home-swiper .mt ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
}

.home-swiper .mt ul li {
  float: left;
  width: 590px;
  height: 470px;
}

.home-swiper .mt ul li img {
  width: 100%;
  height: 100%;
}

.home-swiper .mt .circle {
  position: absolute;
  bottom: 10px;
  left: 40px;
}

.home-swiper .mt .circle ol li {
  display: block;
  float: left;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* background-color: rgba(255, 255, 255, .4); */
  margin-right: 6px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

.home-swiper .mt .circle .circle-first {
  background-color: #fff;
}
</style>