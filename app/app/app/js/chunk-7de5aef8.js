(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de5aef8"],{"0521":function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},6109:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goodslist"},[r("van-nav-bar",{attrs:{title:t.$route.query.tatle,"left-arrow":"",border:""},on:{"click-left":t.onClickLeft}}),r("van-tabs",{attrs:{animated:"",sticky:""},on:{change:function(e){return t.changegoodstate()},click:function(e){return t.readerpage(t.active)}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.typesort,(function(e,n){return r("van-tab",{key:n,attrs:{title:e.name},scopedSlots:t._u([{key:"title",fn:function(){return[r("p",[t._v(" "+t._s(e.name)+" "),0==t.goodstate&&n==t.active?r("van-icon",{attrs:{name:"arrow-up"}}):r("van-icon",{attrs:{name:"arrow-down"}})],1)]},proxy:!0}],null,!0)},[r("van-list",{attrs:{error:t.error,offset:"","immediate-check":""},on:{"update:error":function(e){t.error=e},load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodslist,(function(e,n){return r("goods-data",{key:e.length},[[r("van-card",{attrs:{centered:!1,price:e.sale_price,desc:e.name,title:e.title,thumb:e.post,"origin-price":e.market_price},on:{click:function(e){return t.gopages(n)}}})]],2)})),1)],1)})),1)],1)},o=[],i=(r("99af"),r("2909"));function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("96cf");var c=r("1da1"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default")],2)},s=[],l={name:"goodsDatas"},f=l,h=r("2877"),p=Object(h["a"])(f,u,s,!1,null,null,null),d=p.exports,g=r("d0e2");Object(g["a"])();var v={name:"goodsList",components:{goodsData:d},data:function(){return{indexpage:1,goodstate:!0,chicktime:1,active:0,goodslist:[],xileixing:"",paixu:1,page:1,error:!1,loading:!1,finished:!1,refreshing:!1,typesort:[{name:"综合"},{name:"销量"},{name:"价格"},{name:"时间"}]}},methods:{onClickLeft:function(){this.$router.back()},renderlistdata:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t.active,e.next=0===e.t0?3:1===e.t0?5:2===e.t0?7:3===e.t0?9:11;break;case 3:return t.xileixing="default_order",e.abrupt("break",11);case 5:return t.xileixing="sale_order",e.abrupt("break",11);case 7:return t.xileixing="price_order",e.abrupt("break",11);case 9:return t.xileixing="create_time_order",e.abrupt("break",11);case 11:return t.goodstate?t.paixu=2:t.paixu=1,e.next=14,t.$request.post("https://api.szbookmall.com/app/product/search",(r={category_id:t.$route.params.id},a(r,t.xileixing,t.paixu),a(r,"pageNumber",t.page),a(r,"pageSize",10),a(r,"product_type",-1),r)).then((function(t){return t}));case 14:n=e.sent,t.goodslist=[].concat(Object(i["a"])(t.goodslist),Object(i["a"])(n.data.data.list)),t.page++,t.loading=!1;case 18:case"end":return e.stop()}}),e)})))()},readerpage:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.xileixing=e.active,e.page=1,e.goodslist=[],1!=e.chicktime?e.goodstate=!e.goodstate:(e.chicktime++,e.goodstate=!0),0==t&&1==e.indexpage&&(e.goodstate=!1,e.indexpage++),r.next=7,e.renderlistdata();case 7:case"end":return r.stop()}}),r)})))()},changegoodstate:function(){this.page=1,this.chicktime=1,this.goodstate=!0},onLoad:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.renderlistdata();case 2:case"end":return e.stop()}}),e)})))()},gopages:function(t){var e=this.goodslist[t].id;this.$router.push("/goods/"+e)}},created:function(){}},y=v,m=(r("f2ec"),Object(h["a"])(y,n,o,!1,null,null,null));e["default"]=m.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=E(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(G([])));b&&b!==r&&n.call(b,i)&&(w=b);var k=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return R()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=k.constructor=m,m.constructor=y,y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),u(k,c,"Generator"),k[i]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},f2ec:function(t,e,r){"use strict";var n=r("0521"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-7de5aef8.js.map