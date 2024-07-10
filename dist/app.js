/*! For license information please see app.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/js/Config.js":(e,t,r)=>{r.r(t),r.d(t,{Config:()=>u});var n=r("./src/js/utils.js");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function s(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var u=s((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}));a(u,"accessibilityPanel",(0,n.$)("#accessibilityPanel")),a(u,"accessibilityStorageName","accessibility")},"./src/js/CssProperty.js":(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}function s(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function a(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}r.r(t),r.d(t,{CssProperty:()=>u});var c=new WeakMap,u=function(){return e=function e(t){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,c,void 0),n=this,o=t,(r=c).set(a(r,n),o)},(t=[{key:"getPropertyName",value:function(){return t=this,(e=c).get(a(e,t));var e,t}},{key:"capitalizePrefix",value:function(e){return e[0]+e.slice(1).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}}])&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()},"./src/js/CssReadGuideProperty.js":(e,t,r)=>{r.r(t),r.d(t,{CssReadGuideProperty:()=>h});var n=r("./src/js/utils.js");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}function a(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function c(e,t){return e.get(l(e,t))}function u(e,t,r){return e.set(l(e,t),r),r}function l(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var f=new WeakMap,y=new WeakMap,p=new WeakMap,d=new WeakMap,v=new WeakMap,h=function(){return e=function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,f,void 0),a(this,y,void 0),a(this,p,void 0),a(this,d,void 0),a(this,v,void 0),u(f,this,t),u(p,this,n),u(y,this,this.createBackgroundColor(r)),u(d,this,this.createReadGuide("bottom")),u(v,this,this.createReadGuide("top")),this.addEventMouse()},(t=[{key:"getReadGuideBottom",value:function(){return c(d,this)}},{key:"getReadGuideTop",value:function(){return c(v,this)}},{key:"getHeight",value:function(){return c(f,this)}},{key:"getBackgroundColor",value:function(){return c(y,this)}},{key:"getOpacity",value:function(){return c(p,this)}},{key:"createBackgroundColor",value:function(e){var t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o="".concat(t,", ").concat(r,", ").concat(n);return"rgba(".concat(o,", ").concat(this.getOpacity(),")")}},{key:"createReadGuide",value:function(e){var t=document.createElement("div");return t.id="readGuide"+(0,n.capitalizeFirstLetter)(e),t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.left="0",t.style.backgroundColor=this.getBackgroundColor(),t.style.display="block",t.style.zIndex="9999",(0,n.$)("#readGuideContainer").appendChild(t),t}},{key:"addEventMouse",value:function(){var e=this;document.addEventListener("mousemove",(function(t){e.getHeight(),e.getReadGuideBottom().style.top="".concat(t.clientY+e.getHeight()/2,"px"),e.getReadGuideTop().style.bottom="".concat(window.innerHeight-t.clientY+e.getHeight()/2,"px")}))}},{key:"addEventListeners",value:function(){(0,n.$)("#readGuideButton").addEventListener("click",(function(){var e="block"===document.documentElement.style.getPropertyValue("--read-guide-display")?"none":"block";document.documentElement.style.setProperty("--read-guide-display",e),(0,n.saveAccessibilitySettings)("boolean","--read-guide-display",e)}))}}])&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()},"./src/js/CssSelectProperty.js":(e,t,r)=>{r.r(t),r.d(t,{CssSelectProperty:()=>g});var n=r("./src/js/CssProperty.js"),o=r("./src/js/utils.js");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}function c(e,t,r){return t=l(t),function(e,t){if(t&&("object"==i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,r||[],l(e).constructor):t.apply(e,r))}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function p(e,t){return e.get(v(e,t))}function d(e,t,r){return e.set(v(e,t),r),r}function v(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var h=new WeakMap,b=new WeakMap,m=new WeakMap,g=function(e){function t(e,r,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(o=c(this,t,[e]),h,void 0),y(o,b,void 0),y(o,m,void 0),d(h,o,r),d(b,o,n),o.setCssPropertySelect(e),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"getPropertySelect",value:function(){return p(m,this)}},{key:"setPropertySelect",value:function(e){d(m,this,(0,o.$)(e))}},{key:"getValuesArray",value:function(){return p(b,this)}},{key:"getPropertyStyle",value:function(){return p(h,this)}},{key:"setCssPropertySelect",value:function(e){var t=e.split("-").slice(2),r=this.capitalizePrefix(t);this.setPropertySelect("#".concat(r,"Select"))}},{key:"initialize",value:function(){var e=this;this.getPropertySelect().addEventListener("change",(function(){var t=e.getPropertySelect().value;e.getPropertySelect().style[e.getPropertyStyle()]=e.getPropertySelect().value,document.documentElement.style.setProperty(e.getPropertyName(),t),(0,o.saveAccessibilitySettings)("select",e.getPropertyName(),t)}))}},{key:"createPropertyOptions",value:function(e){var t=this,r=e[this.getPropertyName()]||this.getValuesArray()[0];this.getPropertySelect().innerHTML="",this.getValuesArray().forEach((function(e){var n=document.createElement("option");n.value=e,n.text=e,e===r&&(n.selected=!0),n.style[t.getPropertyStyle()]=e,t.getPropertySelect().add(n)})),this.getPropertySelect().style[this.getPropertyStyle()]=r}}])&&s(r.prototype,n),i&&s(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i}(n.CssProperty)},"./src/js/CssSimpleProperty.js":(e,t,r)=>{r.r(t),r.d(t,{CssSimpleProperty:()=>E});var n=r("./src/js/CssProperty.js"),o=r("./src/js/utils.js");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}function c(e,t,r){return t=l(t),function(e,t){if(t&&("object"==i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,r||[],l(e).constructor):t.apply(e,r))}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,r){p(e,t),t.set(e,r)}function p(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(e,t){return e.get(h(e,t))}function v(e,t,r){return e.set(h(e,t),r),r}function h(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}var b=new WeakMap,m=new WeakMap,g=new WeakMap,P=new WeakMap,j=new WeakMap,w=new WeakMap,S=new WeakMap,k=new WeakMap,C=new WeakSet,E=function(e){function t(e,r){var n,o,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px",a=arguments.length>3?arguments[3]:void 0,u=arguments.length>4?arguments[4]:void 0;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=c(this,t,[e]),p(o=n,i=C),i.add(o),y(n,b,void 0),y(n,m,void 0),y(n,g,void 0),y(n,P,void 0),y(n,j,void 0),y(n,w,void 0),y(n,S,void 0),y(n,k,void 0),v(b,n,r),v(m,n,s),v(S,n,a),v(k,n,u),n.setCssPropertyButtons(e),v(g,n,300),v(P,n,"animate"),h(C,n,O).call(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"getValue",value:function(){return d(b,this)}},{key:"getUnit",value:function(){return d(m,this)}},{key:"getDecreaseButton",value:function(){return d(j,this)}},{key:"setDecreaseButton",value:function(e){v(j,this,(0,o.$)(e))}},{key:"getIncreaseButton",value:function(){return d(w,this)}},{key:"setIncreaseButton",value:function(e){v(w,this,(0,o.$)(e))}},{key:"getDelayAnimation",value:function(){return d(g,this)}},{key:"getClassAnimation",value:function(){return d(P,this)}},{key:"getMax",value:function(){return d(k,this)}},{key:"getMin",value:function(){return d(S,this)}},{key:"setCssPropertyButtons",value:function(e){var t=e.split("-").slice(2),r=this.capitalizePrefix(t);this.setDecreaseButton("#".concat(r,"DecreaseButton")),this.setIncreaseButton("#".concat(r,"IncreaseButton"))}}])&&s(r.prototype,n),i&&s(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i}(n.CssProperty);function O(){h(C,this,T).call(this,this.getDecreaseButton(),-1*this.getValue()),h(C,this,T).call(this,this.getIncreaseButton(),this.getValue())}function T(e,t){var r=this;e.addEventListener("click",(function(){h(C,r,M).call(r,t),e.classList.add(r.getClassAnimation()),setTimeout((function(){e.classList.remove(r.getClassAnimation())}),r.getDelayAnimation())}))}function M(e){var t=document.documentElement,r=parseFloat(getComputedStyle(t).getPropertyValue(this.getPropertyName()))+e;r>=this.getMax()&&(r=this.getMax()),r<=this.getMin()&&(r=this.getMin());var n="".concat(r).concat(this.getUnit());t.style.setProperty(this.getPropertyName(),n),(0,o.saveAccessibilitySettings)("range",this.getPropertyName(),n)}},"./src/js/CustomCursor.js":(e,t,r)=>{r.r(t),r.d(t,{CustomCursor:()=>a});var n=r("./src/js/utils.js");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var a=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cursor=(0,n.$)("#cursor"),this.body=(0,n.$)("#cursor-body"),this.allHandTargets=(0,n.$All)(".cursor-pointer"),this.allPenTargets=(0,n.$All)(".cursor-text"),this.color=""},t=[{key:"init",value:function(e){e=parseInt(e),this.cursor.classList.remove("cursor-white","cursor-black"),this.color=["white","black"][e],0===e||1===e?this.setupCustomCursor():this.resetToDefaultCursor()}},{key:"setupCustomCursor",value:function(){this.cursor.style.background="url('./dist/img/cursor-hand-".concat(this.color,".svg')"),this.cursor.style.backgroundSize="100% 100%",this.cursor.classList.remove("cursor-hidden"),this.cursor.classList.add("cursor-".concat(this.color)),this.body.style.cursor="none",this.addEventListeners(),this.addMouseMoveListener(),this.addScrollListener()}},{key:"resetToDefaultCursor",value:function(){this.body.style.cursor="auto",this.cursor.classList.add("cursor-hidden"),this.removeEventListeners(),this.resetTargetCursors()}},{key:"handleMouse",value:function(e){this.cursor.style.background="url('./dist/img/cursor-".concat(e,"-").concat(this.color,".svg')"),this.cursor.style.backgroundSize="100% 100%"}},{key:"handleHandMouseEnter",value:function(){this.handleMouse("hand")}},{key:"handleMouseLeave",value:function(){this.handleMouse("arrow")}},{key:"handlePenMouseEnter",value:function(){this.handleMouse("pen")}},{key:"addEventListeners",value:function(){this.addListenersToTargets(this.allHandTargets,this.handleHandMouseEnter.bind(this),this.handleMouseLeave.bind(this)),this.addListenersToTargets(this.allPenTargets,this.handlePenMouseEnter.bind(this),this.handleMouseLeave.bind(this))}},{key:"addListenersToTargets",value:function(e,t,r){e&&e.forEach((function(e){e.classList.add("cursor-none"),e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",r)}))}},{key:"removeEventListeners",value:function(){this.removeListenersFromTargets(this.allHandTargets),this.removeListenersFromTargets(this.allPenTargets)}},{key:"removeListenersFromTargets",value:function(e){e&&e.forEach((function(e){e.classList.remove("cursor-none")}))}},{key:"addMouseMoveListener",value:function(){var e=this;document.addEventListener("mousemove",(function(t){e.cursor.style.background.includes("pen")?e.cursor.style.transform="translate(".concat(t.clientX-10,"px, ").concat(t.clientY-43,"px)"):e.cursor.style.transform="translate(".concat(t.clientX-10,"px, ").concat(t.clientY,"px)")}))}},{key:"addScrollListener",value:function(){var e=this;document.addEventListener("scroll",(function(){e.handleMouseLeave();var t=e.cursor.getBoundingClientRect().left+e.cursor.getBoundingClientRect().width/2,r=e.cursor.getBoundingClientRect().top+e.cursor.getBoundingClientRect().height/2,n=document.elementFromPoint(t,r);n.classList.contains("cursor-pointer")?e.handleHandMouseEnter():n.classList.contains("cursor-text")&&e.handlePenMouseEnter()}))}},{key:"resetTargetCursors",value:function(){this.resetCursorForTargets(this.allHandTargets),this.resetCursorForTargets(this.allPenTargets)}},{key:"resetCursorForTargets",value:function(e){e&&e.forEach((function(e){e.classList.remove("cursor-none")}))}}],t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()},"./src/js/accessibility.js":(e,t,r)=>{r.r(t);var n=r("./src/js/Config.js"),o=r("./src/js/utils.js"),i=r("./src/js/CustomCursor.js"),s=r("./src/js/CssSimpleProperty.js"),a=r("./src/js/CssSelectProperty.js"),c=r("./src/js/CssReadGuideProperty.js");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var f=[["--font-size-title",2,"px",10,45],["--font-size-text",2,"px",10,28],["--line-height",.1,"",.85,2.5],["--letter-spacing",.05,"em",-.15,.7],["--word-spacing",.1,"em",0,1],["--margin",5,"px",0,45],["--padding",5,"px",0,35],["--border-radius",4,"px",0,50]],y=[["--background-color","backgroundColor",["#F8F9FA","#F5C3C2","#A7D2E8","#FEF0C3","#C1E1C1","#E6E6FA"]],["--text-color","color",["#0c0c0c","#720b0a","#063c5a","#695803","#005602","#4e4ef3"]],["--font-family","fontFamily",["Arial","Verdana","Georgia","Courier New","Roboto","Ms Gothic","Garamond"]],["--text-align","textAlign",["left","right","center","justify"]]];!function(){var e=JSON.parse(localStorage.getItem(n.Config.accessibilityStorageName))||{},t=new i.CustomCursor;for(var r in e)for(var l=0,p=Object.entries(e[r]);l<p.length;l++){var d=u(p[l],2),v=d[0],h=d[1];document.documentElement.style.setProperty(v,h),"--cursor-style"===v&&t.init(h)}var b=new c.CssReadGuideProperty(100,"#000000",.6);n.Config.accessibilityPanel&&(f.forEach((function(e){new s.CssSimpleProperty(e[0],e[1],e[2],e[3],e[4])})),function(e){e.forEach((function(e){var t=new a.CssSelectProperty(e[0],e[1],e[2]);t.initialize(),t.createPropertyOptions(e[1])}))}(y),(0,o.$)("#resetButton").addEventListener("click",(function(){localStorage.removeItem(n.Config.accessibilityStorageName),location.reload()})),(0,o.$)("#cursorSelect").addEventListener("change",(function(){var e=this.value;console.log("Valeur sélectionnée :",e),t.init(e),(0,o.saveAccessibilitySettings)("range","--cursor-style",e)})),b.addEventListeners())}()},"./src/js/utils.js":(e,t,r)=>{r.r(t),r.d(t,{$:()=>i,$All:()=>s,capitalizeFirstLetter:()=>o,saveAccessibilitySettings:()=>a});var n=r("./src/js/Config.js");function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e){return document.querySelector(e)}function s(e){return document.querySelectorAll(e)}function a(e,t,r){var o=JSON.parse(localStorage.getItem(n.Config.accessibilityStorageName))||{};o[e]||(o[e]={}),o[e][t]=r,localStorage.setItem(n.Config.accessibilityStorageName,JSON.stringify(o))}},"./src/style/styles.css":(e,t,r)=>{r.r(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};r.r({});r("./src/style/styles.css"),r("./src/js/accessibility.js")})();
//# sourceMappingURL=app.js.map