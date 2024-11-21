!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(()=>(()=>{"use strict";var t={961:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n){this.el=t,this.options=e,this.events=n,this.el=t,this.options=e,this.events={}}return t.prototype.createCollection=function(t,e){var n;t.push({id:(null===(n=null==e?void 0:e.el)||void 0===n?void 0:n.id)||t.length+1,element:e})},t.prototype.fireEvent=function(t,e){if(void 0===e&&(e=null),this.events.hasOwnProperty(t))return this.events[t](e)},t.prototype.on=function(t,e){this.events[t]=e},t}();e.default=n},60:function(t,e,n){
/*
 * HSPinInput
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var i,o=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(292),a=function(t){function e(e,n){var i=t.call(this,e,n)||this,o=e.getAttribute("data-hs-pin-input"),u=o?JSON.parse(o):{},s=r(r({},u),n);return i.items=i.el.querySelectorAll("[data-hs-pin-input-item]"),i.currentItem=null,i.currentValue=new Array(i.items.length).fill(""),i.placeholders=[],i.availableCharsRE=new RegExp((null==s?void 0:s.availableCharsRE)||"^[a-zA-Z0-9]+$"),i.init(),i}return o(e,t),e.prototype.init=function(){this.createCollection(window.$hsPinInputCollection,this),this.items.length&&this.build()},e.prototype.build=function(){this.buildInputItems()},e.prototype.buildInputItems=function(){var t=this;this.items.forEach((function(e,n){t.placeholders.push(e.getAttribute("placeholder")||""),e.hasAttribute("autofocus")&&t.onFocusIn(n),e.addEventListener("input",(function(e){return t.onInput(e,n)})),e.addEventListener("paste",(function(e){return t.onPaste(e)})),e.addEventListener("keydown",(function(e){return t.onKeydown(e,n)})),e.addEventListener("focusin",(function(){return t.onFocusIn(n)})),e.addEventListener("focusout",(function(){return t.onFocusOut(n)}))}))},e.prototype.checkIfNumber=function(t){return t.match(this.availableCharsRE)},e.prototype.autoFillAll=function(t){var e=this;Array.from(t).forEach((function(t,n){if(!(null==e?void 0:e.items[n]))return!1;e.items[n].value=t,e.items[n].dispatchEvent(new Event("input",{bubbles:!0}))}))},e.prototype.setCurrentValue=function(){this.currentValue=Array.from(this.items).map((function(t){return t.value}))},e.prototype.toggleCompleted=function(){this.currentValue.includes("")?this.el.classList.remove("active"):this.el.classList.add("active")},e.prototype.onInput=function(t,e){var n=t.target.value;if(this.currentItem=t.target,this.currentItem.value="",this.currentItem.value=n[n.length-1],!this.checkIfNumber(this.currentItem.value))return this.currentItem.value=this.currentValue[e]||"",!1;if(this.setCurrentValue(),this.currentItem.value){if(e<this.items.length-1&&this.items[e+1].focus(),!this.currentValue.includes("")){var i={currentValue:this.currentValue};this.fireEvent("completed",i),(0,s.dispatch)("completed.hs.pinInput",this.el,i)}this.toggleCompleted()}else e>0&&this.items[e-1].focus()},e.prototype.onKeydown=function(t,e){"Backspace"===t.key&&e>0&&(""===this.items[e].value?(this.items[e-1].value="",this.items[e-1].focus()):this.items[e].value=""),this.setCurrentValue(),this.toggleCompleted()},e.prototype.onFocusIn=function(t){this.items[t].setAttribute("placeholder","")},e.prototype.onFocusOut=function(t){this.items[t].setAttribute("placeholder",this.placeholders[t])},e.prototype.onPaste=function(t){var e=this;t.preventDefault(),this.items.forEach((function(n){document.activeElement===n&&e.autoFillAll(t.clipboardData.getData("text"))}))},e.getInstance=function(t,e){var n=window.$hsPinInputCollection.find((function(e){return e.element.el===("string"==typeof t?document.querySelector(t):t)}));return n?e?n:n.element:null},e.autoInit=function(){window.$hsPinInputCollection||(window.$hsPinInputCollection=[]),document.querySelectorAll("[data-hs-pin-input]:not(.--prevent-on-load-init)").forEach((function(t){window.$hsPinInputCollection.find((function(e){var n;return(null===(n=null==e?void 0:e.element)||void 0===n?void 0:n.el)===t}))||new e(t)}))},e}(u(n(961)).default);window.addEventListener("load",(function(){a.autoInit()})),"undefined"!=typeof window&&(window.HSPinInput=a),e.default=a},292:function(t,e){
/*
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
var n=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isDirectChild=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0,e.getHighestZIndex=function(t){var e=Number.NEGATIVE_INFINITY;return t.forEach((function(t){var n=i(t);"auto"!==n&&(n=parseInt(n,10))>e&&(e=n)})),e};e.stringToBoolean=function(t){return"true"===t};e.getClassProperty=function(t,e,n){return void 0===n&&(n=""),(window.getComputedStyle(t).getPropertyValue(e)||n).replace(" ","")};e.getClassPropertyAlt=function(t,e,n){void 0===n&&(n="");var i="";return t.classList.forEach((function(t){t.includes(e)&&(i=t)})),i.match(/:(.*)]/)?i.match(/:(.*)]/)[1]:n};var i=function(t){return window.getComputedStyle(t).getPropertyValue("z-index")};e.getZIndex=i;e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)};e.isDirectChild=function(t,e){for(var n=t.children,i=0;i<n.length;i++)if(n[i]===e)return!0;return!1};e.isEnoughSpace=function(t,e,n,i,o){void 0===n&&(n="auto"),void 0===i&&(i=10),void 0===o&&(o=null);var r=e.getBoundingClientRect(),u=o?o.getBoundingClientRect():null,s=window.innerHeight,a=u?r.top-u.top:r.top,l=(o?u.bottom:s)-r.bottom,c=t.clientHeight+i;return"bottom"===n?l>=c:"top"===n?a>=c:a>=c||l>=c};e.isFormElement=function(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement};var o=function(t){return!!t&&("none"===window.getComputedStyle(t).display||o(t.parentElement))};e.isParentOrElementHidden=o;e.debounce=function(t,e){var i;return void 0===e&&(e=200),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){t.apply(n,o)}),e)}};e.dispatch=function(t,e,n){void 0===n&&(n=null);var i=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(i)};e.afterTransition=function(t,e){var n=function(){e(),t.removeEventListener("transitionend",n,!0)},i=window.getComputedStyle(t),o=i.getPropertyValue("transition-duration");"none"!==i.getPropertyValue("transition-property")&&parseFloat(o)>0?t.addEventListener("transitionend",n,!0):e()};e.htmlToElement=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};e.classToClassList=function(t,e,n,i){void 0===n&&(n=" "),void 0===i&&(i="add"),t.split(n).forEach((function(t){return"add"===i?e.classList.add(t):e.classList.remove(t)}))};e.menuSearchHistory={historyIndex:-1,addHistory:function(t){this.historyIndex=t},existsInHistory:function(t){return t>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},e={};var n=function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}(60);return n})()));