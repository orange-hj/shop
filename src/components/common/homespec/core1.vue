<template>
  <div class="core1">
    <div class="core1-inner">
      <div id="special-offer" class="box">
        <div class="box-hd">
          <a href="#" class="hd-title">
            <h3>每日特价</h3>
            <i></i>
          </a>
          <div class="item-choose">
            <ul>
              <li><a href="#">精选</a></li>
              <li><a href="#">精选</a></li>
              <li><a href="#">精选</a></li>
              <li><a href="#">精选</a></li>
              <li><a href="#">精选</a></li>
            </ul>
          </div>
        </div>
        <div class="box-bd">
          <div class="bd-item">
            <div class="item-left">
              <a href="#">
                <div class="item-left-img">
                  <img src="~img/home/core1/special.jpg" alt="" />
                </div>
                <div class="item-left-info">
                  <p>乔氏 冰凝胶汽车坐垫夏季单片</p>
                  <div class="price">
                    <span class="new-price">￥<i>78</i></span>
                    <span class="old-price">￥<i>120</i></span>
                  </div>
                </div>
                <div class="item-left-logo">66天最低价</div>
              </a>
            </div>
            <div class="item-right">
              <ul>
                <li
                  class="item-right-list"
                  v-for="(item, index) in specialOfferList"
                  :key="index"
                >
                  <a href="#">
                    <div class="item-right-img">
                      <img src="~img/home/core1/goods1.jpg.webp" alt="" />
                      <div class="item-right-logo">1周最低价</div>
                    </div>
                    <div class="item-right-info">
                      <p>阿宽 螺蛳粉115g*3袋</p>
                      <div class="price">
                        <span class="new-price">￥<i>14.9</i></span>
                        <span class="old-price">￥<i>21.9</i></span>
                      </div>
                      <div class="sold"><span>已抢<i>0</i>件</span></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="lightning-buy" class="box">
        <div class="box-hd">
          <a href="#" class="hd-title">
            <h3>品牌闪购</h3>
            <i></i>
          </a>
        </div>
        <div class="box-bd">
          <div class="ln-item">
            <div class="ln-item-left">
              <a href="#">
                <img src="~img/home/core1/brand.jpg" alt="" class="logo-img" />
                <h5 class="core-name">奢品大牌闪购</h5>
                <div class="core-desc"></div>
                <div class="ln-item-left-img">
                  <img src="~img/home/core1/special.jpg" alt="" />
                </div>
              </a>
            </div>
            <div class="ln-item-right">
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                  <div class="ln-item-right-title">斐乐盛夏 新风尚</div>
                </div>
              </a>
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                </div>
              </a>
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                </div>
              </a>
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                </div>
              </a>
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                </div>
              </a>
              <a href="#">
                <div class="ln-item-right-logo">
                  <img src="~img/home/core1/right-logo.jpg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      specialOfferList: ['', '', '', '']
    }
  },
  methods: {
    isSold() {
      console.log(i.innerHTML)
    }
  },
  mounted() {}
}
</script>
<style scoped>
.core1 {
  height: 340px;
  margin-top: 20px;
}
.core1-inner {
  width: 1200px;
  margin: 0 auto;
}
#special-offer {
  margin-right: 20px;
}
.box {
  float: left;
  background-color: #fff;
  height: 340px;
  width: 590px;
}
.box-hd {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}
.box-hd .hd-title {
  display: inline-block;
  position: relative;
  padding: 14px 0;
}
.box-hd .hd-title h3 {
  float: left;
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 32px;
}
.box-hd .hd-title i {
  background-image: url(~img/home/prec/sprite.png);
  background-position: -16px 0;
  width: 16px;
  height: 16px;
  position: relative;
  float: left;
  top: 11px;
  left: 10px;
}
.box-hd .hd-title i:hover {
  background-position: 0 0;
}
.item-choose {
  float: right;
  height: 100%;
}
.item-choose ul li {
  float: left;
  padding: 0 14px;
  height: 60px;
}
.item-choose ul li a {
  padding: 2px 0;
  font-size: 14px;
  color: #666;
}
.item-choose ul li a:hover {
  color: #e1251b;
  border-bottom: 2px solid #e1251b;
}
.box-bd {
  padding: 0 15px 15px;
}
.bd-item {
  width: 560px;
  height: 270px;
}
.item-left {
  background-color: rgba(109, 126, 146, 0.05);
  float: left;
  width: 170px;
  height: 265px;
  margin-right: 6px;
}
.item-left a {
  position: relative;
  width: 170px;
}
.item-left-img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-top: 50px;
}
.item-left-img img {
  width: 100%;
  height: 100%;
}
.item-left-info {
  text-align: center;
}
.item-left-info p {
  margin-top: 9px;
  margin-bottom: 4px;
  height: 19px;
  line-height: 19px;
  width: 150px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  overflow: hidden;
}
.item-left-info .new-price {
  color: #e1251b;
  font-size: 14px;
}
.item-left-info .new-price i {
  font-size: 18px;
  font-weight: 700;
}
.item-left-info .old-price {
  text-decoration: line-through;
  color: #999;
}

