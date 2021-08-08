<template>
  <div class="home-user">
    <div class="user">
      <div class="user-inner">
        <div class="user-logo">
          <a href="#" class="user-avatar">
            <img src="~img/home/dog.jpg" alt="" />
          </a>
        </div>
        <div class="user-show">
          <a href="#">Hi~欢迎逛XX</a>
          <p>
            <a href="#">登录</a>
            &nbsp;|&nbsp;
            <a href="#">注册</a>
          </p>
        </div>
        <div class="user-profit">
          <a href="#">新人福利</a>
          <a href="#">plus会员</a>
        </div>
      </div>
    </div>

    <div class="news">
      <div class="news-inner">
        <div class="news-hd">
          <h5>今日快报</h5>
          <a href="#">
            更多
            <span class="iconfont">&#xe635;</span>
          </a>
        </div>
        <ul class="news-list">
          <li v-for="item in newsList" :key="item.id">
            <a href="#">
              <span>热门</span>
              {{ item.content }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="service">
      <div class="service-inner">
        <ul class="service-item">
          <li v-for="item in serviceList" :key="item.id">
            <a href="#">
              <i class="service-ico">
                <img :src="item.imgUrl" alt="" />
                <img
                  :src="item.hoverImgUrl"
                  alt=""
                  class="service-ico-img-hover"
                />
                <span class="service-txt">{{ item.name }}</span>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div class="service-content">
        <div class="service-content-item">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        { id: '01', title: '热门', content: '大屏全能全新办公本1231312312' },
        { id: '02', title: '热门', content: '大屏全能全新办公本1231312312' },
        { id: '03', title: '热门', content: '大屏全能全1312312' },
        { id: '04', title: '热门', content: '大屏全能全新办公本1231312312' },
        { id: '05', title: '热门', content: '大屏全能全新' }
      ],
      serviceList: [
        {
          id: '01',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '02',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '03',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '04',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '05',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '06',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '07',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        },
        {
          id: '08',
          imgUrl: require('img/home/header-service/icons1.png'),
          hoverImgUrl: require('img/home/header-service/icons11.png'),
          name: '话费'
        }
      ]
    }
  },
  methods: {
    changes() {
      let serv = document.querySelector('.service-item')
    }
  },
  mounted() {}
}
</script>
<style scoped>
.home-user {
  position: relative;
  float: right;
  width: 190px;
  height: 480px;
  z-index: 1;
}
.user {
  height: 102px;
  background: #fff;
  overflow: hidden;
}
.user-inner {
  position: relative;
}
.user-inner .user-logo {
  position: absolute;
  left: 20px;
  top: 13px;
  width: 44px;
  height: 44px;
}
.user-inner .user-avatar {
  display: block;
  width: 44px;
  height: 44px;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 0.5);
}
.user-inner .user-logo img {
  width: 100%;
  height: 100%;
}

.user-inner .user-show {
  position: absolute;
  top: 16px;
  left: 74px;
  right: 10px;
}
.user-profit {
  position: absolute;
  top: 65px;
  left: 15px;
  height: 25px;
  font-size: 0;
  text-align: center;
}
.user-profit a {
  display: inline-block;
  margin: 0 5px;
  width: 70px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border-radius: 13px;
  background: #e1251b;
}
.user-profit:after {
  content: '';
  position: absolute;
  top: 35px;
  left: 10%;
  height: 1px;
  width: 80%;
  border-bottom: 1px solid #eee;
}
.news-inner {
  position: relative;
  overflow: hidden;
  height: 130px;
  background-color: #fff;
}
.news-inner .news-hd {
  height: 20px;
  padding: 10px 0 0;
  box-sizing: content-box;
  position: relative;
  line-height: 20px;
  font-size: 0;
  margin-bottom: 8px;
}

.news-inner .news-hd h5 {
  display: inline-block;
  font-size: 14px;
  margin-left: 15px;
  color: #333;
}
.news-inner .news-hd a {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 12px;
  color: #999;
}
.news-inner .news-hd a:hover {
  color: #e1251b;
}
.news-inner .news-list {
  position: relative;
  padding: 0 15px;
  width: 100%;
  height: 88px;
  overflow: hidden;
}
.news-inner .news-list li {
  max-width: 160px;
  width: 160px;
  height: 16px;
  line-height: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #999;
  margin-bottom: 6px;
}
.news-inner .news-list li a {
  color: #666;
}
.news-inner .news-list li a:hover {
  color: #e1251b;
}
.news-inner .news-list li a span {
  display: inline-block;
  position: relative;
  font-size: 12px;
  height: 16px;
  width: 35px;
  line-height: 16px;
  text-align: center;
  vertical-align: 0;
  color: #e1251b;
  background-color: rgba(225, 37, 27, 0.08);
  margin-right: 5px;
}
.news-inner:after {
  content: '';
  position: absolute;
  top: 129px;
  left: 10%;
  width: 80%;
  height: 1px;
  overflow: none;
  background-color: #eee;
}
.service {
  overflow: hidden;
  position: relative;
  height: 238px;
}
.service-inner {
  overflow: hidden;
  padding: 7px 0.5px;
  background: #fff;
}
.service-inner ul {
  position: relative;
  top: 0;
  padding-top: 5px;
  height: 225px;
}
.service-inner ul li {
  position: relative;
  float: left;
  width: 63px;
  height: 55px;
  background: #fff;
  text-align: center;
}
.service-inner ul li a {
  display: block;
}
.service-inner .service-ico {
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  margin: 0 auto;
}
.service-inner .service-ico img {
  width: 28px;
  height: 28px;
}
.service-ico-img-hover {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
.service-txt {
  display: block;
  height: 25px;
  line-height: 25px;
  border-bottom: 2px solid #fff;
  color: #333;
}
.service-txt:hover {
  border-bottom: 2px solid #e1251b;
}
.service-inner .service-ico:hover .service-ico-img-hover {
  visibility: visible;
}

.service-inner .service-item {
  /* animation-name: move; */
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  /* 动画播放次数  infinite  无限 */
  /* animation-iteration-count: infinite; */
  /* 动画是否在下一周期逆向播放 */
  /* animation-direction: alternate; */
  /* 动画结束后的状态    forwords停在最后 */
  animation-fill-mode: forwards;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-43px);
  }
}
</style>


