(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a74808d"],{"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}},2381:function(t,e,n){},"3c32":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("2381")},"417e":function(t,e,n){"use strict";var r=n("d282"),i=n("ad06"),o=n("78eb"),a=n("9884"),c=n("ea8e"),s=function(t){var e=t.parent,n=t.bem,r=t.role;return{mixins:[Object(a["a"])(e),o["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===r&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,n=t.target,r=this.$refs.icon,i=r===n||r.contains(n);this.isDisabled||!i&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,r=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(c["a"])(r)}},[this.slots("icon",{checked:e})||t(i["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:r,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}},u=Object(r["a"])("checkbox"),l=u[0],f=u[1];e["a"]=l({mixins:[s({bem:f,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,n=e.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var r=n.indexOf(this.name);-1!==r&&(n.splice(r,1),e.$emit("input",n))}}}})},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),a=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(n,r){var i=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!m&&y||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var s=i(t),d=String(this),p="function"===typeof r;p||(r=String(r));var v=s.global;if(v){var w=s.unicode;s.lastIndex=0}var k=[];while(1){var E=l(s,d);if(null===E)break;if(k.push(E),!v)break;var S=String(E[0]);""===S&&(s.lastIndex=u(d,a(s.lastIndex),w))}for(var O="",C=0,I=0;I<k.length;I++){E=k[I];for(var L=String(E[0]),j=f(h(c(E.index),d.length),0),_=[],R=1;R<E.length;R++)_.push(g(E[R]));var T=E.groups;if(p){var $=[L].concat(_,j,d);void 0!==T&&$.push(T);var N=String(r.apply(void 0,$))}else N=x(L,d,j,_,T,r);j>=C&&(O+=d.slice(C,j)+N,C=j+L.length)}return O+d.slice(C)}];function x(t,n,r,i,a,c){var s=r+t.length,u=i.length,l=v;return void 0!==a&&(a=o(a),l=p),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var f=d(l/10);return 0===f?e:f<=u?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},"78eb":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},"872c":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,c=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,i,c,f=this,h=u&&f.sticky,d=r.call(f),p=f.source,v=0,g=t;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",d)),l&&(n=new RegExp("^"+p+"$(?!\\s)",d)),s&&(e=f.lastIndex),i=o.call(h?n:f,g),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&a.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=O(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(_([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function O(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=k.constructor=y,y.constructor=m,m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),s(k,c,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b7f8:function(t,e,n){t.exports=n.p+"app/img/szlogo.png"},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!u||!l||h)||"split"===t&&!d){var m=/./[p],y=n(p,""[t],(function(t,e,n,r,i){return e.exec===a?v&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=y[0],x=y[1];r(String.prototype,t,b),r(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},df82:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("div",{staticClass:"closeWrapper"}),r("img",{staticClass:"logo",attrs:{src:n("b7f8"),alt:""}}),r("van-field",{staticClass:"info",attrs:{name:"用户名",label:"用户名",placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("van-field",{staticClass:"info",attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("van-field",{staticClass:"info verify",attrs:{"line-block":"",placeholder:"验证码"},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}}),r("div",{staticClass:"svgVcodeBox"},[r("span",{attrs:{id:"svgVcode"},on:{click:function(e){return t.getVcode()}}})]),t._t("default"),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{id:"btn",disabled:t.ableToSubmit(),round:"",block:"",type:"info","native-type":"submit"},on:{click:t.onSubmit}},[t._v(t._s(t.buttonName))])],1)],2)},i=[],o=(n("99af"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),a=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("872c"),n("c31d")),c=n("2b0e"),s=n("2638"),u=n.n(s),l=n("d282"),f=n("ba31"),h=n("6605"),d=n("a142"),p=n("ad06"),v=Object(l["a"])("popup"),g=v[0],m=v[1],y=g({mixins:[Object(h["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,r=this.position,i=this.duration,o="center"===r,a=this.transition||(o?"van-fade":"van-popup-slide-"+r),c={};if(Object(d["c"])(i)){var s=o?"animationDuration":"transitionDuration";c[s]=i+"s"}return e("transition",{attrs:{name:a},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:c,class:m((t={round:n},t[r]=r,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(p["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:m("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}}),b=Object(l["a"])("notify"),x=b[0],w=b[1];function k(t,e,n,r){var i={color:e.color,background:e.background};return t(y,u()([{attrs:{value:e.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:i,class:[w([e.type]),e.className]},Object(f["b"])(r,!0)]),[(null==n.default?void 0:n.default())||e.message])}k.props=Object(a["a"])({},h["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var E,S,O=x(k);function C(t){return Object(d["e"])(t)?t:{message:t}}function I(t){if(!d["g"])return S||(S=Object(f["c"])(O,{on:{click:function(t){S.onClick&&S.onClick(t)},close:function(){S.onClose&&S.onClose()},opened:function(){S.onOpened&&S.onOpened()}}})),t=Object(a["a"])({},I.currentOptions,C(t)),Object(a["a"])(S,t),clearTimeout(E),t.duration&&t.duration>0&&(E=setTimeout(I.clear,t.duration)),S}function L(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}I.clear=function(){S&&(S.value=!1)},I.currentOptions=L(),I.setDefaultOptions=function(t){Object(a["a"])(I.currentOptions,t)},I.resetDefaultOptions=function(){I.currentOptions=L()},I.install=function(){c["a"].use(O)},I.Component=O,c["a"].prototype.$notify=I;var j=I,_=(n("3c32"),n("417e")),R=(n("1a04"),n("1146"),n("565f")),T=(n("66b9"),n("b650"));c["a"].use(T["a"]),c["a"].use(R["a"]),c["a"].use(_["a"]),c["a"].use(j);var $={props:{buttonName:{type:String},checked:{type:Boolean}},data:function(){return{username:"",password:"",verify:""}},created:function(){this.getVcode()},methods:{getVcode:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://42.194.179.50/api/vcode",{credentials:"include"}).then((function(t){return t.json()}));case 2:e=t.sent,1===e.code&&(document.querySelector("#svgVcode").innerHTML=e.data);case 4:case"end":return t.stop()}}),t)})))()},goto:function(){this.$router.push("/reg")},closeWrapper:function(){this.show=!1},ableToSubmit:function(){return!(this.password&&this.username&&this.verify&&this.checked)},onSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"登录"===t.buttonName&&(n="",n+="password=".concat(t.password,"&username=").concat(t.username,"&vcode=").concat(t.verify,"&mdl=").concat(t.checked),console.log(n),fetch("http://42.194.179.50/api/login?".concat(n),{credentials:"include"}).then((function(t){return t.json()})).then((function(e){1==e.code?(localStorage.setItem("userInfo",JSON.stringify(e.data.authorization)),console.log(e),localStorage.setItem("szbookUsername",t.username),localStorage.setItem("szbookcarInfo",JSON.stringify(e.data.cartInfo)),j({type:"success",message:"登录成功"}),t.$router.replace("/home"),t.$store.commit("addUserInfo")):10==e.code?(j({type:"danger",message:"验证码错误"}),t.getVcode()):j({type:"danger",message:"账号或者密码错误"})}))),"注册"===t.buttonName&&fetch("http://42.194.179.50/api/reg/check?username=".concat(t.username)).then((function(t){return t.json()})).then((function(e){if(0==e.code)j({type:"danger",message:"该用户已存在"});else{var n="http://42.194.179.50/api/reg";fetch(n,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password,vcode:t.verify,cartInfo:[]})}).then((function(t){return t.json()})).then((function(e){console.log(e),10==e.code?(j({type:"danger",message:"验证码错误"}),t.getVcode()):(j({type:"success",message:"注册成功"}),t.$emit("goto"))}))}}));case 2:case"end":return e.stop()}}),e)})))()}}},N=$,P=n("2877"),D=Object(P["a"])(N,r,i,!1,null,null,null);e["a"]=D.exports}}]);