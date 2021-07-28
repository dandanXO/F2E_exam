<template>
  <div class="exam">
    <h1>EXAM</h1>
    <div class="container">
      <div class="container_onprocess">
        <div class="title"><div class="titel-bar"></div>進行中</div>
        <div class="contecnt" v-for="(data, index) in getOnprocess" :key="data.name+index">
          <div  class="contecnt_item">
            <img class="icon" :src="data.logo">
            <div  class="contecnt_item-detial">
              <div class="detial-title">
                <div>{{data.status.type}}</div> <div>預計出貨: {{data.date}}</div>
              </div>
              <div class="detial-name">
                {{data.name}}
              </div>
            </div>
            <div class="arrow">
              <img alt="arrow-point-to-right" src="../assets/arrow-point-to-right.png">
            </div>
          </div>
        </div>
      </div>
      <div class="container_success">
        <div class="title"><div class="titel-bar"></div>已完成</div>
        <div class="contecnt" v-for="(data, index) in getSucess" :key="data.name+index">
          <div  class="contecnt_item">
            <img class="icon" :src="data.logo">
            <div  class="contecnt_item-detial">
              <div class="detial-title">
                <div>{{data.status.type}}</div>
              </div>
              <div class="detial-name">
                {{data.name}}
              </div>
            </div>
            <div class="arrow">
              <img alt="arrow-point-to-right" src="../assets/arrow-point-to-right.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function () {
    return {
      orders: [
        {
          name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 3,
            type: "已取消",
          },
          date: "107/6/12",
        },
        {
          name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 2,
            type: "已成立",
          },
          date: "108/7/21",
        },
        {
          name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 1,
            type: "處理中",
          },
          date: "108/6/2",
        },
        {
          name: "Apple AirPds 2",
          logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
          status: {
            code: 4,
            type: "已送達",
          },
          date: "108/3/02",
        },
      ],
    };
  },
  created() {
    // 偽裝 call api
    this.$store.dispatch('getOrders', this.orders)
  },
  computed: {
    ...mapGetters([
      'getOnprocess',
      'getSucess',
    ])
  }
};
</script>

<style lang="scss">
  .container{
    width:100%;
    .arrow{
      display:flex;
      align-items: center;
      justify-content: center;
      width: 16%;
      img{
        width:24px;
      }
    }
    .container_onprocess{
      .titel-bar{
        width: 8px;
        height: 30px;
        background-color: rgb(76, 196, 60);
       
      }
      .title{
        border: 1px solid rgb(189, 189, 189);
        background-color: rgb(240, 233, 233);
        padding: 12px 16px;
        text-align: left;
        font-size: 22px;
        font-weight:bold;
        display:flex;
      }
      .contecnt{
        border: 1px solid rgb(189, 189, 189);
        display:flex;
        flex-direction: column;
        .contecnt_item{
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          font-size:24px;
          text-align:left;
          padding: 20px 16px;
          .icon{
            padding:12px 0 ;
            max-width: 64px;
            max-height: 64px;
          }
          .contecnt_item-detial{
            padding-left: 12px;
            display:flex;
            flex-grow: 1;
            flex-direction: column;
            .detial-title{
              display:flex;
              justify-content: space-between;
            }
            .detial-name{
              color: rgb(134, 133, 133);
            }
          }
        }
      }
    }
    .container_success{
        .titel-bar{
        width: 8px;
        height: 30px;
        background-color: rgb(76, 196, 60);
        margin-right: 4px;
      }
      .title{
        border: 1px solid rgb(189, 189, 189);
        background-color: rgb(240, 233, 233);
        padding: 12px 16px;
        text-align: left;
        font-size: 22px;
        font-weight:bold;
        display:flex;
      }
      .contecnt{
        display:flex;
        flex-direction: column;
        .contecnt_item{
          border: 1px solid rgb(189, 189, 189);
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          font-size:24px;
          text-align:left;
          padding: 20px 16px;
          .icon{
            padding:12px 0 ;
            max-width: 64px;
            max-height: 64px;
          }
          .contecnt_item-detial{
            padding-left: 12px;
            display:flex;
            flex-grow: 1;
            flex-direction: column;
            .detial-title{
              display:flex;
              justify-content: space-between;
            }
            .detial-name{
              color: rgb(134, 133, 133);
            }
          }
        }
      }
    }
  }
</style>