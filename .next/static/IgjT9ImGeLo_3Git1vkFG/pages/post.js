(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EhLH:function(e,t,r){"use strict";r.r(t);var n=r("ln6h"),o=r.n(n),i=r("O40h"),s=r("vYYK"),a=r("q1tI"),u=r.n(a),l=r("17x9"),f=r.n(l),c=r("H2TA"),h=r("lO0E"),d=r("ofer"),p=r("30+C"),y=r("oa/T"),b=r("Ie8z"),m=r("LpSC"),_=r.n(m),w="D:\\node\\blog\\web\\pages\\post.js";function g(e){var t=e.classes,r=e.post;return u.a.createElement(u.a.Fragment,{__source:{fileName:w,lineNumber:45},__self:this},u.a.createElement("div",{className:t.layout,__source:{fileName:w,lineNumber:46},__self:this},u.a.createElement(h.a,{className:t.toolbarMain,__source:{fileName:w,lineNumber:47},__self:this},u.a.createElement(d.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle,__source:{fileName:w,lineNumber:48},__self:this},"Delivery")),u.a.createElement("main",{__source:{fileName:w,lineNumber:59},__self:this},u.a.createElement(p.a,{className:t.card,__source:{fileName:w,lineNumber:60},__self:this},u.a.createElement(b.a,{className:t.cardMedia,image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EPicture%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",title:"Image title",height:"140",__source:{fileName:w,lineNumber:61},__self:this}),u.a.createElement("div",{className:t.cardDetails,__source:{fileName:w,lineNumber:67},__self:this},u.a.createElement(y.a,{__source:{fileName:w,lineNumber:68},__self:this},u.a.createElement(d.a,{component:"h2",__source:{fileName:w,lineNumber:69},__self:this},r.title),u.a.createElement(d.a,{component:"p",__source:{fileName:w,lineNumber:72},__self:this},r.body))))),u.a.createElement("a",{href:"./",__source:{fileName:w,lineNumber:79},__self:this},"Voltar")))}g.getInitialProps=function(){var e=Object(i.default)(o.a.mark(function e(t){var r,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()("https://jsonplaceholder.typicode.com/posts/".concat(t.query.postId));case 2:if(!(r=e.sent).ok){e.next=8;break}return e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",{post:n});case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g.propTypes={classes:f.a.object.isRequired},t.default=Object(c.a)(function(e){return{layout:Object(s.a)({width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},e.breakpoints.up(1100+2*e.spacing(3)),{width:1100,marginLeft:"auto",marginRight:"auto"}),toolbarMain:{borderBottom:"1px solid ".concat(e.palette.grey[300])},toolbarTitle:{flex:1},card:{},cardDetails:{},cardMedia:{objectFit:"cover",height:140}}})(g)},LpSC:function(e,t,r){r("bZMm"),e.exports=self.fetch.bind(self)},MDTK:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){var e=r("EhLH");return{page:e.default||e}}])},bZMm:function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return l}),r.d(t,"Request",function(){return b}),r.d(t,"Response",function(){return w}),r.d(t,"DOMException",function(){return E}),r.d(t,"fetch",function(){return v});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!==typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function c(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function h(e){var t=new FileReader,r=c(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:n.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n.arrayBuffer&&n.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=d(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=c(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(e,t){e=s(e),t=a(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},l.prototype.delete=function(e){delete this.map[s(e)]},l.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},l.prototype.set=function(e,t){this.map[s(e)]=a(t)},l.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},l.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),u(e)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},l.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),u(e)},n.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=function(e){var t=e.toUpperCase();return y.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function _(e){var t=new l;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var g=[301,302,303,307,308];w.redirect=function(e,t){if(-1===g.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};var E=self.DOMException;try{new E}catch(A){(E=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function v(e,t){return new Promise(function(r,o){var i=new b(e,t);if(i.signal&&i.signal.aborted)return o(new E("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:_(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;r(new w(t,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new E("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})}v.polyfill=!0,self.fetch||(self.fetch=v,self.Headers=l,self.Request=b,self.Response=w)}},[["MDTK",1,0]]]);