.item-left-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 24px;
  background: url('~img/home/core1/special-title.png');
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
}
.item-right {
  height: 265px;
}
.item-right .item-right-list {
  float: left;
  width: 170px;
  margin: 15px 0 40px 20px;
}
.item-right .item-right-list .item-right-img {
  position: relative;
  float: left;
  width: 88px;
  height: 88px;
}
.item-right .item-right-list .item-right-img img {
  width: 100%;
  height: 100%;
}
.item-right .item-right-list .item-right-img .item-right-logo {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 16px;
  line-height: 16px;
  font-size: 11px;
  background: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  color: #fff;
  text-align: center;
  overflow: hidden;
}
.item-right-info {
  float: left;
  width: 75px;
  margin-left: 5px;
}
.item-right-info p {
  display: inline-block;
  width: 100%;
  color: #333;
  height: 32px;
  font-size: 10px;
  line-height: 16px;
  overflow: hidden;
}

.item-right-info .new-price {
  display: inline-block;
  color: #e1251b;
}
.item-right-info .new-price i {
  font-size: 13px;
  font-weight: 700;
}
.item-right-info .old-price {
  display: inline-block;
  width: 100%;
  text-decoration: line-through;
  font-family: sans-serif, serif;
  color: #999;
  font-size: 12px;
  line-height: 14px;
}
.item-right-info .old-price i {
  font-size: 8px;
}
.item-right-info .sold {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  color: #999;
}
.item-right-info .sold i {
  display: inline-block;
  line-height: 18px;
  color: #e1251b;
}

.item-left a:hover .old-price {
  color: #999;
}
.item-right a:hover .item-right-info p {
  color: #c81623;
}
.ln-item {
  width: 560px;
  height: 270px;
}
.ln-item-left {
  float: left;
  width: 270px;
  height: 265px;
  margin-right: 15px;
  background: linear-gradient(
    180deg,
    rgba(141, 199, 226, 0.05),
    rgba(0, 74, 119, 0.05)
  );
}
.ln-item-left a {
  width: 270px;
  height: 265px;
}
.logo-img {
  display: block;
  width: 70px;
  height: 35px;
  margin: 10px auto;
}
.ln-item-left-img {
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 130px;
}
.ln-item-left-img img {
  width: 100%;
  height: 100%;
}
.core-name {
  position: relative;
  color: #333;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  z-index: 1;
  margin-top: 6px;
  margin-bottom: 20px;
}
.ln-item-right {
  float: left;
  width: 270px;
}
.ln-item-right a {
  display: inline-block;
  width: 135px;
  height: 100px;
  box-sizing: border-box;
}

.ln-item-right-logo {
  position: relative;
  width: 100px;
  height: 50px;
  margin: 0 auto;
}
.ln-item-right-logo img {
  width: 100%;
  height: 100%;
}
.ln-item-right-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -20px;
  color: #666;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
}
.ln-item-right a:after {
  /* position: absolute;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  border-right: 1px solid #ccc;
  background: linear-gradient(180deg, white, #eeeeee, #eeeeee, white);
  content: ''; */
}
</style>