/*! For license information please see main.853b3cdc7b651051ae39.js.LICENSE.txt */
(()=>{var __webpack_modules__={10:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var n=r(957),o=r.n(n),i=r(772);r(778);const e=r(495),a=new URLSearchParams(window.location.search).getAll("gen");if(a.length>0){document.getElementsByTagName("main")[0].innerHTML=`\n      <p><em>Using generations: ${a.join(", ")} -- <a href="/">Choose different generations</a>.</em></p>\n      <div id="result"></div>\n      <input id="autoComplete" />\n      <ul id="guesses"></ul>\n    `;const t=new Date,n=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()+"T"+t.getUTCHours()+":"+t.getUTCMinutes(),s={};a.includes("1")&&Object.assign(s,await r.e(519).then(r.t.bind(r,519,19))),a.includes("2")&&Object.assign(s,await r.e(938).then(r.t.bind(r,938,19))),a.includes("3")&&Object.assign(s,await r.e(208).then(r.t.bind(r,208,19))),a.includes("4")&&Object.assign(s,await r.e(670).then(r.t.bind(r,670,19))),a.includes("5")&&Object.assign(s,await r.e(217).then(r.t.bind(r,217,19))),a.includes("6")&&Object.assign(s,await r.e(662).then(r.t.bind(r,662,19))),a.includes("7")&&Object.assign(s,await r.e(612).then(r.t.bind(r,612,19))),a.includes("8")&&Object.assign(s,await r.e(385).then(r.t.bind(r,385,19))),a.includes("9")&&Object.assign(s,await r.e(593).then(r.t.bind(r,593,19)));const c=Object.keys(s),u=s[c[parseInt(e(n),16)%c.length]],l={placeHolder:"Guess a Pokemon...",data:{src:c},resultItem:{highlight:!0},events:{input:{selection:e=>{const t=e.detail.selection.value;t===u.Name?document.getElementById("result").innerHTML=`<p class="right">${s[t].Name} is correct!</p>`:document.getElementById("result").innerHTML=`<p class="wrong">Not a ${s[t].Name}!</p>`;const r=document.createElement("li");r.innerHTML=`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${s[t].No}.png">`+(0,i.Z)(s[t],u),document.getElementById("guesses").insertBefore(r,document.getElementById("guesses").firstChild),p.data.src=p.data.src.filter((e=>e!==t)),p.input.value="",p.input.focus()}}}},p=new(o())(l);p.input.focus()}else document.getElementsByTagName("main")[0].innerHTML='\n    <h2>Select Generations</h2>\n    <form>\n        <input type="checkbox" name="gen" value="1"/>I<br>\n        <input type="checkbox" name="gen" value="2"/>II<br>\n        <input type="checkbox" name="gen" value="3"/>III<br>\n        <input type="checkbox" name="gen" value="4"/>IV<br>\n        <input type="checkbox" name="gen" value="5"/>V<br>\n        <input type="checkbox" name="gen" value="6"/>VI<br>\n        <input type="checkbox" name="gen" value="7"/>VII<br>\n        <input type="checkbox" name="gen" value="8"/>VIII<br>\n        <input type="checkbox" name="gen" value="9"/>IX<br>\n        <input type="submit" value="Let\'s go!"/>\n    </form>\n    ';t()}catch(e){t(e)}}),1)},957:function(e){var t;t=function(){"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){return"string"==typeof e?document.querySelector(e):e()},c=function(e,t){var r="string"==typeof e?document.createElement(e):e;for(var n in t){var o=t[n];if("inside"===n)o.append(r);else if("dest"===n)s(o[0]).insertAdjacentElement(o[1],r);else if("around"===n){var i=o;i.parentNode.insertBefore(r,i),r.append(i),null!=i.getAttribute("autofocus")&&i.focus()}else n in r?r[n]=o:r.setAttribute(n,o)}return r},u=function(e,t){return e=String(e).toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},l=function(e,r){return c("mark",t({innerHTML:e},"string"==typeof r&&{class:r})).outerHTML},p=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},f=function(e,t,r){var n=r||{},o=n.mode,i=n.diacritics,a=n.highlight,s=u(t,i);if(t=String(t),e=u(e,i),"loose"===o){var c=(e=e.replace(/ /g,"")).length,p=0,f=Array.from(t).map((function(t,r){return p<c&&s[r]===e[p]&&(t=a?l(t,a):t,p++),t})).join("");if(p===c)return f}else{var _=s.indexOf(e);if(~_)return e=t.substring(_,_+e.length),a?t.replace(e,l(e,a)):t}},_=function(e,t){return new Promise((function(r,n){var o;return(o=e.data).cache&&o.store?r():new Promise((function(e,r){return"function"==typeof o.src?o.src(t).then(e,r):e(o.src)})).then((function(t){try{return e.feedback=o.store=t,p("response",e),r()}catch(e){return n(e)}}),n)}))},d=function(e,t){var r=t.data,n=t.searchEngine,o=[];r.store.forEach((function(a,s){var c=function(r){var i=r?a[r]:a,s="function"==typeof n?n(e,i):f(e,i,{mode:n,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(s){var c={match:s,value:a};r&&(c.key=r),o.push(c)}};if(r.keys){var u,l=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}(r.keys);try{for(l.s();!(u=l.n()).done;)c(u.value)}catch(e){l.e(e)}finally{l.f()}}else c()})),r.filter&&(o=r.filter(o));var a=o.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:o,results:a},p("results",t)},h="aria-expanded",b="aria-activedescendant",y="aria-selected",m=function(e,r){e.feedback.selection=t({index:r},e.feedback.results[r])},v=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(h,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,p("open",e))},g=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(h,!1),e.input.setAttribute(b,""),e.list.setAttribute("hidden",""),e.isOpen=!1,p("close",e))},w=function(e,t){var r=t.resultItem,n=t.list.getElementsByTagName(r.tag),i=!!r.selected&&r.selected.split(" ");if(t.isOpen&&n.length){var a,s,c=t.cursor;e>=n.length&&(e=0),e<0&&(e=n.length-1),t.cursor=e,c>-1&&(n[c].removeAttribute(y),i&&(s=n[c].classList).remove.apply(s,o(i))),n[e].setAttribute(y,!0),i&&(a=n[e].classList).add.apply(a,o(i)),t.input.setAttribute(b,n[t.cursor].id),t.list.scrollTop=n[e].offsetTop-t.list.clientHeight+n[e].clientHeight+5,t.feedback.cursor=t.cursor,m(t,e),p("navigate",t)}},A=function(e){w(e.cursor+1,e)},k=function(e){w(e.cursor-1,e)},E=function(e,t,r){(r=r>=0?r:e.cursor)<0||(e.feedback.event=t,m(e,r),p("selection",e),g(e))};function S(e,r){var n=this;return new Promise((function(o,i){var a,s;return a=r||((s=e.input)instanceof HTMLInputElement||s instanceof HTMLTextAreaElement?s.value:s.innerHTML),function(e,t,r){return t?t(e):e.length>=r}(a=e.query?e.query(a):a,e.trigger,e.threshold)?_(e,a).then((function(r){try{return e.feedback instanceof Error?o():(d(a,e),e.resultsList&&function(e){var r=e.resultsList,n=e.list,o=e.resultItem,i=e.feedback,a=i.matches,s=i.results;if(e.cursor=-1,n.innerHTML="",a.length||r.noResults){var u=new DocumentFragment;s.forEach((function(e,r){var n=c(o.tag,t({id:"".concat(o.id,"_").concat(r),role:"option",innerHTML:e.match,inside:u},o.class&&{class:o.class}));o.element&&o.element(n,e)})),n.append(u),r.element&&r.element(n,i),v(e)}else g(e)}(e),u.call(n))}catch(e){return i(e)}}),i):(g(e),u.call(n));function u(){return o()}}))}var H=function(e,t){for(var r in e)for(var n in e[r])t(r,n)};function C(e){var r=this;return new Promise((function(n,o){var i,a,s;if(i=e.placeHolder,s={role:"combobox","aria-owns":(a=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},c(e.input,t(t({"aria-controls":a.id,"aria-autocomplete":"both"},i&&{placeholder:i}),!e.wrapper&&t({},s))),e.wrapper&&(e.wrapper=c("div",t({around:e.input,class:e.name+"_wrapper"},s))),a&&(e.list=c(a.tag,t({dest:[a.destination,a.position],id:a.id,role:"listbox",hidden:"hidden"},a.class&&{class:a.class}))),function(e){var r,n,o,i=e.events,a=(r=function(){return S(e)},n=e.debounce,function(){clearTimeout(o),o=setTimeout((function(){return r()}),n)}),s=e.events=t({input:t({},i&&i.input)},e.resultsList&&{list:i?t({},i.list):{}}),c={input:{input:function(){a()},keydown:function(t){!function(e,t){switch(e.keyCode){case 40:case 38:e.preventDefault(),40===e.keyCode?A(t):k(t);break;case 13:t.submit||e.preventDefault(),t.cursor>=0&&E(t,e);break;case 9:t.resultsList.tabSelect&&t.cursor>=0&&E(t,e);break;case 27:t.input.value="",g(t)}}(t,e)},blur:function(){g(e)}},list:{mousedown:function(e){e.preventDefault()},click:function(t){!function(e,t){var r=t.resultItem.tag.toUpperCase(),n=Array.from(t.list.querySelectorAll(r)),o=e.target.closest(r);o&&o.nodeName===r&&E(t,e,n.indexOf(o))}(t,e)}}};H(c,(function(t,r){(e.resultsList||"input"===r)&&(s[t][r]||(s[t][r]=c[t][r]))})),H(s,(function(t,r){e[t].addEventListener(r,s[t][r])}))}(e),e.data.cache)return _(e).then((function(e){try{return u.call(r)}catch(e){return o(e)}}),o);function u(){return p("init",e),n()}return u.call(r)}))}function R(e){var t=e.prototype;t.init=function(){C(this)},t.start=function(e){S(this,e)},t.unInit=function(){if(this.wrapper){var e=this.wrapper.parentNode;e.insertBefore(this.input,this.wrapper),e.removeChild(this.wrapper)}var t;H((t=this).events,(function(e,r){t[e].removeEventListener(r,t.events[e][r])}))},t.open=function(){v(this)},t.close=function(){g(this)},t.goTo=function(e){w(e,this)},t.next=function(){A(this)},t.previous=function(){k(this)},t.select=function(e){E(this,null,e)},t.search=function(e,t,r){return f(e,t,r)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(e){var t=e.name,n=e.options,o=e.resultsList,i=e.resultItem;for(var a in n)if("object"===r(n[a]))for(var c in e[a]||(e[a]={}),n[a])e[a][c]=n[a][c];else e[a]=n[a];e.selector=e.selector||"#"+t,o.destination=o.destination||e.selector,o.id=o.id||t+"_list_"+e.id,i.id=i.id||t+"_result",e.input=s(e.selector)}(this),R.call(this,e),C(this)}},e.exports=t()},908:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,'.autoComplete_wrapper {\n  display: inline-block;\n  position: relative;\n}\n\n.autoComplete_wrapper > input {\n  width: 370px;\n  height: 40px;\n  padding-left: 10px;\n  font-size: 1rem;\n  color: rgb(116, 116, 116);\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  outline: none;\n}\n\n.autoComplete_wrapper > input::placeholder {\n  color: rgba(123, 123, 123, 0.5);\n  transition: all 0.3s ease;\n}\n\n.autoComplete_wrapper > ul {\n  position: absolute;\n  max-height: 226px;\n  overflow-y: scroll;\n  top: 100%;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0.5rem 0 0 0;\n  border-radius: 4px;\n  background-color: #fff;\n  border: 1px solid rgba(33, 33, 33, 0.1);\n  z-index: 1000;\n  outline: none;\n}\n\n.autoComplete_wrapper > ul > li {\n  padding: 10px 20px;\n  list-style: none;\n  text-align: left;\n  font-size: 16px;\n  color: #212121;\n  transition: all 0.1s ease-in-out;\n  border-radius: 3px;\n  background-color: rgba(255, 255, 255, 1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.2s ease;\n}\n\n.autoComplete_wrapper > ul > li::selection {\n  color: rgba(#ffffff, 0);\n  background-color: rgba(#ffffff, 0);\n}\n\n.autoComplete_wrapper > ul > li:hover {\n  cursor: pointer;\n  background-color: rgba(123, 123, 123, 0.1);\n}\n\n.autoComplete_wrapper > ul > li mark {\n  background-color: transparent;\n  color: rgba(255, 122, 122, 1);\n  font-weight: bold;\n}\n\n.autoComplete_wrapper > ul > li mark::selection {\n  color: rgba(#ffffff, 0);\n  background-color: rgba(#ffffff, 0);\n}\n\n.autoComplete_wrapper > ul > li[aria-selected="true"] {\n  background-color: rgba(123, 123, 123, 0.1);\n}\n\n@media only screen and (max-width: 600px) {\n  .autoComplete_wrapper > input {\n    width: 18rem;\n  }\n}\n',""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},495:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var r=OUTPUT_TYPES[t];e[r]=createOutputMethod(r)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null==e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw ERROR;t=!0}for(var n,o,i=0,a=e.length,s=this.blocks,c=this.buffer8;i<a;){if(this.hashed&&(this.hashed=!1,s[0]=s[16],s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)c[o++]=e[i];else for(o=this.start;i<a&&o<64;++i)s[o>>2]|=e[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<a&&o<64;++i)(n=e.charCodeAt(i))<128?c[o++]=n:n<2048?(c[o++]=192|n>>6,c[o++]=128|63&n):n<55296||n>=57344?(c[o++]=224|n>>12,c[o++]=128|n>>6&63,c[o++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),c[o++]=240|n>>18,c[o++]=128|n>>12&63,c[o++]=128|n>>6&63,c[o++]=128|63&n);else for(o=this.start;i<a&&o<64;++i)(n=e.charCodeAt(i))<128?s[o>>2]|=n<<SHIFT[3&o++]:n<2048?(s[o>>2]|=(192|n>>6)<<SHIFT[3&o++],s[o>>2]|=(128|63&n)<<SHIFT[3&o++]):n<55296||n>=57344?(s[o>>2]|=(224|n>>12)<<SHIFT[3&o++],s[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&n)<<SHIFT[3&o++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),s[o>>2]|=(240|n>>18)<<SHIFT[3&o++],s[o>>2]|=(128|n>>12&63)<<SHIFT[3&o++],s[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],s[o>>2]|=(128|63&n)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,r,n,o,i,a=this.blocks;this.first?t=((t=((e=((e=a[0]-680876937)<<7|e>>>25)-271733879<<0)^(r=((r=(-271733879^(n=((n=(-1732584194^2004318071&e)+a[1]-117830708)<<12|n>>>20)+e<<0)&(-271733879^e))+a[2]-1126478375)<<17|r>>>15)+n<<0)&(n^e))+a[3]-1316259209)<<22|t>>>10)+r<<0:(e=this.h0,t=this.h1,r=this.h2,t=((t+=((e=((e+=((n=this.h3)^t&(r^n))+a[0]-680876936)<<7|e>>>25)+t<<0)^(r=((r+=(t^(n=((n+=(r^e&(t^r))+a[1]-389564586)<<12|n>>>20)+e<<0)&(e^t))+a[2]+606105819)<<17|r>>>15)+n<<0)&(n^e))+a[3]-1044525330)<<22|t>>>10)+r<<0),t=((t+=((e=((e+=(n^t&(r^n))+a[4]-176418897)<<7|e>>>25)+t<<0)^(r=((r+=(t^(n=((n+=(r^e&(t^r))+a[5]+1200080426)<<12|n>>>20)+e<<0)&(e^t))+a[6]-1473231341)<<17|r>>>15)+n<<0)&(n^e))+a[7]-45705983)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(n^t&(r^n))+a[8]+1770035416)<<7|e>>>25)+t<<0)^(r=((r+=(t^(n=((n+=(r^e&(t^r))+a[9]-1958414417)<<12|n>>>20)+e<<0)&(e^t))+a[10]-42063)<<17|r>>>15)+n<<0)&(n^e))+a[11]-1990404162)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(n^t&(r^n))+a[12]+1804603682)<<7|e>>>25)+t<<0)^(r=((r+=(t^(n=((n+=(r^e&(t^r))+a[13]-40341101)<<12|n>>>20)+e<<0)&(e^t))+a[14]-1502002290)<<17|r>>>15)+n<<0)&(n^e))+a[15]+1236535329)<<22|t>>>10)+r<<0,t=((t+=((n=((n+=(t^r&((e=((e+=(r^n&(t^r))+a[1]-165796510)<<5|e>>>27)+t<<0)^t))+a[6]-1069501632)<<9|n>>>23)+e<<0)^e&((r=((r+=(e^t&(n^e))+a[11]+643717713)<<14|r>>>18)+n<<0)^n))+a[0]-373897302)<<20|t>>>12)+r<<0,t=((t+=((n=((n+=(t^r&((e=((e+=(r^n&(t^r))+a[5]-701558691)<<5|e>>>27)+t<<0)^t))+a[10]+38016083)<<9|n>>>23)+e<<0)^e&((r=((r+=(e^t&(n^e))+a[15]-660478335)<<14|r>>>18)+n<<0)^n))+a[4]-405537848)<<20|t>>>12)+r<<0,t=((t+=((n=((n+=(t^r&((e=((e+=(r^n&(t^r))+a[9]+568446438)<<5|e>>>27)+t<<0)^t))+a[14]-1019803690)<<9|n>>>23)+e<<0)^e&((r=((r+=(e^t&(n^e))+a[3]-187363961)<<14|r>>>18)+n<<0)^n))+a[8]+1163531501)<<20|t>>>12)+r<<0,t=((t+=((n=((n+=(t^r&((e=((e+=(r^n&(t^r))+a[13]-1444681467)<<5|e>>>27)+t<<0)^t))+a[2]-51403784)<<9|n>>>23)+e<<0)^e&((r=((r+=(e^t&(n^e))+a[7]+1735328473)<<14|r>>>18)+n<<0)^n))+a[12]-1926607734)<<20|t>>>12)+r<<0,t=((t+=((i=(n=((n+=((o=t^r)^(e=((e+=(o^n)+a[5]-378558)<<4|e>>>28)+t<<0))+a[8]-2022574463)<<11|n>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[11]+1839030562)<<16|r>>>16)+n<<0))+a[14]-35309556)<<23|t>>>9)+r<<0,t=((t+=((i=(n=((n+=((o=t^r)^(e=((e+=(o^n)+a[1]-1530992060)<<4|e>>>28)+t<<0))+a[4]+1272893353)<<11|n>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[7]-155497632)<<16|r>>>16)+n<<0))+a[10]-1094730640)<<23|t>>>9)+r<<0,t=((t+=((i=(n=((n+=((o=t^r)^(e=((e+=(o^n)+a[13]+681279174)<<4|e>>>28)+t<<0))+a[0]-358537222)<<11|n>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[3]-722521979)<<16|r>>>16)+n<<0))+a[6]+76029189)<<23|t>>>9)+r<<0,t=((t+=((i=(n=((n+=((o=t^r)^(e=((e+=(o^n)+a[9]-640364487)<<4|e>>>28)+t<<0))+a[12]-421815835)<<11|n>>>21)+e<<0)^e)^(r=((r+=(i^t)+a[15]+530742520)<<16|r>>>16)+n<<0))+a[2]-995338651)<<23|t>>>9)+r<<0,t=((t+=((n=((n+=(t^((e=((e+=(r^(t|~n))+a[0]-198630844)<<6|e>>>26)+t<<0)|~r))+a[7]+1126891415)<<10|n>>>22)+e<<0)^((r=((r+=(e^(n|~t))+a[14]-1416354905)<<15|r>>>17)+n<<0)|~e))+a[5]-57434055)<<21|t>>>11)+r<<0,t=((t+=((n=((n+=(t^((e=((e+=(r^(t|~n))+a[12]+1700485571)<<6|e>>>26)+t<<0)|~r))+a[3]-1894986606)<<10|n>>>22)+e<<0)^((r=((r+=(e^(n|~t))+a[10]-1051523)<<15|r>>>17)+n<<0)|~e))+a[1]-2054922799)<<21|t>>>11)+r<<0,t=((t+=((n=((n+=(t^((e=((e+=(r^(t|~n))+a[8]+1873313359)<<6|e>>>26)+t<<0)|~r))+a[15]-30611744)<<10|n>>>22)+e<<0)^((r=((r+=(e^(n|~t))+a[6]-1560198380)<<15|r>>>17)+n<<0)|~e))+a[13]+1309151649)<<21|t>>>11)+r<<0,t=((t+=((n=((n+=(t^((e=((e+=(r^(t|~n))+a[4]-145523070)<<6|e>>>26)+t<<0)|~r))+a[11]-1120210379)<<10|n>>>22)+e<<0)^((r=((r+=(e^(n|~t))+a[2]+718787259)<<15|r>>>17)+n<<0)|~e))+a[9]-343485551)<<21|t>>>11)+r<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=r-1732584194<<0,this.h3=n+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+r<<0,this.h3=this.h3+n<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,r,n="",o=this.array(),i=0;i<15;)e=o[i++],t=o[i++],r=o[i++],n+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return e=o[i],n+(BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"==")};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},778:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(379),o=r.n(n),i=r(795),a=r.n(i),s=r(569),c=r.n(s),u=r(565),l=r.n(u),p=r(216),f=r.n(p),_=r(589),d=r.n(_),h=r(908),b={};b.styleTagTransform=d(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f(),o()(h.Z,b);const y=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=i[u]||0,p="".concat(u," ").concat(l);i[u]=l+1;var f=r(p),_={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(_);else{var d=o(_,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:d,references:1})}a.push(p)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var c=n(e,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},772:(e,t,r)=>{"use strict";function n(e,t){return Array.isArray(t)?`<span class="${t.includes(e)?"right":"wrong"}">${e}</span>`:`<span class="${e==t?"right":"wrong"}">${e}</span>`}r.d(t,{Z:()=>o});const o=function(e,t){let r="<h2>"+n(e.Name,t.Name)+"</h2><p>Types/Category: ";const o=[t.Type1,t.Type2],i=[t.Ability1,t.Ability2,t.Ability_Hidden].filter((e=>!!e));return e.Type1&&(r+=n(e.Type1,o)),e.Type2&&(r+=",  "+n(e.Type2,o)),e.Category&&(r+=", "+n(e.Category,t.Category)),e.Color&&(r+="</p><p>Colour: "+n(e.Color,t.Color)),e.Generation&&(r+="</p><p>Generation: "+n(e.Generation,t.Generation)),e.Ability1&&(r+="<p>Abilities: "+n(e.Ability1,i)),e.Ability2&&(r+=", "+n(e.Ability2,i)),e.Ability_Hidden&&(r+=", "+n(e.Ability_Hidden,i)),r+"</p>"}}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,leafPrototypes,getProto,inProgress;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,t,r)=>{var n;r&&((n=[]).d=1);var o,i,a,s=new Set,c=e.exports,u=new Promise(((e,t)=>{a=t,i=e}));u[webpackExports]=c,u[webpackQueues]=e=>(n&&e(n),s.forEach(e),u.catch((e=>{}))),e.exports=u,t((e=>{var t;o=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var t=[];t.d=0,e.then((e=>{r[webpackExports]=e,resolveQueue(t)}),(e=>{r[webpackError]=e,resolveQueue(t)}));var r={};return r[webpackQueues]=e=>e(t),r}}var n={};return n[webpackQueues]=e=>{},n[webpackExports]=e,n})))(e);var r=()=>o.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),i=new Promise((e=>{(t=()=>e(r)).r=0;var i=e=>e!==n&&!s.has(e)&&(s.add(e),e&&!e.d&&(t.r++,e.push(t)));o.map((e=>e[webpackQueues](i)))}));return t.r?i:r()}),(e=>(e?a(u[webpackError]=e):i(c),resolveQueue(n)))),n&&(n.d=0)},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);__webpack_require__.r(r);var n={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var o=2&t&&e;"object"==typeof o&&!~leafPrototypes.indexOf(o);o=getProto(o))Object.getOwnPropertyNames(o).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,__webpack_require__.d(r,n),r},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,r)=>(__webpack_require__.f[r](e,t),t)),[])),__webpack_require__.u=e=>e+"."+{208:"82e1dad4ecb5ae5f4e78",217:"6e66c0f3e188a8218ff0",385:"98d587561ed0b6c52bcd",519:"1bbecee74955aea84817",593:"42a79be1a7afdf5bc2db",612:"da1a0a61c9e01f49cb3e",662:"25bf72af2a01dfc3a32a",670:"4d3174dee5c832176d17",938:"c86d60c3eff07ad2a32a"}[e]+".js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},__webpack_require__.l=(e,t,r,n)=>{if(inProgress[e])inProgress[e].push(t);else{var o,i;if(void 0!==r)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var c=a[s];if(c.getAttribute("src")==e){o=c;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.src=e),inProgress[e]=[t];var u=(t,r)=>{o.onerror=o.onload=null,clearTimeout(l);var n=inProgress[e];if(delete inProgress[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),i&&document.head.appendChild(o)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/",(()=>{var e={179:0};__webpack_require__.f.j=(t,r)=>{var n=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(i,(r=>{if(__webpack_require__.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in a)__webpack_require__.o(a,n)&&(__webpack_require__.m[n]=a[n]);s&&s(__webpack_require__)}for(t&&t(r);c<i.length;c++)o=i[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__(10)})();