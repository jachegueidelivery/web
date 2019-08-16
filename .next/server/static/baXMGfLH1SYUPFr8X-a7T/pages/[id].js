module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"8bb60bed2d08a1306027"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2+Ue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyTheme; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\AlertNotHasProducts.js";


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, theme.typography.button, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: "center",
      boxShadow: "0px 0px 15px 0px rgba(10,10,10,0.1)"
    })
  };
});
function TypographyTheme(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label));
}

/***/ }),

/***/ "2AuE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4151");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("AJJM");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Ms0O");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("ynsX");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("nybW");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("SJC6");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("6Yxu");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("aIN1");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("Y8uC");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("SOXQ");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("EQ3O");
/* harmony import */ var _components_ApiRest__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("lYgS");
/* harmony import */ var _components_SpinnerDelivery__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("XQ11");
/* harmony import */ var _components_AlertNotHasProducts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("2+Ue");
/* harmony import */ var _components_TotalPedidos__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("urJs");
/* harmony import */ var _components_Produtos__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("KHrj");








var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\pages\\[id].js";































function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(props, ["children", "value", "index"]);

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, children));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    "aria-controls": "simple-tabpanel-".concat(index)
  };
}

function MadeWithLove(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Criado por ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, props.config.empresa));
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["makeStyles"])(function (theme) {
  return {
    "@global": {
      body: {
        background: "url(../static/background.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
    appBarBottom: {
      top: "auto",
      bottom: 0
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
      padding: theme.spacing(0, 0, 0)
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
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
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
    cardMediaList: {
      paddingTop: "56.25%",
      // 16:9
      marginRight: "20px"
    },
    cardContent: {
      flexGrow: 1
    },
    carregando: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    rootinput: {
      borderRadius: 40,
      display: "flex",
      alignItems: "center",
      width: "80%",
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
    },
    tabContent: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      position: "relative",
      minHeight: 600
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_28__["green"][500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_28__["green"][600]
      }
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    icon: {
      margin: theme.spacing(2)
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 151
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  };
});

var Index = function Index(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_27__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState3, 2),
      produtosAsObject = _React$useState4[0],
      setProdutosAsObject = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState5, 2),
      search = _React$useState6[0],
      setSearch = _React$useState6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(!1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState7, 2),
      mobileMoreAnchorEl = _useState8[0],
      setMobileMoreAnchorEl = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState9, 2),
      iniciar = _useState10[0],
      setIniciar = _useState10[1];

  var isMenuOpen = Boolean(anchorEl);

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    config: []
  }),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState11, 2),
      empresa = _useState12[0],
      setEmpresa = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("Carregando..."),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState13, 2),
      nome_fantasia = _useState14[0],
      setNomeFantasia = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    dados: [],
    isLoading: false
  }),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState15, 2),
      produtos = _useState16[0],
      setProdutos = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_useState17, 2),
      empresaId = _useState18[0],
      setEmpresaId = _useState18[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();

    if (iniciar == true) {
      setIniciar(false); //setProdutosAsObject(props.shows);
    }
  });
  /*
  BUSCA OS DADOS DA EMPRESA
  */

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var id = router.query.id;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _components_ApiRest__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].get("/empresas/" + id);

              case 2:
                result = _context.sent;
                setEmpresa(result.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  /**
   * PRODUTOS
   */

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(empresaId !== null)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _components_ApiRest__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"].get("/produtos/empresa/" + empresaId);

              case 3:
                result = _context2.sent;
                setProdutos({
                  data: result.data,
                  isLoading: true
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, [empresaId]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (!empresa.config) {
      setNomeFantasia(empresa["0"].nome_fantasia);
      setEmpresaId(empresa["0"].id);
    }
  });

  function onChangeInputSearch(ev) {
    var valor = ev.target.value;
    setSearch(valor.toUpperCase());

    if (valor.trim() !== "") {
      /*let adults = Object.values(props.shows).filter(produto => {
      if (produto.id !== undefined) {
      if (produto.nome.toUpperCase().includes(valor.toUpperCase())) {
      return produto;
      }
      }
      });
      setProdutosAsObject(adults);*/
    } else {//setProdutosAsObject(props.shows);
      }

    if (ev.keyCode == 27) {
      //setProdutosAsObject(props.shows);
      setSearch("");
    }
  }

  function onAtualizarCount() {
    setCountPedidosLocal(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"].count("products"));
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleProfileMenuOpen(event) {
    //onAtualizarCount();
    if (_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"].count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    //onAtualizarCount();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function confirmarPedido() {
    alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"].getDataByKey("products")));
    _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"].remove("products");
  }

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    position: "fixed",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    href: "../",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, nome_fantasia)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_30___default.a, {
    lgDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: confirmarPedido,
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, "CONFIRMAR PEDIDO")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23___default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_TotalPedidos__WEBPACK_IMPORTED_MODULE_36__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18___default.a, {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_24___default.a, {
    value: value,
    onChange: handleChange,
    "aria-label": "Simple tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "PRODUTOS"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "SEUS PEDIDOS"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_25___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "AVALIA\xC7\xD5ES"
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18___default.a, {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_20___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_26__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.textFieldInput,
    placeholder: "Pesquise produtos aqui...",
    onChange: function onChange(ev) {
      return onChangeInputSearch(ev);
    },
    onKeyUp: function onKeyUp(ev) {
      return onChangeInputSearch(ev);
    },
    value: search,
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_22___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_26__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }))), produtos.isLoading == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SpinnerDelivery__WEBPACK_IMPORTED_MODULE_34__[/* default */ "a"], {
    label: "Carregando produtos, aguarde, por gentileza...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  })), produtos.isLoading == true && empresaId != null && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, produtos.data.hasOwnProperty("erro") && produtos.data ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_AlertNotHasProducts__WEBPACK_IMPORTED_MODULE_35__[/* default */ "a"], {
    label: "N\xE3o h\xE1 produtos para esta empresa.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }), console.log(produtos.data)) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(produtos.data).map(function (product, _key) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
      key: _key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Produtos__WEBPACK_IMPORTED_MODULE_37__[/* default */ "a"], {
      produto: product,
      id: product.id,
      nome: product.nome.toUpperCase(),
      imagem: product.imagem,
      precoUnitario: product.preco,
      descricao: product.descricao,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }));
  }), "  "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, "Tab 2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, "Tab 3")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    position: "fixed",
    color: "default",
    elevation: 0,
    className: classes.appBarBottom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_30___default.a, {
    lgDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: confirmarPedido,
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "CONFIRMAR PEDIDO")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23___default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_TotalPedidos__WEBPACK_IMPORTED_MODULE_36__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_18___default.a, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, _components_footer__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"].map(function (footer, key) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536
      },
      __self: this
    }, footer.description.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, item));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19___default.a, {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, MadeWithLove(props))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"], {
    anchorEl: anchorEl,
    data: data,
    handleMenuClose: handleMenuClose,
    abrir: isMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(ctx) {
    var configSite;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, "q93c", 3));

          case 2:
            configSite = _context3.sent;
            return _context3.abrupt("return", {
              config: configSite
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2AuE");


/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EQ3O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var icons_Menu_ = __webpack_require__("4D1s");
var icons_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/ButtonBase"
var ButtonBase_ = __webpack_require__("Lp4D");
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);

// EXTERNAL MODULE: ./components/LocalStorageHandler.js
var LocalStorageHandler = __webpack_require__("SOXQ");

// CONCATENATED MODULE: ./components/carrinho.js

var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\carrinho.js";











 //LocalStorage Classe:


var useStyles = Object(styles_["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 500,
      minWidth: 500
    },
    image: {
      width: 128,
      height: "110.129px"
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    Div: {
      display: 'flex',
      justifyContent: 'center',
      width: '200px',
      margin: '0px',
      border: '1px outset pink'
    }
  };
});

