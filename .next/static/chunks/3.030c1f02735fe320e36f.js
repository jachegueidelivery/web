(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0MBr":function(e,a,t){"use strict";t.r(a);var n=t("doui"),l=t("q1tI"),o=t.n(l),i=t("R/WZ"),r=t("wx14"),c=t("Ff2n"),s=(t("17x9"),t("iuhU")),u=(t("2W6z"),t("H2TA")),m=o.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,i=e.component,u=void 0===i?"div":i,m=e.onChange,f=e.showLabels,p=void 0!==f&&f,d=e.value,b=Object(c.a)(e,["children","classes","className","component","onChange","showLabels","value"]);return o.a.createElement(u,Object(r.a)({className:Object(s.a)(n.root,l),ref:a},b),o.a.Children.map(t,function(e,a){if(!o.a.isValidElement(e))return null;var t=void 0===e.props.value?a:e.props.value;return o.a.cloneElement(e,{selected:t===d,showLabel:void 0!==e.props.showLabel?e.props.showLabel:p,value:t,onChange:m})}))}),f=Object(u.a)(function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}},{name:"MuiBottomNavigation"})(m),p=t("VD++"),d=o.a.forwardRef(function(e,a){var t=e.classes,n=e.className,l=e.icon,i=e.label,u=e.onChange,m=e.onClick,f=e.selected,d=e.showLabel,b=e.value,h=Object(c.a)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return o.a.createElement(p.a,Object(r.a)({ref:a,className:Object(s.a)(t.root,n,f?t.selected:!d&&t.iconOnly),focusRipple:!0,onClick:function(e){u&&u(e,b),m&&m(e)}},h),o.a.createElement("span",{className:t.wrapper},l,o.a.createElement("span",{className:Object(s.a)(t.label,f?t.selected:!d&&t.iconOnly)},i)))}),b=Object(u.a)(function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}},{name:"MuiBottomNavigationAction"})(d),h=t("LYUY"),_=Object(h.a)(o.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),N=Object(h.a)(o.a.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),v=t("urJs"),y=t("CnBM"),O=t.n(y),g=t("EQ3O"),E=t("VP1n");t.d(a,"default",function(){return x});var j="D:\\node\\delivery\\components\\NavigationBottom.js",w=O()({loader:function(){return t.e(2).then(t.bind(null,"UrxM"))},loading:function(){return o.a.createElement(E.a,{height:"30px",margintop:"5px",__source:{fileName:j,lineNumber:14},__self:this})}}),C=Object(i.a)({stickToBottom:{width:"100%",position:"fixed",bottom:0}});function x(){var e=C(),a=Object(l.useState)("recents"),t=Object(n.default)(a,2),i=t[0],r=t[1],c=Object(l.useState)(null),s=Object(n.default)(c,2),u=s[0],m=s[1],p=Object(l.useState)(!1),d=Object(n.default)(p,2),h=d[0],y=d[1],O=Boolean(u);return o.a.createElement(l.Fragment,{__source:{fileName:j,lineNumber:47},__self:this},o.a.createElement(g.a,{anchorEl:u,handleMenuClose:function(){m(null)},abrir:O,__source:{fileName:j,lineNumber:48},__self:this}),o.a.createElement(f,{value:i,className:e.stickToBottom,onChange:function(e,a){r(a)},showLabels:!0,__source:{fileName:j,lineNumber:53},__self:this},o.a.createElement(b,{label:"IN\xcdCIO",value:"recents",icon:o.a.createElement(_,{color:"primary",fontSize:"small",__source:{fileName:j,lineNumber:62},__self:this}),__source:{fileName:j,lineNumber:59},__self:this}),o.a.createElement(b,{label:"CARRINHO",value:"favorites",onClick:function(e){m(e.currentTarget)},icon:o.a.createElement(v.a,{__source:{fileName:j,lineNumber:68},__self:this}),__source:{fileName:j,lineNumber:64},__self:this}),o.a.createElement(b,{label:"FAZER PEDIDO",value:"nearby",onClick:function(){return y(!0)},icon:o.a.createElement(N,{color:"primary",fontSize:"small",__source:{fileName:j,lineNumber:74},__self:this}),__source:{fileName:j,lineNumber:70},__self:this})),o.a.createElement(w,{open:h,onClose:function(){y(!1)},__source:{fileName:j,lineNumber:77},__self:this}))}}}]);