<template>
  <div class="home-header">
    <div class="header">
      <div class="logo" id="logo">
        <img src="~img/home/header-service/logo.gif" alt="" />
      </div>
      <div class="search">
        <div class="search-l">
          <input type="text" name="search" id="search" placeholder="请输入" />
          <a href="#">搜索</a>
        </div>
        <div class="search-r">
          <a href="javascript:;" class="cart-a">
            <span class="iconfont" id="cart">&#xe61d;</span> 我的购物车
            <i class="count">0</i>
          </a>
        </div>
      </div>
      <div class="hotwords">
        <a href="#" v-for="(item, index) in HotwordsList" :key="index">
          {{ item }}
        </a>
      </div>
      <div class="navitems">
        <ul>
          <li v-for="(item, index) in NavitemsList" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HotwordsList: [
        '品优购首发',
        '亿元优惠',
        '9.9团购',
        '满99减30',
        '3件8折',
        '饮品',
        '零食'
      ],
      NavitemsList: [
        '秒杀',
        '优惠券',
        'puls会员',
        '品牌闪购',
        '拍卖',
        '家用电器',
        '线上超市',
        '海外代购',
        '云'
      ]
    }
  }
}
</script>

<style scoped>
.home-header {
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.header {
  position: relative;
  width: 1200px;
  height: 140px;
  margin: 0 auto;
}
.logo {
  position: absolute;
  top: 10px;
  left: 0;
  width: 190px;
  height: 120px;
}
.logo img {
  display: block;
  margin: 0 auto;
  width: 134px;
  height: 120px;
}
.search {
  position: absolute;
  top: 25px;
  left: 200px;
  width: 800px;
}
.search-l {
  float: left;
  padding-left: 60px;
}
.search-l input {
  float: left;
  width: 460px;
  height: 35px;
  border: 2px solid #b1191a;
  outline: none;
  padding-left: 10px;
  color: #ccc;
}
.search-l a {
  display: block;
  float: left;
  width: 78px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  background-color: #b1191a;
  border: none;
}
.search-r {
  float: left;
  position: relative;
}

.search-r a {
  display: block;
  width: 132px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  color: #e60012;
  margin-left: 20px;
}
.search-r #cart {
  font-size: 24px;
  vertical-align: top;
  margin-left: 10px;
  margin-right: 8px;
}
.search-r .count {
  position: absolute;
  top: 1px;
  left: 44px;
  display: block;
  font-size: 12px;
  width: 20px;
  line-height: 15px;
  color: #fff;
  background-color: #e1251b;
  border-radius: 7px;
  min-width: 12px;
  text-align: center;
}

.hotwords {
  position: absolute;
  top: 65px;
  left: 260px;
}
.hotwords a {
  margin-right: 20px;
  color: #999;
}
.hotwords a:hover {
  color: #e1251b;
}

.navitems {
  position: absolute;
  left: 203px;
  bottom: 0px;
  height: 40px;
  width: 800px;
}
.navitems ul li {
  float: left;
}
.navitems ul li a {
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
}
</style>