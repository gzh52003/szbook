import Vue from 'vue'
import Vuex from 'vuex'


// import 
Vue.use(Vuex)

export default new Vuex.Store({
  state(){
      if(localStorage.getItem("szbookUsername")&&localStorage.getItem("szbookcarInfo")){
        return {
          "userInfo":{
            "username":localStorage.getItem("szbookUsername"),
            "cartInfo":JSON.parse(localStorage.getItem("szbookcarInfo"))
          },
          "currentGoods": {}
      }

    }

    console.log(2)
      return{
        "userInfo":{},
        "currentGoods": {}
      }

  },

  mutations: {
    addUserInfo(state) {
    //   function getCookie(name) {
    //     let cookieArr = document.cookie.split('; ');
    //     let res = cookieArr.map(function (cur) {
    //       if (cur.split('=')[0] === name) {
    //         return cur.split('=')[1]
    //       }
    //     }).join('')
    //     return res;
    //   }
      state.userInfo.username=localStorage.getItem("szbookUsername");
      state.userInfo.cartInfo=JSON.parse(localStorage.getItem("szbookcarInfo"))
    //   // state["userInfo"] = {
    //   //   "username": getCookie("szbookUsername"),
    //   //   "cartInfo": JSON.parse(getCookie("szbookcarInfo"))
    //   // }
    },
    setCurrentGoods(state,data){
      state.currentGoods = data;
    },
    changeUserInfo(state,data){
      const cartArr = state.userInfo.cartInfo;
      console.log(data._id);
      if(cartArr.some(item=>item.book._id == data._id)){
        cartArr.map(item=>{
          if(item.book._id==data._id){
            item.num+=1;
          }
          return item;
        })
      }else{
        state.userInfo.cartInfo = [...state.userInfo.cartInfo,{book:data,num:1,checked:false}]
      }
    }
  },
  actions: {
 
  },
  modules: {

  }
})
