!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/lib/",n(n.s=50)}({1:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t,n){"use strict";function r(e,t,n,r,o,u,i,f){var a,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),u&&(s._scopeId="data-v-"+u),i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=a):o&&(a=f?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var l=s.render;s.render=function(e,t){return a.call(t),l(e,t)}}else{var c=s.beforeCreate;s.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:s}}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";n.r(t);var r=n(35),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t.default=o.a},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(42),o={name:"Button",props:{type:{validator:function(e){return(0,r.oneOf)(e,["default","primary","dashed","text","info","success","warning","error"])},type:String,default:"default"},size:{validator:function(e){return(0,r.oneOf)(e,["small","large","default"])},default:"default"}}};t.default=o},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.oneOf=function(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}},46:function(e,t,n){"use strict";var r=function(){var e,t=this.$createElement;return(this._self._c||t)("button",{staticClass:"lime-button",class:(e={},e["lime-button-"+this.type]=!0,e),attrs:{type:"button"}},[this._t("default")],2)},o=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},50:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(51)).default;t.default=o},51:function(e,t,n){"use strict";n.r(t);var r=n(46),o=n(34);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);var i=n(2),f=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);t.default=f.exports}})}));
//# sourceMappingURL=button.js.map