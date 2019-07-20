module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../empresas.js":
/*!**********************!*\
  !*** ../empresas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tileData = [
  {
    id: 1,
    title: "Produto 1",
    description:
      "Nostrud ex nulla ut ullamco sint eu incididunt aute labore sit consectetur adipisicing. Laboris duis Lorem dolor amet et ad sint. Nulla cupidatat ullamco in duis aliquip. Sunt non officia dolore pariatur aliqua laborum non ullamco id et cillum.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 2,
    title: "Produto 2",
    description:
      "Lorem qui voluptate sunt duis velit. Minim ullamco reprehenderit commodo deserunt aliquip do deserunt incididunt tempor laboris in consequat sit. Do mollit ullamco Lorem officia veniam velit reprehenderit culpa id dolor officia. Sint do mollit officia velit ad qui aliquip.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 3,
    title: "Produto 3",
    description:
      "Eu cupidatat adipisicing reprehenderit consectetur et mollit nulla est culpa adipisicing. Est dolor reprehenderit nostrud quis veniam ea deserunt ex cupidatat. Laboris exercitation cillum veniam tempor irure laborum id sunt ex sint. Tempor ea nostrud sunt enim tempor elit proident est non reprehenderit proident esse cillum. Tempor pariatur aute officia duis mollit officia labore.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 4,
    title: "Produto 4",
    description:
      "Pariatur qui in incididunt exercitation reprehenderit magna incididunt adipisicing velit nulla veniam pariatur. Cillum officia mollit pariatur ut consequat culpa. Consequat do dolor qui nostrud ullamco. Aliqua non commodo irure amet reprehenderit sit magna nulla qui deserunt mollit Lorem minim.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 5,
    title: "Taffarel",
    description:
      "Ad cillum mollit ut aliquip magna velit. Veniam proident aliquip velit exercitation nisi sint velit occaecat aliqua. Dolore aliquip ipsum dolore eu.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 6,
    title: "Taffarel",
    description:
      "Duis tempor elit pariatur adipisicing proident ea anim veniam irure veniam laboris occaecat nostrud ipsum. Exercitation non in est dolore non incididunt labore. Incididunt excepteur duis nulla ipsum. Proident quis ipsum laborum minim aliquip mollit consectetur laborum.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 7,
    title: "Taffarel",
    description:
      "Fugiat ullamco labore aliquip in anim labore anim cupidatat deserunt est nostrud. Excepteur magna nostrud sit proident sit quis commodo esse est. Lorem elit qui do excepteur qui quis nisi nisi sint voluptate sunt esse. Minim mollit elit esse cillum.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 8,
    title: "Taffarel",
    description:
      "Duis proident elit cupidatat qui est voluptate eu minim laboris enim. Dolor anim duis ullamco excepteur labore amet quis. Aliquip et reprehenderit duis ut ullamco ullamco nisi sint. Sint do aliquip anim velit do anim.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 9,
    title: "Taffarel",
    description:
      "Magna ad in sunt ex non amet. Cupidatat et ullamco nulla elit amet nulla consectetur id commodo tempor non quis. Aliqua id nulla voluptate eu in eiusmod nulla adipisicing sunt. Dolore culpa irure magna do in laboris enim ipsum occaecat. Sint nisi minim reprehenderit dolore esse deserunt pariatur sint. Deserunt in irure culpa minim cillum duis dolore nisi nostrud in dolore.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  {
    id: 10,
    title: "Taffarel",
    description:
      "Consectetur laboris consequat laboris ipsum consectetur ullamco eiusmod nostrud amet elit deserunt fugiat elit amet. Cupidatat nostrud minim id eu ut do ea dolor Lorem. Magna nisi in voluptate est officia veniam dolor consectetur enim ut. Laborum duis fugiat nisi laborum quis mollit aute cupidatat occaecat non consequat. Incididunt ipsum ut dolore pariatur laborum nisi irure. Cupidatat aliquip commodo irure incididunt nulla fugiat quis deserunt. Incididunt id excepteur eiusmod et amet.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 11,
    title: "Taffarel",
    description:
      "Id cillum magna ex occaecat esse eiusmod quis quis nisi. Consectetur sint consequat incididunt voluptate ea id enim cillum fugiat do dolor eu. Velit ipsum ullamco eu proident ullamco adipisicing eiusmod.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 12,
    title: "Taffarel",
    description:
      "Minim et incididunt id culpa ea aliquip cillum dolore mollit aute esse. Non veniam deserunt anim nulla commodo est in deserunt ut id minim irure aliquip. Esse ipsum dolore voluptate anim est do nisi adipisicing ad laboris consequat. Deserunt pariatur anim sit exercitation magna laborum id incididunt nostrud laborum qui quis. Irure Lorem Lorem ullamco occaecat enim. Amet reprehenderit est sunt incididunt proident labore laborum eiusmod sit. Irure amet nostrud nisi mollit esse sit aliquip cupidatat qui elit elit.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 13,
    title: "Taffarel",
    description:
      "Esse anim ipsum consectetur incididunt. Anim consequat ad proident irure amet dolor officia consequat sit esse deserunt non irure. Officia veniam amet ea est minim amet enim ut laborum do Lorem consectetur pariatur. Cupidatat consequat laboris aliqua exercitation dolore consectetur ad. Do et cupidatat eu cillum elit cillum irure laboris ex et eu duis eiusmod. Nisi id sunt mollit pariatur amet adipisicing ut est proident aute excepteur ex ullamco. Cillum aliquip ipsum occaecat magna in incididunt tempor Lorem nisi ullamco adipisicing tempor ullamco cillum.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 14,
    title: "Taffarel",
    description: "Laboris et pariatur ex qui id ad consequat est consequat.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 15,
    title: "Taffarel",
    description: "Irure occaecat ea Lorem dolor consequat aliquip non.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 16,
    title: "Taffarel",
    description:
      "Sunt est est quis consectetur ad ex enim ut quis reprehenderit incididunt ad.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 17,
    title: "Taffarel",
    description: "Sit excepteur dolor nisi ut.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  },
  { id: 18,
    title: "Taffarel",
    description: "Non labore duis cupidatat do magna sit labore non.",
    author: "AAA",
    img: "https://source.unsplash.com/random"
  }
];
/* harmony default export */ __webpack_exports__["default"] = (tileData);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/empresa/[id].js":
/*!*******************************!*\
  !*** ./pages/empresa/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pricing; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _empresas__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../empresas */ "../empresas.js");

