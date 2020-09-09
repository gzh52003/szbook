import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations:{

       addUserInfo(state){
        function getCookie(name){
          let cookieArr=document.cookie.split('; ');
          let res=cookieArr.map(function(cur,idx){
              if(cur.split('=')[0]===name){
                  return cur.split('=')[1]
              }
          }).join('')
          return res;
        }
        state["userInfo"]={
            "username":getCookie("szbookUsername"),
            "cartInfo":getCookie("szbookcarInfo")
        }

       },
       getUserInfo(state){
         console.log("state",state);
         return state;
       }
  },
  actions: {
  },
  modules: {

  }
})
