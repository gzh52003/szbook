(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b70492b8"],{"10c1":function(t,e,n){},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},4788:function(t,e,n){},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),o=n("50c4"),c=n("a691"),l=n("1d80"),u=n("8aa5"),s=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,_=x?"$":"$0";return[function(n,r){var a=l(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(_)){var i=n(e,t,this,r);if(i.done)return i.value}var l=a(t),p=String(this),g="function"===typeof r;g||(r=String(r));var v=l.global;if(v){var b=l.unicode;l.lastIndex=0}var y=[];while(1){var w=s(l,p);if(null===w)break;if(y.push(w),!v)break;var R=String(w[0]);""===R&&(l.lastIndex=u(p,o(l.lastIndex),b))}for(var S="",k=0,I=0;I<y.length;I++){w=y[I];for(var $=String(w[0]),N=f(d(c(w.index),p.length),0),P=[],T=1;T<w.length;T++)P.push(h(w[T]));var A=w.groups;if(g){var C=[$].concat(P,N,p);void 0!==A&&C.push(A);var U=String(r.apply(void 0,C))}else U=m($,p,N,P,A,r);N>=k&&(S+=p.slice(k,N)+U,k=N+$.length)}return S+p.slice(k)}];function m(t,n,r,a,o,c){var l=r+t.length,u=a.length,s=v;return void 0!==o&&(o=i(o),s=g),e.call(c,s,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":c=o[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>u){var f=p(s/10);return 0===f?e:f<=u?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[s-1]}return void 0===c?"":c}))}}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=l||s||u;f&&(c=function(t){var e,n,a,c,f=this,d=u&&f.sticky,p=r.call(f),g=f.source,v=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),s&&(n=new RegExp("^"+g+"$(?!\\s)",p)),l&&(e=f.lastIndex),a=i.call(d?n:f,h),d?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),s&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},9330:function(t,e,n){"use strict";var r=n("4788"),a=n.n(r);a.a},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d031:function(t,e,n){"use strict";var r=n("10c1"),a=n.n(r);a.a},d585:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hotNews"},[n("h3",[t._v("热点")]),n("div",{staticClass:"body"},[n("van-pull-refresh",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.pageData,(function(e){return n("pageitem",{key:e.news_id,attrs:{to:e.news_id+"?title="+e.new_title,imgurl:e.news_post},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(e.new_title))]},proxy:!0},{key:"look",fn:function(){return[t._v(t._s(e.reading_num))]},proxy:!0},{key:"heart",fn:function(){return[t._v(t._s(e.enjoyed_num))]},proxy:!0}],null,!0)})})),1)],1)],1)])},a=[],i=(n("99af"),n("2909")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",attrs:{imgurl:t.imgurl},on:{click:function(e){return t.goto(t.to)}}},[n("a",{attrs:{href:"#"}},[n("div",{staticClass:"imgBox"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"imgurl"}]})]),n("p",[t._t("title")],2),n("p",[n("span",[n("van-icon",{attrs:{name:"eye"}}),t._v(" "),t._t("look")],2),n("span",[n("van-icon",{attrs:{name:"like"}}),t._v(" "),t._t("heart")],2)])])])},c=[],l=(n("ac1f"),n("5319"),{data:function(){return{}},methods:{goto:function(t){window.location.replace("https://h5.szbookmall.com/#/hot/detail/"+this.to)}},props:["to","imgurl"]}),u=l,s=(n("d031"),n("2877")),f=Object(s["a"])(u,o,c,!1,null,"0a932582",null),d=f.exports,p={data:function(){return{pageNumber:1,pageData:[],loading:!1,finished:!1}},methods:{getNews:function(){var t=this;this.$request.post("https://api.szbookmall.com/app/news/list",{pageNumber:this.pageNumber}).then((function(e){t.pageData=[].concat(Object(i["a"])(t.pageData),Object(i["a"])(e.data.data.list)),t.pageNumber+=1,t.loading=!1})).catch((function(t){console.log("请求错误："+t)}))},onLoad:function(){this.loading=!0,this.getNews()}},components:{pageitem:d},created:function(){this.getNews()}},g=p,v=(n("9330"),Object(s["a"])(g,r,a,!1,null,null,null));e["default"]=v.exports},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),l=i("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var g=i(t),v=!a((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),h=v&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!v||!h||"replace"===t&&(!u||!s||d)||"split"===t&&!p){var x=/./[g],E=n(g,""[t],(function(t,e,n,r,a){return e.exec===o?v&&!a?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),_=E[0],m=E[1];r(String.prototype,t,_),r(RegExp.prototype,g,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&c(RegExp.prototype[g],"sham",!0)}}}]);