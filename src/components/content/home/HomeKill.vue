<template>
  <div class="home-kill">
    <div class="seckill">
      <div class="seckill-inner">
        <!-- 倒计时 -->
        <a href="#" class="seckill-countdown">
          <div class="countdown-title">秒杀</div>
          <div class="countdown-desc"><strong>20:00</strong>点场 距结束</div>
          <div class="countdown-main">
            <span class="timmer-hour timmer">00</span>
            <span class="timmer-minute timmer">00</span>
            <span class="timmer-second">00</span>
          </div>
        </a>
        <!-- 轮播图 -->
        <div class="seckill-list">
          <div class="slider">
            <button class="slider_control slider_control_prev">
              <span class="iconfont">&#xf515;</span>
            </button>
            <button class="slider_control slider_control_next">
              <span class="iconfont">&#xf516;</span>
            </button>
            <div class="slider-list"></div>
          </div>
        </div>
        <!-- 插图 -->
        <div class="seckill-brand">
          <a href="#" class="brand-item">
            <div class="item-img">
              <div class="img">
                <img src="~img/home/seckill/brand.jpg" alt="" />
              </div>
            </div>
            <div class="item-info">
              <p class="item-info-title">轻薄本秒杀专场</p>
              <p class="item-info-promo">标压独显轻薄本</p>
              <div class="item-info-action">
                品类秒杀
                <span class="iconfont">&#xe635;</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    countDown(time) {
      var nowtime = new Data()
      var time = +new Data(time)
      var subtime = time - nowtime
      var times = parseInt(subtime) / 1000
      var h = parseInt(times / 60 / 60)
      h = h < 10 ? '0' + h : h
      var m = parseInt((times / 60) % 60)
      m = m < 10 ? '0' + m : m
      var s = parseInt(times % 60)
      s = s < 10 ? '0' + s : s
    }
  },
  mounted() {}
}
</script>

<style scoped>
.home-kill {
  background-color: #f5f5f5;
  margin-top: 35px;
}
.seckill {
  height: 260px;
  margin-bottom: 20px;
}
.seckill-inner {
  width: 1200px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
}
.seckill-countdown {
  position: relative;
  float: left;
  width: 190px;
  height: 100%;
  color: #fff;
  background-color: #e83632;
  background-image: url(~img/home/seckill/seckill.png);
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.seckill-countdown .countdown-title {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 31px;
}
.seckill-countdown .countdown-desc {
  margin-top: 90px;
  font-size: 14px;
  text-align: center;
}
.seckill-countdown .countdown-desc strong {
  font-size: 18px;
  padding-right: 2px;
  vertical-align: middle;
  display: inline-block;
  margin-top: -1px;
}
.countdown-main {
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  height: 30px;
  margin-top: 10px;
  display: block;
}
.countdown-main span {
  position: relative;
  float: left;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #2f3430;
  margin-right: 20px;
  color: white;
  font-size: 20px;
}
.countdown-main .timmer-second {
  margin-right: 0;
}
.seckill-countdown .countdown-main .timmer:after {
  content: ':';
  display: block;
  position: absolute;
  right: -20px;
  font-weight: bolder;
  font-size: 18px;
  width: 20px;
  height: 100%;
  top: 0;
}

.seckill-list {
  position: relative;
  float: left;
  width: 800px;
  height: 100%;
  overflow: hidden;
}
.slider_control {
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
  z-index: 2;
  border: none;
  outline: none;
}
.slider_control_prev {
  left: 0;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.slider_control_prev span {
  right: 3px;
}
.slider_control_next {
  right: 0;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.slider_control_next span {
  right: -3px;
}
.slider_control span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
}

.seckill-brand {
  position: relative;
  float: left;
  width: 200px;
  height: 260px;
  padding: 10px;
  box-sizing: border-box;
}
.seckill-brand .brand-item .item-img {
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.seckill-brand .brand-item .item-img img {
  width: 100%;
  height: 100%;
}
.seckill-brand .brand-item .item-info {
  width: 100%;
  height: 90px;
  margin-top: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
}
.seckill-brand .brand-item .item-info-title {
  color: #666;
}
.seckill-brand .brand-item .item-info-promo {
  color: #333;
  font-weight: 700;
}
.seckill-brand .brand-item .item-info-action {
  color: #e1251b;
  border-radius: 14px;
  width: 82px;
  height: 24px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  line-height: 22px;
  font-weight: 700;
  padding-left: 4px;
  font-size: 12px;
  border: 1px solid #e1251b;
  margin-top: 4px;
}
</style>