var carrinho_Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(external_react_["useState"])([]),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function onConfirmar() {
    //alert(JSON.stringify(LocalStorageHandler.getDataByKey('products')));
    LocalStorageHandler["a" /* default */].remove('products');
  }
  /*useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);*/


  if (!props.data) {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "N\xE3o h\xE1 produtos ainda"));
  }

  var remover = function remover(id) {
    LocalStorageHandler["a" /* default */].removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  var valorTotal = 0; //Objeto

  var Conteudo = props.data.map(function (produto, _k) {
    var quant = produto.quantidade;
    var valTotal = produto.preco * quant;
    valorTotal += valTotal;
    return external_react_default.a.createElement(external_react_default.a.Fragment, {
      key: _k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, external_react_default.a.createElement(Paper_default.a, {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, external_react_default.a.createElement(Grid_default.a, {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, external_react_default.a.createElement(Grid_default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, external_react_default.a.createElement(ButtonBase_default.a, {
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, external_react_default.a.createElement("img", {
      className: classes.img,
      alt: "complex",
      src: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))), external_react_default.a.createElement(Grid_default.a, {
      item: true,
      xs: 12,
      sm: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, external_react_default.a.createElement(Grid_default.a, {
      item: true,
      xs: true,
      container: true,
      direction: "column",
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, external_react_default.a.createElement(Grid_default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, external_react_default.a.createElement(Typography_default.a, {
      gutterBottom: true,
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, external_react_default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, produto.nome)), external_react_default.a.createElement(Typography_default.a, {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), external_react_default.a.createElement(Grid_default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, external_react_default.a.createElement(Typography_default.a, {
      onClick: function onClick(ev) {
        return remover(produto.productId);
      },
      size: "small",
      variant: "body2",
      style: {
        cursor: 'pointer'
      },
      color: "primary",
      title: "Clique para remover este item do carrinho",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Remover"))), external_react_default.a.createElement(Grid_default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, external_react_default.a.createElement(Typography_default.a, {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, external_react_default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Quant:  ", quant)), external_react_default.a.createElement(Typography_default.a, {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, external_react_default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "R$  ", produto.preco.toFixed(2))), external_react_default.a.createElement(Typography_default.a, {
      variant: "subtitle1",
      title: "Valor Total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, external_react_default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "V.T.: R$  ", valTotal.toFixed(2))))))), external_react_default.a.createElement("hr", {
      style: {
        border: 0,
        borderTop: "1px solid #ddd"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }));
  });
  return external_react_default.a.createElement(external_react_default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, external_react_default.a.createElement(AppBar_default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, external_react_default.a.createElement(Toolbar_default.a, {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, external_react_default.a.createElement(IconButton_default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, external_react_default.a.createElement(icons_Menu_default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), external_react_default.a.createElement(Typography_default.a, {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "MEU CARRINHO")))), Conteudo, external_react_default.a.createElement(AppBar_default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, external_react_default.a.createElement(Toolbar_default.a, {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: true,
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, external_react_default.a.createElement(Typography_default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, external_react_default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "VALOR TOTAL: R$ ", valorTotal.toFixed(2)))))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, external_react_default.a.createElement(Button_default.a, {
    variant: "contained",
    align: "",
    size: "large",
    onClick: function onClick(ev) {
      return onConfirmar(ev);
    },
    color: "primary",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "CONFIRMAR?"))))));
};

/* harmony default export */ var carrinho = (carrinho_Carrinho);
// CONCATENATED MODULE: ./components/Menu.js

var Menu_jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\Menu.js";





var Menu_renderMenu = function renderMenu(props) {
  var _useState = Object(external_react_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      mobileMoreAnchorEl = _useState4[0],
      setMobileMoreAnchorEl = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      countPedidosLocal = _useState6[0],
      setCountPedidosLocal = _useState6[1];

  function onAtualizarCount() {
    setCountPedidosLocal(LocalStorageHandler["a" /* default */].count("products"));
  }

  Object(external_react_["useEffect"])(function () {
    onAtualizarCount();
  }, []);
  var menuId = "primary-search-account-menu-dois";
  return external_react_default.a.createElement(Menu_default.a, {
    anchorEl: props.anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: props.abrir,
    onClose: props.handleMenuClose,
    __source: {
      fileName: Menu_jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    style: {
      padding: 10
    },
    __source: {
      fileName: Menu_jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, external_react_default.a.createElement(carrinho, {
    count: countPedidosLocal,
    data: props.data,
    __source: {
      fileName: Menu_jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
};

/* harmony default export */ var Menu = __webpack_exports__["a"] = (Menu_renderMenu);

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KHrj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produtos; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("lWoh");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tBFs");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zOcm");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("lNDQ");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Sndy");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\Produtos.js";











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    input: {
      marginLeft: 8,
      flex: 1,
      borderRadius: 15,
      padding: 15
    },
    content: {
      flex: '1 0 auto'
    },
    listaProdutos: {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);',
      display: 'flex',
      flexWrap: 'nowrap',
      border: '0px solid red',
      flexDirection: 'row',
      height: 160,
      marginTop: 10,
      backgroundColor: 'rgba(245,245,245,0.8)'
    },
    itemAvatar: {
      width: '20%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime',
      padding: 4
    },
    itemAvatarImg: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime'
    },
    itemContent: {
      width: '60%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      border: '0px solid lime',
      padding: 10
    },
    itemAcoes: {
      width: '20%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime',
      padding: 10,
      textAlign: 'center'
    },
    inputQuantidade: {
      border: 0,
      outline: 0,
      textAlign: 'center',
      width: 40
    }
  };
});
/**
 * Component: Produtos
 */

function Produtos(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      observacao = _useState6[0],
      setObservacao = _useState6[1];

  var matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()('(min-width:600px)');

  function addProduct() {
    var products = [];

    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    } //Desestrutura��o Javascript


    var id = props.id,
        nome = props.nome,
        imagem = props.imagem,
        precoUnitario = props.precoUnitario,
        descricao = props.descricao; //Pega o index

    var objIndex = products.findIndex(function (pedido) {
      return pedido.productId === id;
    }); //Caso n�o exista

    if (objIndex === -1) {
      products.push({
        productId: id,
        nome: nome,
        imagem: imagem,
        quantidade: quantidade + 1,
        observacao: observacao,
        preco: precoUnitario,
        descricao: descricao
      });
      localStorage.setItem('products', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem('products', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    }
  }

  function add() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) + 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * quant).toFixed(2));
  }

  function subtract() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) - 1;
    setQuantidade(quant);
    addProduct(); //props.handleTotal(-props.precoUnitario);

    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ev.target.value);

    setQuantidade(quant); //props.handleTotal(props.precoUnitario);

    addProduct();
    setValorTotal((props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quant)).toFixed(2));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }
  }, [quantidade]);
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root,
    id: props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.listaProdutos,
    title: 'Clique para entrar em ' + props.nome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: classes.itemAvatarImg,
    alt: "",
    src: props.imagem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, props.nome)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    wrap: "nowrap",
    title: props.descricao,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: true,
    zeroMinWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, props.descricao))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sub", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Kg")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    wrap: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    htmlFor: "my-\r input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Observa\xE7\xE3o:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "my-input",
    onChange: function onChange(ev) {
      alterarTextoTextArea(ev);
    },
    value: observacao,
    "aria-describedby": "my-helper-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemAcoes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Pre\xE7o ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "R$ ", props.precoUnitario)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Quantidade:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11___default.a, {
    disableFocusRipple: true,
    size: "small",
    variant: "contained",
    color: "primary",
    "aria-label": "Split button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    onClick: subtract,
    disabled: quantidade < 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    value: quantidade,
    className: classes.inputQuantidade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "primary",
    variant: "contained",
    size: "small",
    "aria-haspopup": "true",
    value: "+",
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "+")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.chip,
    color: "primary",
    label: "Valor a pagar".concat('\n\n', "R$ ", valorTotal),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "Lp4D":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "QEhy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "SOXQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vYYK");






/*
Uma classe para trabalhar com LocalStorage
*/
var LocalStorageHandler =
/*#__PURE__*/
function () {
  function LocalStorageHandler() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LocalStorageHandler);
  } //static _ls = localStorage;

  /**
   * @method get
   * @param key {String} Item key
   * @return {String|Object|Null}
   */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LocalStorageHandler, null, [{
    key: "get",
    value: function get(key) {
      try {
        return JSON.parse(this._ls.getItem(key));
      } catch (e) {
        return this._ls.getItem(key);
      }
    }
    /**
     * @method set
     * @param key {String} Item key
     * @param val {String|Object} Item value
     * @return {String|Object} The value of the item just set
     */

  }, {
    key: "set",
    value: function set(key, val) {
      this._ls.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(val));

      return this.get(key);
    }
    /**
     * @method key
     * @param index {Number} Item index
     * @return {String|Null} The item key if found, null if not
     */

  }, {
    key: "key",
    value: function key(index) {
      if (typeof index === 'number') {
        return this._ls.key(index);
      }
    }
    /**
     * @method data
     * @return {Array|Null} An array containing all items in localStorage through key{string}-value{String|Object} pairs
     */

  }, {
    key: "data",
    value: function data() {
      var i = 0;
      var data = [];

      while (this._ls.key(i)) {
        data[i] = [this._ls.key(i), this.get(this._ls.key(i))];
        i++;
      }

      return data.length ? data : null;
    }
  }, {
    key: "getDataByKey",
    value: function getDataByKey(key) {
      try {
        this._key = key;
        var data = localStorage.getItem(key);

        if (data === null) {
          return 0;
        }

        return JSON.parse(data);
      } catch (e) {
        return e;
      }
    }
  }, {
    key: "count",
    value: function count(key) {
      try {
        var data = localStorage.getItem(key);

        if (data === null) {
          return 0;
        }

        return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(JSON.parse(data).length);
      } catch (e) {
        return e;
      }
    }
    /**
     * @method remove
     * @param keyOrIndex {String|Number} Item key or index (which will be converted to key anyway)
     * @return {Boolean} True if the key was found before deletion, false if not
     */

  }, {
    key: "remove",
    value: function remove(keyOrIndex) {
      var result = false;
      var key = typeof keyOrIndex === 'number' ? this.key(keyOrIndex) : keyOrIndex;
      var data = localStorage;

      if (data === null) {
        return 'KEY_NOT_EXISTS';
      }

      if (key in localStorage) {
        result = true;
        localStorage.removeItem(key);
      }

      return result;
    }
    /**
     * 
     * @param {*} keyOrIndex 
     * @param {*} key 
     */

  }, {
    key: "removeByIdInArray",
    value: function removeByIdInArray(keyOrIndex, key) {
      var data = localStorage.getItem(key);

      if (data === null) {
        return 'KEY_NOT_EXISTS';
      }

      var storageProducts = JSON.parse(localStorage.getItem(key));
      var products = storageProducts.filter(function (product) {
        return product.productId !== keyOrIndex;
      });
      localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
      return products;
    }
    /**
     * @method clear
     * @return {Number} The total of items removed
     */

  }, {
    key: "clear",
    value: function clear() {
      var len = this._ls.length;

      this._ls.clear();

      return len;
    }
  }]);

  return LocalStorageHandler;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LocalStorageHandler, "_ls", null);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LocalStorageHandler, "_key", null);



