(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc44980c","chunk-2d0e9577","chunk-2d0b2746"],{"0fee":function(t,n,a){},1276:function(t,n,a){"use strict";var e=a("d784"),s=a("44e7"),i=a("825a"),o=a("1d80"),r=a("4840"),c=a("8aa5"),l=a("50c4"),u=a("14c3"),h=a("9263"),f=a("d039"),d=[].push,v=Math.min,p=4294967295,g=!f((function(){return!RegExp(p,"y")}));e("split",2,(function(t,n,a){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var e=String(o(this)),i=void 0===a?p:a>>>0;if(0===i)return[];if(void 0===t)return[e];if(!s(t))return n.call(e,t,i);var r,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,f+"g");while(r=h.call(g,e)){if(c=g.lastIndex,c>v&&(u.push(e.slice(v,r.index)),r.length>1&&r.index<e.length&&d.apply(u,r.slice(1)),l=r[0].length,v=c,u.length>=i))break;g.lastIndex===r.index&&g.lastIndex++}return v===e.length?!l&&g.test("")||u.push(""):u.push(e.slice(v)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:n.call(this,t,a)}:n,[function(n,a){var s=o(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):e.call(String(s),n,a)},function(t,s){var o=a(e,t,this,s,e!==n);if(o.done)return o.value;var h=i(t),f=String(this),d=r(h,RegExp),w=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),m=new d(g?h:"^(?:"+h.source+")",b),y=void 0===s?p:s>>>0;if(0===y)return[];if(0===f.length)return null===u(m,f)?[f]:[];var C=0,k=0,_=[];while(k<f.length){m.lastIndex=g?k:0;var S,x=u(m,g?f:f.slice(k));if(null===x||(S=v(l(m.lastIndex+(g?0:k)),f.length))===C)k=c(f,k,w);else{if(_.push(f.slice(C,k)),_.length===y)return _;for(var j=1;j<=x.length-1;j++)if(_.push(x[j]),_.length===y)return _;k=C=S}}return _.push(f.slice(C)),_}]}),!g)},"1e24":function(t,n,a){},"23d3":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"reg"},[a("myWrapper",{attrs:{buttonName:t.buttonName,checked:t.checked},on:{goto:t.goto}}),a("p",{staticClass:"gotoLogin",on:{click:t.goto}},[t._v("去登录")])],1)},s=[],i=a("df82"),o={porps:{showLogin:{type:Boolean},showReg:{type:Boolean}},data:function(){return{checked:!0,buttonName:"注册"}},methods:{goto:function(){this.showReg=!1,this.showLogin=!0,this.$emit("gotoLogin",this.showLogin,this.showReg)}},components:{myWrapper:i["a"]}},r=o,c=a("2877"),l=Object(c["a"])(r,e,s,!1,null,null,null);n["default"]=l.exports},"35fb":function(t,n,a){},"3adc":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"mineMain"},[a("van-row",{staticClass:"userInfos"},[a("van-row",[a("van-col",{attrs:{span:"6"}},[a("van-image",{attrs:{round:"",width:"10vh",height:"10vh",src:"https://img.yzcdn.cn/vant/cat.jpeg"}})],1),a("van-col",{attrs:{span:"2",offset:"14"}},[a("i",{staticClass:"iconfont icon-lingdang"})]),a("van-col",{attrs:{span:"2"}},[a("i",{staticClass:"iconfont icon-icon-test"})])],1),a("van-row",{staticClass:"count"},[a("van-col",{attrs:{span:"6"}},[a("span",{staticClass:"num"},[t._v("0")]),a("span",[t._v("智慧卡")])]),a("van-col",{attrs:{span:"6"}},[a("span",{staticClass:"num"},[t._v("0")]),a("span",[t._v("会员积分")])]),a("van-col",{attrs:{span:"6"}},[a("span",{staticClass:"num"},[t._v("0")]),a("span",[t._v("优惠券")])]),a("van-col",{attrs:{span:"6"}},[a("span",{staticClass:"num"},[t._v("0")]),a("span",[t._v("团体会员")])])],1)],1),a("van-row",{staticClass:"quotes"},[a("van-row",{staticStyle:{background:"#fff7df",padding:"2vh"}},[a("van-col",{staticStyle:{"margin-bottom":"1vh"},attrs:{offset:"2"}},[t._v("所有的大人都曾经是小孩，虽然，只有少数人记得")]),a("van-col",{attrs:{offset:"12"}},[t._v("——安托万·德·圣·埃克苏佩里")])],1)],1),a("van-row",{staticClass:"orderInfos"},[a("van-row",{staticClass:"info1"},[a("van-col",{attrs:{span:"6"}},[t._v("我的订单")]),a("van-col",{staticClass:"more",attrs:{span:"3",offset:"14"}},[t._v("更多")])],1),a("van-row",{staticClass:"info2"},[a("van-col",{attrs:{span:"6"}},[a("i",{staticClass:"iconfont icon-qianbao"}),a("p",[t._v("待付款")])]),a("van-col",{attrs:{span:"6"}},[a("i",{staticClass:"iconfont icon-tubiaolunkuo-"}),a("p",[t._v("待发货")])]),a("van-col",{attrs:{span:"6"}},[a("i",{staticClass:"iconfont icon-daifahuo"}),a("p",[t._v("已发货")])]),a("van-col",{attrs:{span:"6"}},[a("i",{staticClass:"iconfont icon-shouhou"}),a("p",[t._v("退款/售后")])])],1)],1),a("van-row",{staticClass:"fav"},[a("van-row",{staticClass:"info1"},[a("van-col",{attrs:{span:"6"}},[t._v("收藏")]),a("van-col",{staticClass:"more",attrs:{span:"3",offset:"14"}},[t._v("更多")])],1),a("van-row",[a("van-panel",{attrs:{title:"商品",desc:"没有收藏商品"}},[a("view",[t._v("内容")])]),a("van-panel",{attrs:{title:"商家",desc:"没有收藏商家"}},[a("view",[t._v("内容")])])],1)],1),a("van-row",{staticClass:"askOrAnswer"},[a("van-row",{staticClass:"info1"},[a("van-col",{attrs:{span:"6"}},[t._v("我的问答")]),a("van-col",{staticClass:"more",attrs:{span:"3",offset:"14"}},[t._v("更多")])],1),a("van-row",[a("van-panel",{attrs:{title:"我的问答",desc:"没有任何问答"}},[a("view",[t._v("内容")])])],1)],1),a("van-overlay",{attrs:{show:t.show}},[a("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"block"},[t.showLogin?a("Login",{attrs:{showLogin:t.showLogin,showReg:t.showReg},on:{gotoReg:t.goto}}):t._e(),t.showReg?a("Reg",{attrs:{showLogin:t.showLogin,showReg:t.showReg},on:{gotoLogin:t.goto}}):t._e()],1)])])],1)},s=[],i=(a("a15b"),a("d3b7"),a("ac1f"),a("1276"),a("68ef"),a("9d70"),a("3743"),a("1a04"),a("5c56"),a("0fee"),a("2638")),o=a.n(i),r=a("d282"),c=a("ba31"),l=a("b1d2"),u=a("7744"),h=Object(r["a"])("cell-group"),f=h[0],d=h[1];function v(t,n,a,e){var s,i=t("div",o()([{class:[d(),(s={},s[l["e"]]=n.border,s)]},Object(c["b"])(e,!0)]),[null==a.default?void 0:a.default()]);return n.title||a.title?t("div",[t("div",{class:d("title")},[a.title?a.title():n.title]),i]):i}v.props={title:String,border:{type:Boolean,default:!0}};var p=f(v),g=Object(r["a"])("panel"),w=g[0],b=g[1];function m(t,n,a,e){var s=function(){return[a.header?a.header():t(u["a"],{attrs:{icon:n.icon,label:n.desc,title:n.title,value:n.status,valueClass:b("header-value")},class:b("header")}),t("div",{class:b("content")},[a.default&&a.default()]),a.footer&&t("div",{class:[b("footer"),l["d"]]},[a.footer()])]};return t(p,o()([{class:b(),scopedSlots:{default:s}},Object(c["b"])(e,!0)]))}m.props={icon:String,desc:String,title:String,status:String};var y=w(m),C=(a("4056"),a("44bf")),k=(a("81e6"),a("9ffb")),_=(a("4d48"),a("d1e1")),S=(a("35fb"),a("ea8e")),x=Object(r["a"])("skeleton"),j=x[0],R=x[1],L="100%",O="60%";function N(t,n,a,e){if(!n.loading)return a.default&&a.default();function s(){if(n.title)return t("h3",{class:R("title"),style:{width:Object(S["a"])(n.titleWidth)}})}function i(){var a=[],e=n.rowWidth;function s(t){return e===L&&t===+n.row-1?O:Array.isArray(e)?e[t]:e}for(var i=0;i<n.row;i++)a.push(t("div",{class:R("row"),style:{width:Object(S["a"])(s(i))}}));return a}function r(){if(n.avatar){var a=Object(S["a"])(n.avatarSize);return t("div",{class:R("avatar",n.avatarShape),style:{width:a,height:a}})}}return t("div",o()([{class:R({animate:n.animate,round:n.round})},Object(c["b"])(e)]),[r(),t("div",{class:R("content")},[s(),i()])])}N.props={title:Boolean,round:Boolean,avatar:Boolean,row:{type:[Number,String],default:0},loading:{type:Boolean,default:!0},animate:{type:Boolean,default:!0},avatarSize:{type:String,default:"32px"},avatarShape:{type:String,default:"round"},titleWidth:{type:[Number,String],default:"40%"},rowWidth:{type:[Number,String,Array],default:L}};var B=j(N),E=(a("a71a"),a("6e47")),I=a("2b0e"),W=a("8cb8"),$=a("23d3");I["a"].use(E["a"]),I["a"].use(B),I["a"].use(_["a"]),I["a"].use(k["a"]),I["a"].use(C["a"]),I["a"].use(y);var z={data:function(){return{show:!0,showLogin:!0,showReg:!1}},created:function(){var t=this,n=localStorage.getItem("userInfo");n?(this.show=!1,n=n.split(""),n.pop(),n.shift(),n=n.join(""),fetch("http://42.194.179.50/api/login/check?authorization=".concat(n)).then((function(t){return t.json()})).then((function(n){0==n.code?t.show=!0:t.show=!1}))):(this.show=!0,console.log("www"))},methods:{goto:function(t,n){this.showLogin=t,this.showReg=n}},components:{Login:W["default"],Reg:$["default"]}},A=z,q=(a("d781"),a("2877")),J=Object(q["a"])(A,e,s,!1,null,null,null);n["default"]=J.exports},"44e7":function(t,n,a){var e=a("861d"),s=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==s(t))}},"4d48":function(t,n,a){"use strict";a("68ef"),a("bf60")},"5c56":function(t,n,a){},"7b0a":function(t,n,a){},"81e6":function(t,n,a){"use strict";a("68ef"),a("7b0a")},"8cb8":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"login"},[a("myWrapper",{attrs:{buttonName:t.buttonName,checked:t.checked}},[a("van-checkbox",{staticClass:"agree",attrs:{"checked-color":"#000","icon-size":"18px"},model:{value:t.checked,callback:function(n){t.checked=n},expression:"checked"}},[t._v("登录即代表同意深圳书城协议服务和隐私政策 ")])],1),a("p",{staticClass:"gotoReg",on:{click:t.goto}},[t._v("还没有账号，立即注册")])],1)},s=[],i=a("df82"),o={porps:{showLogin:{type:Boolean},showReg:{type:Boolean}},data:function(){return{checked:!0,buttonName:"登录"}},methods:{goto:function(){this.showReg=!0,this.showLogin=!1,this.$emit("gotoReg",this.showLogin,this.showReg)}},components:{myWrapper:i["a"]}},r=o,c=a("2877"),l=Object(c["a"])(r,e,s,!1,null,null,null);n["default"]=l.exports},"9ffb":function(t,n,a){"use strict";var e=a("d282"),s=a("9884"),i=Object(e["a"])("col"),o=i[0],r=i[1];n["a"]=o({mixins:[Object(s["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,n=this.parent||{},a=n.spaces;if(a&&a[t]){var e=a[t],s=e.left,i=e.right;return{paddingLeft:s?s+"px":null,paddingRight:i?i+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],a=this.span,e=this.offset;return n(this.tag,{style:this.style,class:r((t={},t[a]=a,t["offset-"+e]=e,t)),on:{click:this.onClick}},[this.slots()])}})},a15b:function(t,n,a){"use strict";var e=a("23e7"),s=a("44ad"),i=a("fc6a"),o=a("a640"),r=[].join,c=s!=Object,l=o("join",",");e({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(i(this),void 0===t?",":t)}})},bf60:function(t,n,a){},d1e1:function(t,n,a){"use strict";var e=a("d282"),s=a("9884"),i=Object(e["a"])("row"),o=i[0],r=i[1];n["a"]=o({mixins:[Object(s["b"])("vanRow")],props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{spaces:function(){var t=Number(this.gutter);if(t){var n=[],a=[[]],e=0;return this.children.forEach((function(t,n){e+=Number(t.span),e>24?(a.push([n]),e-=24):a[a.length-1].push(n)})),a.forEach((function(a){var e=t*(a.length-1)/a.length;a.forEach((function(a,s){if(0===s)n.push({right:e});else{var i=t-n[a-1].right,o=e-i;n.push({left:i,right:o})}}))})),n}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],a=this.align,e=this.justify,s="flex"===this.type;return n(this.tag,{class:r((t={flex:s},t["align-"+a]=s&&a,t["justify-"+e]=s&&e,t)),on:{click:this.onClick}},[this.slots()])}})},d781:function(t,n,a){"use strict";var e=a("1e24"),s=a.n(e);s.a}}]);