var _jsxFileName = "D:\\node\\blog\\web\\pages\\empresa\\[id].js";























function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Criado por ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Teste"), " team.");
}

var footers = [{
  title: "Company",
  description: ["Team", "History", "Contact us", "Locations"]
}, {
  title: "Features",
  description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"]
}, {
  title: "Resources",
  description: ["Resource", "Resource name", "Another resource", "Final resource"]
}, {
  title: "Legal",
  description: ["Privacy policy", "Terms of use"]
}];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    "@global": {
      body: {
        background: "url(https://res.cloudinary.com/delivery-com/image/fetch/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2Fdefault-small.jpg)",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "5% 1%"
      },
      ul: {
        margin: 0,
        padding: 0
      },
      li: {
        listStyle: "none"
      }
    },
    appBar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbar: {
      flexWrap: "wrap"
    },
    toolbarTitle: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200]
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: theme.spacing(2)
    },
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderTop: "1px solid ".concat(theme.palette.divider),
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.up("sm"), {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }),
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9

    },
    cardContent: {
      flexGrow: 1
    },
    rootinput: {
      borderRadius: 40,
      display: "flex",
      alignItems: "center",
      width: 400,
      margin: "0px auto",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    textFieldInput: {
      backgroundColor: theme.palette.common.white,
      fontSize: 16,
      padding: "10px 12px",
      width: "calc(100% - 24px)",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    },
    input: {
      marginLeft: 8,
      flex: 1,
      borderRadius: 15,
      padding: 15
    },
    iconButton: {
      padding: 10
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    }
  };
});
function Pricing() {
  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_21__["useRouter"])();

  var handleClick = function handleClick() {
    console.log("this is:", _this);
  };

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "../",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Delivery  ", router.query.id)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Sair"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_20__["ShoppingCartOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default.a, {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    component: "h4",
    variant: "h4",
    align: "center",
    color: "primary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Onde est\xE1 a sua fome?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_20__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: classes.textFieldInput,
    placeholder: "Pesquisar",
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_20__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, router.query.id, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 4,
    style: {
      cursor: "pointer"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, _empresas__WEBPACK_IMPORTED_MODULE_22__["default"].map(function (card, id) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      key: card.id,
      title: "Clique para entrar em " + card.title,
      xs: 12,
      sm: 6,
      md: 4,
      onClick: function onClick() {
        console.log(card);
        window.location = "/post/" + card.id;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.cardMedia,
      image: card.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, card.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, card.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: "small",
      color: "primary",
      dataobj: card,
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "Detalhes..."))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14___default.a, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, footers.map(function (footer) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      key: footer.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, footer.description.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, item));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_15___default.a, {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }))));
}

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/empresa/[id].js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\node\blog\web\pages\empresa\[id].js */"./pages/empresa/[id].js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map