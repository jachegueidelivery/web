(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/a9y":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("sLSF")),o=r(n("MI3g")),i=r(n("a7VT")),s=r(n("Tit0")),l=n("KI45");t.__esModule=!0,t.default=void 0;var f=l(n("q1tI")),c=l(n("PgRs")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:h.error},f.default.createElement(c.default,null,f.default.createElement("title",null,e,": ",t)),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:h.h1},e):null,f.default.createElement("div",{style:h.desc},f.default.createElement("h2",{style:h.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(f.default.Component);t.default=p,p.displayName="ErrorPage";var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1HF/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("Y0NT");return{page:e.default||e}}])},"3JuP":function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("MI3g")),o=r(n("a7VT")),i=r(n("AT/M")),s=r(n("sLSF")),l=r(n("Tit0")),f=r(n("dfwq")),c=r(n("ttDY"));(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var d=n("q1tI"),p=!1;t.default=function(){var e,t=new c.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,a.default)(this,f),r=(0,u.default)(this,(0,o.default)(f).call(this,e)),p&&(t.add((0,i.default)(r)),n((0,i.default)(r))),r}return(0,l.default)(f,r),(0,s.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,s.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(d.Component)}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},IClC:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},PgRs:function(e,t,n){e.exports=n("m/Pd")},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),u=n("JB68"),o=n("sNwI"),i=n("NwJ3"),s=n("tEej"),l=n("IP1Z"),f=n("fNZA");a(a.S+a.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,c,d=u(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=f(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&i(g))for(n=new p(t=s(d.length));t>y;y++)l(n,y,m?v(d[y],y):d[y]);else for(c=g.call(d),n=new p;!(a=c.next()).done;y++)l(n,y,m?o(c,v,[a.value,y],!0):a.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=n("3JuP");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))}},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),u=n("O40h"),o=n("0iUn"),i=n("sLSF"),s=n("MI3g"),l=n("a7VT"),f=n("Tit0"),c=n("q1tI"),d=n.n(c),p=n("eomm"),h=n.n(p),v=n("zgjP"),m=n.n(v),y="E:\\delivery-rsvtelecom-com-br\\pages\\_error.js",g=function(e){function t(){return Object(o.default)(this,t),Object(s.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(f.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return this.props.errorCode?d.a.createElement(h.a,{statusCode:this.props.errorCode,__source:{fileName:y,lineNumber:16},__self:this}):d.a.createElement("div",{__source:{fileName:y,lineNumber:19},__self:this},"Next stars: ",this.props.stars)}}],[{key:"getInitialProps",value:function(){var e=Object(u.default)(a.a.mark(function e(){var t,n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://api.github.com/repos/zeit/next.js");case 2:return t=e.sent,n=t.statusCode>200&&t.statusCode,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",{errorCode:n,stars:r.stargazers_count});case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(d.a.Component);t.default=g},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var u=n("d04V"),o=n.n(u),i=n("yLu3"),s=n.n(i);function l(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(s()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return l})},eomm:function(e,t,n){e.exports=n("/a9y")},ldVq:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),u=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||u.hasOwnProperty(r(t))}},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,u=[],o=[],i={},s=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:s,headers:{keys:function(){return u},entries:function(){return o},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){u.push(t=t.toLowerCase()),o.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(s())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(l,t.headers[l]);a.send(t.body||null)})}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ttDY")),u=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var o=u(n("q1tI")),i=u(n("4hZ1")),s=n("3JuP"),l=n("IClC"),f=n("Wziy");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=c;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(c("",t.inAmpMode)).filter(function(){var e=new a.default,t=new a.default,n=new a.default,r={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!e.has(u.key)&&(e.add(u.key),!0);switch(u.type){case"title":case"base":if(t.has(u.type))return!1;t.add(u.type);break;case"meta":for(var o=0,i=p.length;o<i;o++){var s=p[o];if(u.props.hasOwnProperty(s))if("charSet"===s){if(n.has(s))return!1;n.add(s)}else{var l=u.props[s],f=r[s]||new a.default;if(f.has(l))return!1;f.add(l),r[s]=f}}}return!0}}()).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";"title"!==e.type||e.props.className||(n=void 0);var r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})})}var v=i.default();function m(e){var t=e.children;return o.default.createElement(s.AmpStateContext.Consumer,null,function(e){return o.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)})})}m.rewind=v.rewind,t.default=m},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")},yLu3:function(e,t,n){e.exports=n("VKFn")},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["1HF/",1,0]]]);