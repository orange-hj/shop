<template>
  <div class="home-shortcut">
    <div class="shortcut">
      <div class="shortcut-left">
        <a href="#">
          <span class="iconfont">&#xe7a3;</span>
          北京
        </a>
        <div class="shortcut-left-city">
          <div class="hot-city">
            <ul>
              <li
                class="shortcut-left-city-item"
                v-for="item in cityList"
                :key="item.id"
              >
                <a href="#"> {{ item.name }} </a>
              </li>
            </ul>
          </div>
          <div class="other-city">
            <p>地区专属版本</p>
            <ul>
              <li><a href="#">中国港澳</a></li>
              <li><a href="#">中国港澳</a></li>
              <li><a href="#">中国港澳</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shortcut-right">
        <ul>
          <li>
            <a href="#">你好,请登录</a>
            &nbsp;&nbsp;
            <a href="#">免费注册</a>
          </li>
          <li class="spacer"></li>
          <li id="profile">
            <a href="#">我的账号</a>
            <span class="iconfont">&#xe602;</span>
            <div class="profile">
              <div class="profile-top">
                <div class="item">
                  <a href="#">待处理订单</a>
                </div>
                <div class="item">
                  <a href="#">待处理订单</a>
                </div>
                <div class="item">
                  <a href="#">待处理订单</a>
                </div>
                <div class="item">
                  <a href="#">待处理订单</a>
                </div>
                <div class="item">
                  <a href="#">待处理订单</a>
                </div>
              </div>
              <div class="profile-bottom">
                <div class="item">
                  <a href="#">我的优惠券</a>
                </div>
                <div class="item">
                  <a href="#">我的优惠券</a>
                </div>
                <div class="item">
                  <a href="#">我的优惠券</a>
                </div>
                <div class="item">
                  <a href="#">我的优惠券</a>
                </div>
              </div>
            </div>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">我的订单</a>
          </li>
          <li class="spacer"></li>
          <li>
            <a href="#">某某会员</a>
          </li>
          <li class="spacer"></li>
          <li id="service">
            <a href="#">联系客服</a>
            <span class="iconfont">&#xe602;</span>
            <div class="service">
              <div class="service-top">
                <div class="title">客户</div>
                <div class="item"><a href="#">帮助中心</a></div>
                <div class="item"><a href="#">售后服务</a></div>
                <div class="item"><a href="#">在线客服</a></div>
                <div class="item"><a href="#">建议意见</a></div>
                <div class="item"><a href="#">电话客服</a></div>
                <div class="item"><a href="#">客服邮箱</a></div>
                <div class="item"><a href="#">金融资讯</a></div>
                <div class="item"><a href="#">全球售客服</a></div>
                <div class="item"><a href="#">企业客服</a></div>
              </div>
              <div class="service-bottom">
                <div class="title">商户</div>
                <div class="item"><a href="#">合作招商</a></div>
                <div class="item"><a href="#">成长中心</a></div>
                <div class="item"><a href="#">商家后台</a></div>
                <div class="item"><a href="#">工作台</a></div>
                <div class="item"><a href="#">商家帮助</a></div>
                <div class="item"><a href="#">规则平台</a></div>
              </div>
            </div>
          </li>
          <li class="spacer"></li>
          <li id="guide">
            <a href="#">网站导购</a>
            <span class="iconfont">&#xe602;</span>
            <div class="guide">
              <dl class="guide-theme">
                <dt>特色主题</dt>
                <dd>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                  <div class="item"><a href="#">新品首发</a></div>
                </dd>
              </dl>
              <dl class="guide-channel">
                <dt>兴业频道</dt>
                <dd>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                </dd>
              </dl>
              <dl class="guide-service">
                <dt>兴业频道</dt>
                <dd>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                </dd>
              </dl>
              <dl class="guide-more">
                <dt>兴业频道</dt>
                <dd>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                  <div class="item"><a href="#">手机</a></div>
                </dd>
              </dl>
            </div>
          </li>
          <li class="spacer"></li>
          <li id="mobile">
            <a href="#">手机端</a>
            <div class="ewm">
              <img src="~img/home/header-service/erweima.png" alt="" />
            </div>
            <div class="mobile">
              <div
                class="mobile-item"
                v-for="(item, index) in mobileList"
                :key="index"
              >
                <div class="mobile-item-img">
                  <img src="~img/home/dog.jpg" alt="" />
                </div>
                <div class="mobile-item-info">
                  <h5 class="info-title">手机XX</h5>
                  <p>新人专享大礼包</p>
                  <a href="#"><span class="iconfont">&#xe65e;</span></a>
                  <a href="#"><span class="iconfont">&#xe620;</span></a>
                </div>
              </div>

              <div class="triangle"></div>
            </div>
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
      cityList: [
        { id: '01', name: '北京' },
        { id: '02', name: '北京' },
        { id: '03', name: '北京' },
        { id: '04', name: '北京' },
        { id: '05', name: '北京' },
        { id: '06', name: '北京' },
        { id: '07', name: '北京' },
        { id: '08', name: '北京' },
        { id: '09', name: '北京' },
        { id: '10', name: '北京' },
        { id: '11', name: '北京' },
        { id: '12', name: '北京' },
        { id: '13', name: '北京' }
      ],
      mobileList: ['', '', '', '']
    }
  }
}
</script>

