<template>
  <div class="category">
    <div class="ml">
      <ul>
        <li
          v-for="(item, key) in CategoryList"
          :key="key"
          @mousemove="showDemo(key)"
          @mouseout="closeDemo()"
        >
          <a href="#" v-for="item in item" :key="item.id">{{ item.name }}</a>
        </li>
      </ul>
      <div class="demo-wrap" v-show="isShow">
        <div class="demo" v-for="(item, key) in demoList" :key="key">
          <div :class="key" id="de">
            <div
              class="demo-channel"
              v-for="item in item.channel"
              :key="item.id"
            >
              <a href="#" class="demo-channel-lk">
                {{ item.name }}
                <span class="iconfont">&#xe635;</span>
              </a>
            </div>
            <div class="demo-detail">
              <div
                class="demo-detail-item"
                v-for="item in item.info"
                :key="item.id"
              >
                <div class="demo-detail-item-title">
                  <a href="#" class="item-title">{{ item.title }}</a>
                  <span class="iconfont">&#xe635;</span>
                </div>
                <div
                  class="demo-detail-item-info"
                  v-for="(item, index) in item.content"
                  :key="index"
                >
                  <a href="#" class="item-info">{{ item }}</a>
                </div>
              </div>
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
      CategoryList: {
        '01': [{ id: '01', name: '家用电器' }],
        '02': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '03': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '04': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '05': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '06': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '07': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '08': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '09': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ],
        '010': [
          { id: '01', name: '家用' },
          { id: '02', name: '家用' },
          { id: '03', name: '家用' }
        ]
      },

      demoList: {
        '01': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电视',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电视',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '02': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '03': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '04': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '05': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '06': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '07': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '08': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '09': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        },
        '010': {
          channel: [
            { id: '01', name: '家电馆' },
            { id: '02', name: '家电馆' },
            { id: '03', name: '家电馆' },
            { id: '04', name: '家电馆' },
            { id: '05', name: '家电馆' }
          ],
          info: [
            {
              id: '01',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '02',
              title: '电nao',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            },
            {
              id: '03',
              title: '电n',
              content: ['超薄电视', '超薄电视', '超薄电视', '超薄电视']
            }
          ]
        }
      },

      keys: '',
      isShow: false
    }
  },
  methods: {
    showDemo(key) {
      this.isShow = true
      this.keys = key
      // console.log(this.keys)
      const demo = document.querySelectorAll('.demo')
      for (var i = 0; i < demo.length; i++) {
        if (demo[i].children[0].className === this.keys) {
          // console.log(demo[i].children[0].className)
          demo[i].style.display = 'block'
        } else {
          demo[i].style.display = 'none'
        }
      }
    },
    closeDemo() {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.category {
  position: relative;
  width: 190px;
}

.category .ml {
  float: left;
  height: 470px;
  width: 190px;
  background-color: #fff;
}
.category .ml li {
  width: 100%;
  height: 31px;
}
.category .ml li a {
  display: inline-block;
  height: 31px;
  line-height: 31px;
  margin-left: 8px;
  font-size: 15px;
  color: #333;
}

.category .ml li:hover {
  background-color: #a5a5a5;
}

.category .ml li:hover a {
  color: black;
}

.category .ml li a:hover {
  color: #c81623;
}

.demo-wrap {
  position: absolute;
  left: 191px;
  top: 0px;
  width: 1008px;
  min-height: 470px;
  border: 1px solid #f7f7f7;
  background-color: #fff;
  box-shadow: 2px 0 5px rgb(0 0 0 / 30%);
  z-index: 115;
}

.demo {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 0 10px;
  padding-left: 20px;
  z-index: 115;
}

.demo-channel {
  display: inline-block;
  overflow: hidden;
  height: 24px;
}
.demo-channel-lk {
  /* *cursor: pointer; */
  float: left;
  margin-right: 10px;
  padding: 0 10px;
  height: 24px;
  background-color: #333;
  line-height: 24px;
  color: #fff;
}
.demo-channel-lk span {
  font-size: 12px;
  margin-left: 5px;
  color: #fff;
  vertical-align: top;
}

.demo-detail-item {
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
}
.demo-detail-item-title {
  display: inline-block;
  margin-right: 10px;
  text-align: right;
  font-weight: 700;
  width: 80px;
}
.demo-detail-item-title span {
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  margin-left: 5px;
}
.demo-detail-item-info {
  display: inline-block;
  margin: 0 5px;
}
</style>