/***/ }),

/***/ "Sndy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XQ11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Sndy");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("QEhy");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("GLYF");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ubCc");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("W+03");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("4ZJ9");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\SpinnerDelivery.js";














var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      textAlign: 'center',
      border: '0px solid lime'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});

var SpinnerDelivery = function SpinnerDelivery(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default.a, {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }),
    label: props.label,
    className: classes.chip,
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SpinnerDelivery);

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footers; });
var Footers = [{
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


/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jle/":
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lNDQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonGroup");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lYgS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var os = __webpack_require__("jle/");

var index = "server";
var host = os.hostname();
var apiConfig = [{
  baseURL: "http://127.0.0.1:3333"
}, {
  baseURL: "https://api.rsvtelecom.com.br"
}];

if (host === "cryptopc" || host === "saude") {
  index = "local";
}

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[1]);
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "urJs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IfcR");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SOXQ");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\components\\TotalPedidos.js";






var TotalPedidos = function TotalPedidos(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!1),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      carregado = _useState4[0],
      setCarregado = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setCarregado(true);
    setCountPedidosLocal(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].count('products'));
  });

  if (countPedidosLocal <= 0) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {
      badgeContent: 0,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  } else {
    if (!carregado) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default.a, {
        disableShrink: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a, {
      badgeContent: countPedidosLocal,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (TotalPedidos);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });