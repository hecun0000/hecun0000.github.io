(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(t,e,n){},277:function(t,e,n){t.exports=n(278)},278:function(t,e,n){n(279);var o=n(39).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},279:function(t,e,n){var o=n(70);o(o.S+o.F*!n(40),"Object",{defineProperty:n(57).f})},280:function(t,e,n){"use strict";var o=n(132);n.n(o).a},286:function(t,e,n){"use strict";n.r(e);var o=n(277),r=n.n(o);function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r()(t,o.key,o)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"getUnix",value:function(){return(new Date).getTime()}},{key:"getTodayUnix",value:function(){var t=new Date;return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()}},{key:"getYearUnix",value:function(){var t=new Date;return t.setMonth(0),t.setDate(1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()}},{key:"getLastDate",value:function(t){var e=new Date(t),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate();return e.getFullYear()+"-"+n+"-"+o}},{key:"getFormatTime",value:function(t){var e=this.getUnix(),n=this.getTodayUnix(),o=(this.getYearUnix(),(e-t)/1e3);return o<=0?"刚刚":Math.floor(o/60)<=0?"刚刚":o<3600?Math.floor(o/60)+"分钟前":o>=3600&&t-n>=0?Math.floor(o/3600)+"小时前":o/84600<=31?Math.ceil(o/86400)+"天前":this.getLastDate(t)}}])&&i(e.prototype,n),o&&i(e,o),t}(),s={data:function(){return{nowDate:"",someSecsOgo:"",someMinsOgo:"",someHourOgo:"",someDaysOgo:"",longOgo:"",formatSomeSecsOgo:"",formatSomeMinsOgo:"",formatSomeHourOgo:"",formatSomeDaysOgo:"",formatLongOgo:""}},mounted:function(){this.initTime()},methods:{initTime:function(){var t=(new Date).getTime();this.nowDate=this.nsToText(t);var e=t-3e3,n=t-24e4,o=t-108e5,r=t-5184e5,i=t-3456e6;this.someSecsOgo=this.nsToText(e),this.someMinsOgo=this.nsToText(n),this.someHourOgo=this.nsToText(o),this.someDaysOgo=this.nsToText(r),this.longOgo=this.nsToText(i),this.formatSomeSecsOgo=(new a).getFormatTime(e),this.formatSomeMinsOgo=(new a).getFormatTime(n),this.formatSomeHourOgo=(new a).getFormatTime(o),this.formatSomeDaysOgo=(new a).getFormatTime(r),this.formatLongOgo=(new a).getFormatTime(i)},nsToText:function(t){var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1;o=o<10?"0"+o:o;var r=e.getDate();r=r<10?"0"+r:r;var i=e.getHours();i=i<10?"0"+i:i;var a=e.getMinutes(),s=e.getSeconds();return n+"-"+o+"-"+r+" "+i+":"+(a=a<10?"0"+a:a)+":"+(s=s<10?"0"+s:s)}}},u=(n(280),n(0)),c=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"label"},[t._v("\n      现在的时间： "+t._s(t.nowDate)+"\n    ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"label"},[t._v("\n        三秒前： "+t._s(t.someSecsOgo)+"\n    ")]),t._v("\n   格式化后："+t._s(t.formatSomeSecsOgo)+"\n  "),n("br"),t._v(" "),n("span",{staticClass:"label"},[t._v("\n        四分钟前： "+t._s(t.someMinsOgo)+"\n    ")]),t._v("\n   格式化后："+t._s(t.formatSomeMinsOgo)+"\n  "),n("br"),t._v(" "),n("span",{staticClass:"label"},[t._v("\n        3小时前： "+t._s(t.someHourOgo)+"\n    ")]),t._v("\n   格式化后："+t._s(t.formatSomeHourOgo)+"\n  "),n("br"),t._v(" "),n("span",{staticClass:"label"},[t._v("\n        六天前： "+t._s(t.someDaysOgo)+"\n    ")]),t._v("\n   格式化后："+t._s(t.formatSomeDaysOgo)+"\n  "),n("br"),t._v(" "),n("span",{staticClass:"label"},[t._v("\n         很多天以前： "+t._s(t.longOgo)+" \n    ")]),t._v("\n 格式化后："+t._s(t.formatLongOgo)+"\n  "),n("br")])}),[],!1,null,"16820b02",null);e.default=c.exports},38:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},39:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},40:function(t,e,n){t.exports=!n(71)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},56:function(t,e,n){var o=n(57),r=n(72);t.exports=n(40)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},57:function(t,e,n){var o=n(62),r=n(95),i=n(96),a=Object.defineProperty;e.f=n(40)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},58:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},62:function(t,e,n){var o=n(58);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},63:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},70:function(t,e,n){var o=n(38),r=n(39),i=n(76),a=n(56),s=n(63),u=function(t,e,n){var c,f,l,g=t&u.F,p=t&u.G,m=t&u.S,v=t&u.P,h=t&u.B,y=t&u.W,w=p?r:r[e]||(r[e]={}),O=w.prototype,_=p?o:m?o[e]:(o[e]||{}).prototype;for(c in p&&(n=e),n)(f=!g&&_&&void 0!==_[c])&&s(w,c)||(l=f?_[c]:n[c],w[c]=p&&"function"!=typeof _[c]?n[c]:h&&f?i(l,o):y&&_[c]==l?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((w.virtual||(w.virtual={}))[c]=l,t&u.R&&O&&!O[c]&&a(O,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},71:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},72:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},76:function(t,e,n){var o=n(94);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},77:function(t,e,n){var o=n(58),r=n(38).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},94:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},95:function(t,e,n){t.exports=!n(40)&&!n(71)((function(){return 7!=Object.defineProperty(n(77)("div"),"a",{get:function(){return 7}}).a}))},96:function(t,e,n){var o=n(58);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}}}]);