<style scoped>
.home-shortcut {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #999;
  background-color: #e3e4e5;
}
.shortcut {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
}
.shortcut-left {
  position: relative;
  float: left;
  height: 30px;
  line-height: 28px;
  padding: 0 7px;
  border: 1px solid #e3e4e5;
  box-sizing: border-box;
  z-index: 10;
}
.shortcut-left:after {
  content: '';
  position: absolute;
  top: 29px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  z-index: 15;
}
.shortcut-left a span {
  vertical-align: top;
}
.shortcut-left:hover {
  background-color: #fff;
  border: 1px solid #ccc;
  border-bottom: 1px solid #fff;
}
.shortcut-left:hover .shortcut-left-city {
  display: block;
}
.shortcut-left .shortcut-left-city {
  display: none;
  position: absolute;
  top: 29px;
  left: -1px;
  width: 300px;
  overflow: hidden;
  padding-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
  z-index: 10;
}
.shortcut-left .shortcut-left-city ul {
  display: inline-block;
  width: 305px;
  padding: 6px 0;
}
.shortcut-left .shortcut-left-city .shortcut-left-city-item {
  float: left;
  width: 60px;
  margin: 2px 0;
  text-align: center;
}
.hot-city ul {
  position: relative;
}
.hot-city ul:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 7%;
  right: 0;
  width: 85%;
  height: 1px;
  background-color: #f1f2f3;
}

.shortcut-left .shortcut-left-city .shortcut-left-city-item a {
  padding: 3px 6px;
}
.shortcut-left .shortcut-left-city .shortcut-left-city-item a:hover {
  background-color: #e3e4e5;
}

.other-city {
  width: 100%;
  padding: 0 14px;
  overflow: hidden;
}
.other-city p {
  display: block;
  float: left;
  margin-bottom: 5px;
}
.other-city ul {
  width: 100%;
}
.other-city ul li {
  float: left;
  width: 50%;
}
.other-city ul li a {
  display: block;
}

.shortcut-right {
  float: right;
}
.shortcut-right ul li {
  position: relative;
  float: left;
  padding: 0 15px;
  z-index: 20;
  border: 1px solid #e3e4e5;
  border-bottom: none;
}
.shortcut-right ul li a {
  color: #999;
}
.shortcut-right .spacer {
  overflow: hidden;
  margin: 10px 5px;
  padding: 0.5px;
  height: 10px;
  background-color: #ccc;
}
.shortcut-right ul li .iconfont {
  display: block;
  float: right;
  margin-left: 4px;
  width: 6px;
  height: 6px;
  color: #999;
}
.iconfont {
  font-family: iconfont, sans-serif;
  font-style: normal;
  -webkit-text-stroke-width: 0.2px;
}

#profile:after {
  content: '';
  position: absolute;
  top: 29px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  z-index: 15;
}
.profile {
  position: absolute;
  top: 29px;
  left: -1px;
  display: none;
  width: 220px;
  padding: 5px;
  background-color: #fff;
}
.profile-top {
  position: relative;
  display: inline-block;
}
.profile-top::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f2f3;
}
.profile .item {
  width: 100px;
  float: left;
  padding-left: 5px;
}
.profile-bottom a,
.profile-top a {
  color: #999;
  padding: 3px 6px;
}

