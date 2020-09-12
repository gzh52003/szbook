import Vue from "vue";
import Vuex from "vuex";
import { request } from "http";
import { isContext } from "vm";

// import
Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    if (
      localStorage.getItem("szbookUsername") &&
      localStorage.getItem("szbookcarInfo")
    ) {
      return {
        userInfo: {
          username: localStorage.getItem("szbookUsername"),
          cartInfo: JSON.parse(localStorage.getItem("szbookcarInfo")),
        },
        currentGoods: {},
      };
    }
    return {
      userInfo: {
        cartInfo: [],
        username: "",
      },
      currentGoods: {},
    };
  },
  getters: {
    totalPrice(state) {
      const arr = state.userInfo.cartInfo.filter((item) => {
        return item.checked;
      });

      let aprice = arr.reduce((pre, item) => {
        let linePrice = item.book.line_price.split("");
        linePrice.shift();
        linePrice = parseFloat(linePrice.join(""));

        return pre + linePrice * item.num;
      }, 0);

      return aprice.toFixed(2);
    },
  },
  mutations: {
    addUserInfo(state) {
      state.userInfo.username = localStorage.getItem("szbookUsername");
      state.userInfo.cartInfo = JSON.parse(
        localStorage.getItem("szbookcarInfo")
      );
    },
    logOut(state) {
      state.userInfo.cartInfo = [];
      state.userInfo.username = "";
      state.userInfo.currentGoods = {};
    },
    setCurrentGoods(state, data) {
      state.currentGoods = data;
    },
    changeUserInfo(state, data) {
      const cartArr = state.userInfo.cartInfo;
      try {
        //购物车中已经有该商品 数量+1
        if (cartArr.some((item) => item.book._id == data._id)) {
          cartArr.map((item) => {
            if (item.book._id == data._id) {
              item.num += 1;
            }
            return item;
          });
          // console.log("state1",state.userInfo.cartInfo)
        } else {
          // console.log("state3")
          state.userInfo.cartInfo.push({ book: data, num: 1, checked: false });
        }
      } catch (err) {
        //将该商品加到购物车中
        state.userInfo.cartInfo.push({ book: data, num: 1, checked: false });
        // console.log("state2",state.userInfo.cartInfo)
      } finally {
        //同步localStroage
        localStorage.setItem(
          "szbookcarInfo",
          JSON.stringify(state.userInfo.cartInfo)
        );
      }
    },
    changeGoodNum(state, { willNum, bookName }) {
      state.userInfo.cartInfo = state.userInfo.cartInfo.map((item) => {
        if (item.book.bookName === bookName) {
          item.num = willNum;
        }
        return item;
      });
    },
    changeCheck(state, { ischeck, bookName }) {
      state.userInfo.cartInfo = state.userInfo.cartInfo.map((item) => {
        if (item.book.bookName === bookName) {
          item.checked = ischeck;
        }
        return item;
      });
    },
    deleteGood(state) {
      state.userInfo.cartInfo = state.userInfo.cartInfo.filter((item) => {
        return !item.checked;
      });
    },
  },
  actions: {},
  modules: {},
});
