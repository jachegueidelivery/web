(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+oT+":function(e,t,n){var r=n("eVuF");function a(e,t,n,a,u,o,i){try{var l=e[o](i),c=l.value}catch(f){return void n(f)}l.done?t(c):r.resolve(c).then(a,u)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,l,"next",e)}function l(e){a(o,r,u,i,l,"throw",e)}i(void 0)})}}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("UXZV"),a=n.n(r);function u(){return(u=a.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n("0iUn"),i=n("sLSF"),l=n("MI3g"),c=n("a7VT"),f=n("Tit0"),s=n("q1tI"),d=n.n(s),p=n("8Bbg"),h=n.n(p),v=n("m/Pd"),m=n.n(v),y=n("wx14"),_=(n("17x9"),n("2W6z"),n("OKji")),b=n("aXM8"),w=n("hfi/");var C=function(e){var t=e.children,n=e.theme,r=Object(b.a)(),a=d.a.useMemo(function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(y.a)({},e,{},t)}(r,n);return null!==r&&e&&(e[w.a]=!0),e},[n,r]);return d.a.createElement(_.a.Provider,{value:a},t)},g=n("5CWz"),k=n("viY9"),I=n("dl/7"),x=Object(k.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:I.a.A400},background:{default:"#fff"}}}),P="E:\\delivery\\pages\\_app.js",M=function(e){function t(){return Object(o.default)(this,t),Object(l.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(f.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return d.a.createElement(p.Container,{__source:{fileName:P,lineNumber:20},__self:this},d.a.createElement(m.a,{__source:{fileName:P,lineNumber:21},__self:this},d.a.createElement("title",{__source:{fileName:P,lineNumber:22},__self:this},"My Delivery")),d.a.createElement(C,{theme:x,__source:{fileName:P,lineNumber:24},__self:this},d.a.createElement(g.a,{__source:{fileName:P,lineNumber:25},__self:this}),d.a.createElement(t,u({},n,{__source:{fileName:P,lineNumber:26},__self:this}))))}}]),t}(h.a);t.default=M},"3JuP":function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("MI3g")),o=r(n("a7VT")),i=r(n("AT/M")),l=r(n("sLSF")),c=r(n("Tit0")),f=r(n("dfwq")),s=r(n("ttDY"));(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var d=n("q1tI"),p=!1;t.default=function(){var e,t=new s.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,a.default)(this,f),r=(0,u.default)(this,(0,o.default)(f).call(this,e)),p&&(t.add((0,i.default)(r)),n((0,i.default)(r))),r}return(0,c.default)(f,r),(0,l.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(d.Component)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("sLSF")),o=r(n("MI3g")),i=r(n("a7VT")),l=r(n("Tit0")),c=r(n("ln6h")),f=n("KI45");t.__esModule=!0,t.Container=w,t.createUrl=g,t.default=void 0;var s=f(n("htGi")),d=f(n("+oT+")),p=f(n("q1tI")),h=f(n("17x9")),v=n("Bu4q");t.AppInitialProps=v.AppInitialProps;var m=n("nOHt");function y(e){return _.apply(this,arguments)}function _(){return(_=(0,d.default)(c.default.mark(function e(t){var n,r,a;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,v.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var b=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=g(t);return p.default.createElement(w,null,p.default.createElement(n,(0,s.default)({},r,{url:a})))}}]),t}(p.default.Component);function w(e){return e.children}t.default=b,b.childContextTypes={router:h.default.object},b.origGetInitialProps=y,b.getInitialProps=y;var C=(0,v.execOnce)(function(){0});function g(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return C(),r},get pathname(){return C(),t},get asPath(){return C(),n},back:function(){C(),e.back()},push:function(t,n){return C(),e.push(t,n)},pushTo:function(t,n){C();var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return C(),e.replace(t,n)},replaceTo:function(t,n){C();var r=n?t:"",a=n||t;return e.replace(r,a)}}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=n("3JuP");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ttDY")),u=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var o=u(n("q1tI")),i=u(n("4hZ1")),l=n("3JuP"),c=n("IClC"),f=n("Wziy");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(s("",t.inAmpMode)).filter(function(){var e=new a.default,t=new a.default,n=new a.default,r={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!e.has(u.key)&&(e.add(u.key),!0);switch(u.type){case"title":case"base":if(t.has(u.type))return!1;t.add(u.type);break;case"meta":for(var o=0,i=p.length;o<i;o++){var l=p[o];if(u.props.hasOwnProperty(l))if("charSet"===l){if(n.has(l))return!1;n.add(l)}else{var c=u.props[l],f=r[l]||new a.default;if(f.has(c))return!1;f.add(c),r[l]=f}}}return!0}}()).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";"title"!==e.type||e.props.className||(n=void 0);var r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})})}var v=i.default();function m(e){var t=e.children;return o.default.createElement(l.AmpStateContext.Consumer,null,function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)})})}m.rewind=v.rewind,t.default=m}},[["GcxT",1,0]]]);