.profile a:hover {
  color: #f10215;
}
#service:after {
  content: '';
  position: absolute;
  top: 29px;
  left: 0;
  width: 101%;
  height: 1px;
  background-color: #fff;
  z-index: 15;
}
.service {
  position: absolute;
  top: 29px;
  left: -81px;
  display: none;
  width: 170px;
  background-color: #fff;
}
.service-top {
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
}
.service-top:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f2f3;
}
.service .title {
  padding-left: 16px;
  font-weight: 700;
  color: #000;
}
.service-bottom .item,
.service-top .item {
  display: inline-block;
  width: 80px;
  text-align: center;
  color: #999;
}
.service-top .item a {
  color: #999;
  padding: 3px 6px;
}
.service a:hover {
  color: #f10215;
}
#guide:after {
  content: '';
  position: absolute;
  top: 29px;
  left: 0;
  width: 101%;
  height: 1px;
  background-color: #fff;
}
.guide {
  position: absolute;
  top: 29px;
  left: -1030px;
  display: none;
  width: 1200px;
  padding: 15px 0;
  background-color: #fff;
  z-index: 15;
}
.guide-theme {
  position: relative;
  float: left;
  width: 370px;
  padding-left: 28px;
}

.guide-channel,
.guide-service,
.guide-more {
  position: relative;
  float: left;
  width: 270px;
  padding-left: 28px;
}
.guide-channel:before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  width: 1px;
  height: 100%;
  background-color: #ddd;
}
.guide-service:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background-color: #ddd;
}
.guide-more:before {
  content: '';
  position: absolute;
  top: 0;
  left: 1px;
  width: 1px;
  height: 100%;
  background-color: #ddd;
}
.guide dt {
  margin-bottom: 2px;
  font-weight: 700;
  color: #666;
}
.guide dd {
  display: inline-block;
  line-height: 23px;
}
.guide dd a {
  color: #999;
}
.guide .item {
  display: inline-block;
  width: 80px;
}
.guide .guide-theme .item {
  width: 85px;
}
.guide a:hover {
  color: #f10215;
}

#mobile {
  position: relative;
}

.mobile {
  display: none;
  position: absolute;
  right: -1px;
  top: 29px;
  width: 190px;
  line-height: 0;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-bottom: 3px solid #60575a;
  z-index: 15;
}
.mobile-item {
  display: inline-block;
  position: relative;
  width: 100%;
  z-index: 5;
  padding: 15px 5px;
  border-bottom: 1px solid #e7e7e7;
}
.mobile-item .mobile-item-img {
  float: left;
  width: 74px;
  height: 74px;
  margin-right: 2px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
}
.mobile-item .mobile-item-img img {
  width: 70px;
  height: 70px;
  margin: 1px 0 0 1px;
}

.mobile-item-info {
  float: left;
  padding: 0 5px;
}
.mobile .mobile-item .mobile-item-info h5 {
  line-height: 20px;
  color: #666 !important;
  font-size: 12px;
}
.mobile-item-info p {
  margin: 3px 0;
  line-height: 12px;
  color: #f10214;
}
.mobile .mobile-item .mobile-item-info a {
  display: block;
  float: left;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 2px;
  margin-left: 0;
}
.mobile .mobile-item .mobile-item-info span {
  width: 100%;
  height: 100%;
}

.triangle {
  position: absolute;
  left: 80%;
  top: -10px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: transparent transparent #fff transparent;
}
.ewm {
  position: absolute;
  top: 35px;
  right: 0;
  width: 76px;
  height: 76px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  z-index: -1;
}
.ewm img {
  display: block;
  margin: 8px auto;
  width: 60px;
  height: 60px;
  z-index: -1;
}

/* 鼠标经过显示 */
.ewm:hover .mobile,
#mobile:hover .mobile {
  display: block;
}

#profile:hover .profile,
#service:hover .service,
#guide:hover .guide {
  display: block;
  border: 1px solid #ccc;
}
#guide:hover,
#service:hover,
#profile:hover {
  background-color: #fff;
  color: #f10215;
  border: 1px solid #ccc;
  border-bottom: 1px solid #fff;
}
</style>