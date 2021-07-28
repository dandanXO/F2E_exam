import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: {}
  },
  getters: {
    getAll: state => {
      return state.orders
    },
    getOnprocess: state =>{
      
      return state.orders.filter(order => {
        if( order.status.code <= 2){
          return order
        }
      }).sort(function(a,b){
       // DESC  排序 
        return new Date(b.date) - new Date(a.date);
      });
    },
    getSucess: state => {
      return state.orders.filter(order =>{
        if( order.status.code >= 3){
          return order
        }
      }).sort(function(a,b){
        // DESC  排序
        return new Date(b.date) - new Date(a.date);
      });
    }
  },
  mutations: {
    setOrders(state, ordersData){
      state.orders = ordersData
    }
  },
  actions: {
    getOrders(context, ordersData) {
      // 假裝從api來
      context.commit('setOrders', ordersData)
    }
  },
  modules: {}
})