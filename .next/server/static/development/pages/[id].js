module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\[id].js": 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AlertNotHasProducts/index.js":
/*!*************************************************!*\
  !*** ./components/AlertNotHasProducts/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TypographyTheme; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\delivery\\components\\AlertNotHasProducts\\index.js";


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.typography.button, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: "center",
      boxShadow: "0px 0px 15px 0px rgba(10,10,10,0.1)"
    })
  };
});
function TypographyTheme(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label));
}

/***/ }),

/***/ "./components/ApiRest/index.js":
/*!*************************************!*\
  !*** ./components/ApiRest/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiConfig = [{
  baseURL: "http://localhost:3300"
}, {
  baseURL: "http://192.168.129.171:3300"
}, {
  baseURL: "http://192.168.11.32:3300"
}, {
  baseURL: "https://api.rsvtelecom.com.br"
}];
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[3]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./components/Carrinho/index.js":
/*!**************************************!*\
  !*** ./components/Carrinho/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Zoom */ "@material-ui/core/Zoom");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_DeleteSharp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/DeleteSharp */ "@material-ui/icons/DeleteSharp");
/* harmony import */ var _material_ui_icons_DeleteSharp__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteSharp__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutlineRounded */ "@material-ui/icons/RemoveCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ShoppingCartSharp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartSharp */ "@material-ui/icons/ShoppingCartSharp");
/* harmony import */ var _material_ui_icons_ShoppingCartSharp__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartSharp__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _LazyLoad__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../LazyLoad */ "./components/LazyLoad/index.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../LocalStorageHandler */ "./components/LocalStorageHandler/index.js");
/* harmony import */ var _material_ui_icons_CloseSharp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/CloseSharp */ "@material-ui/icons/CloseSharp");
/* harmony import */ var _material_ui_icons_CloseSharp__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloseSharp__WEBPACK_IMPORTED_MODULE_24__);




var _jsxFileName = "E:\\delivery\\components\\Carrinho\\index.js";





















var DialogFormConfirm = react_loadable__WEBPACK_IMPORTED_MODULE_21___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../DialogFormConfirm */ "./components/DialogFormConfirm/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_LazyLoad__WEBPACK_IMPORTED_MODULE_22__["default"], {
      height: "30px",
      margintop: "5px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  var _cardItemMenu;

  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    menuButton: {
      marginRight: theme.spacing(0)
    },
    title: {
      flexGrow: 1,
      border: '0px solid lime'
    },
    quantidade: {
      textAlign: 'right',
      width: 40,
      paddingTop: 5,
      paddingBottom: 5,
      display: 'inline',
      border: '0',
      borderBottom: '1px solid #ccc',
      position: 'relative',
      top: -4
    },
    cardAvatar: {
      border: '1px solid red'
    },
    cardContent: {
      border: '1px solid lime'
    },
    cardActions: {
      border: '1px solid blue'
    },
    valorUnitario: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border: '0px solid red',
      color: 'rgb(244,67,54)'
    }, theme.breakpoints.up('xs'), {
      fontWeight: 'bold'
    }),
    mdlCard: {
      flexDirection: 'column',
      fontSize: '16px',
      fontWeight: 400,
      overflow: 'hidden',
      zIndex: 1,
      position: 'relative',
      background: '#fff',
      borderRadius: '2px',
      boxSizing: 'border-box'
    },
    cardItemMenu: (_cardItemMenu = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up('xs'), {
      width: '100%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up('sm'), {
      width: 450
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up('md'), {
      width: 450
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up('lg'), {
      width: 450
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up('xl'), {
      width: 450
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, "margin", '0px auto'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, "minHeight", '10px'), _cardItemMenu),
    info_item: {
      "float": 'none'
    },
    nomeItemMenu: {
      fontFamily: 'Lato',
      color: '#444',
      fontSize: '18px',
      margin: '0',
      padding: '0',
      marginTop: '0px',
      verticalAlign: 'baseline',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      lineHeight: '35px'
    },
    descItemMenu: {
      fontFamily: 'Lato',
      color: '#444',
      fontSize: '12px',
      margin: 0,
      padding: 0,
      marginTop: '0px',
      verticalAlign: 'baseline',
      lineHeight: '14px',
      textTransform: 'capitalize'
    },
    img_prod: {
      width: '80px',
      height: '80px',
      "float": 'left',
      margin: '10px',
      borderRadius: '5px',
      maxWidth: '100%'
    },
    mdlCard__actions: {
      fontSize: '12px',
      lineHeight: 'normal',
      width: '100%',
      backgroundColor: 'transparent',
      padding: '0px',
      boxSizing: 'border-box',
      borderTop: '0px solid rgba(0,0,0,.1)',
      borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    myButton: {
      color: 'rgb(244,67,54)',
      border: 'none',
      borderRadius: '2px',
      display: 'block',
      width: 40,
      minWidth: '30px',
      padding: 0,
      margin: 0
    }
  };
});

function ScrollTop(props) {
  var children = props.children,
      window = props.window;
  var classes = useStyles();
  var trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_13___default()({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_14___default.a, {
    "in": trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, children));
}

ScrollTop.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.element.isRequired,
  window: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.func
};

var DataTRS = function DataTRS(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      observacao = _useState6[0],
      setObservacao = _useState6[1];

  var produtos = [];

  var remover = function remover(id) {
    _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_23__["default"].removeByIdInArray(id, 'products');
  };

  function addProduct(produto_id, qtd) {
    if (localStorage.getItem('products')) {
      produtos = JSON.parse(localStorage.getItem('products'));
    } //Pega o index


    var objIndex = produtos.findIndex(function (pedido) {
      return pedido.productId === produto_id;
    });
    produtos[objIndex].quantidade = qtd;
    produtos[objIndex].observacao = '';
    produtos[objIndex].descricao = '';
    localStorage.setItem('products', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(produtos));
  }

  function add(produto_id, qtd) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) + 1;
    setQuantidade(quant);
    var d = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(qtd) + 1;
    addProduct(produto_id, d);
  }

  function subtract(produto_id, qtd) {
    var qt = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(qtd) - 1;
    setQuantidade(qt);
    var d = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(qtd) - 1;
    addProduct(produto_id, d);
  }

  function onChangeQuantidade(produto_id, ev) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ev.target.value);

    console.log(quant);
    setQuantidade(quant);
    addProduct(produto_id, quant);
    setValorTotal((props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quant)).toFixed(2));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_20__["useEffect"])(function () {
    if (localStorage.getItem('products')) {
      produtos = JSON.parse(localStorage.getItem('products')); //Pega o index

      var objIndex = produtos.findIndex(function (pedido) {
        return pedido.productId === props.product_id;
      });
      setQuantidade(produtos[objIndex].quantidade);
    }
    /*
    		if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
    			setValorTotal(0);
    			setQuantidade(0);
    		}*/

  }, [quantidade]);
  return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: classes.cardItemMenu,
    id: props.product_id,
    title: props.product_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: classes.mdlCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: classes.info_item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    alt: '',
    src: props.product_img,
    className: classes.img_prod,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: classes.nomeItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, props.product_name, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "end",
    className: classes.menuButton,
    color: "primary",
    size: "small",
    onClick: function onClick() {
      return remover(props.product_id);
    },
    title: "Clique para remover ".concat(props.product_name, " do carrinho."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_icons_DeleteSharp__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    className: classes.descItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    className: classes.mdlCard__actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.valorUnitario,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "R$ ", props.product_preco != undefined ? props.product_preco.toFixed(2) : null)), props.quant > 0 && react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_20___default.a.Fragment, null, "Subtotal: R$ ", props.subTotal.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    xs: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: function onClick() {
      subtract(props.product_id, props.quant);
    },
    disabled: props.quant < 1,
    className: classes.myButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(props.product_id, ev);
    },
    value: quantidade,
    className: classes.quantidade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.myButton,
    onClick: function onClick() {
      add(props.product_id, props.quant);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }))))));
};

var Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])({}),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_20__["useState"])(!1),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      openDialog = _useState10[0],
      setOpenDialog = _useState10[1];

  var _valorTotal = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_20__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem('products')));
  });
  return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_20___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "dense",
    style: {
      padding: 0,
      paddingLeft: 15,
      paddingRight: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_icons_ShoppingCartSharp__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "MEU CARRINHO")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "end",
    color: "inherit",
    "aria-label": "menu",
    className: classes.menuButton,
    onClick: function onClick() {
      props.fecharMenu(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_icons_CloseSharp__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_20___default.a.Fragment, null, data.map(function (product, index) {
    var productName = product.nome;
    var produto_id = product.productId;
    var prodPicture = product.imagem;
    var amount = product.quantidade;
    var price = product.preco;
    var subTotal = price * amount;
    _valorTotal += subTotal;
    return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(DataTRS, {
      key: index,
      product_id: produto_id,
      product_name: productName,
      product_img: prodPicture,
      product_preco: price,
      subTotal: subTotal,
      quant: amount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "dense",
    style: {
      padding: 0,
      paddingLeft: 15,
      paddingRight: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 7,
    sm: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "VALOR TOTAL: R$ ", _valorTotal.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 5,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    align: "right",
    onClick: function onClick(ev) {
      return setOpenDialog(true);
    },
    color: "primary",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, "CONCLUIR PEDIDO")))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(DialogFormConfirm, {
    open: openDialog,
    onClose: function onClose() {
      setOpenDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ }),

/***/ "./components/Categorias/index.js":
/*!****************************************!*\
  !*** ./components/Categorias/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ApiRest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ApiRest */ "./components/ApiRest/index.js");




var _jsxFileName = "E:\\delivery\\components\\Categorias\\index.js";










/**
 * Componente categoria
 */

function Categorias(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])({
    data: null,
    isLoaded: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      categorias = _useState2[0],
      setCategorias = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    var id = router.query.id;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ApiRest__WEBPACK_IMPORTED_MODULE_13__["default"].get("/categories/company/" + id);

              case 2:
                result = _context.sent;
                setCategorias({
                  data: result.data,
                  isLoaded: true
                });

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
  /*categorias*/

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      border: "0px solid red",
      padding: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
    primary: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "CATEGORIAS"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    light: true,
    variant: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), !categorias.isLoaded && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: index,
      style: {
        border: "0px solid red",
        padding: "0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
      primary: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        width: "80%",
        height: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
      width: "20%",
      height: 10,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })))));
  })), categorias.isLoaded && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, categorias.data.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: "Clique para pesquisar produtos da categoria: ".concat(category.category_name),
      onClick: function onClick() {
        props.loadProductsByCategory(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(category));
      },
      style: {
        border: "0px solid red",
        padding: "0",
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
      secondary: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, category.category_name.toUpperCase())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, category.amount_products))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
      light: true,
      variant: "middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Categorias);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\delivery\\components\\Footer\\index.js";







var Footers = [{
  title: "Compania",
  description: [{
    label: "Quem somos",
    url: "#"
  }, {
    label: "História",
    url: "#"
  }, {
    label: "Fale conosco",
    url: "#"
  }]
}, {
  title: "Características",
  description: [{
    label: "Cool stuff",
    url: "#"
  }, {
    label: "Random feature",
    url: "#"
  }, {
    label: "Team feature",
    url: "#"
  }, {
    label: "Developer stuff",
    url: "#"
  }, {
    label: "Another one",
    url: "#"
  }]
}, {
  title: "Faça Parte",
  description: [{
    label: "Cadastrar Empresa",
    url: "#"
  }, {
    label: "Resource name",
    url: "#"
  }, {
    label: "Another resource",
    url: "#"
  }, {
    label: "Final resource",
    url: "#"
  }]
}, {
  title: "Siga-nos",
  description: [{
    label: "Facebook",
    url: "#"
  }, {
    label: "Youtube",
    url: "#"
  }, {
    label: "Twitter",
    url: "#"
  }, {
    label: "Instagram",
    url: "#"
  }, {
    label: "Linkedin",
    url: "#"
  }]
}, {
  title: "Aplicativos",
  description: [{
    label: "Android",
    url: "#"
  }, {
    label: "iPhone iOS",
    url: "#"
  }]
}];

function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\xA9Copyright 2019 - Empresa -", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "Todos os direitos reservados");
}

var useStylesMy = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    footerEnd: {
      border: "0px solid lime !important",
      padding: 0,
      margin: 0
    },
    footer2: {
      padding: 0
    }
  };
});
/**
 * Footer (Rodapé)
 */

function Footer(props) {
  var _footer = props.footer == undefined ? Footers : props.footer;

  var classes = useStylesMy();
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0___default.a, {
    maxWidth: "md",
    component: "footer",
    p: 0,
    className: classes.footer2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 0,
    direction: "row",
    justify: "space-between",
    alignItems: "flex-start",
    p: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, _footer.map(function (footer, key) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      lg: 2,
      md: 2,
      sm: 2,
      key: key,
      style: {
        padding: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, footer.description.map(function (item, subKey) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        key: subKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, item.label));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0___default.a, {
    maxWidth: "md",
    component: "footer",
    p: 0,
    className: classes.footer2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 0,
    p: 0,
    className: classes.footer2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    lg: 8,
    sm: 8,
    md: 8,
    className: classes.footerEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    lg: 2,
    sm: 2,
    md: 2,
    className: classes.footerEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 6,
    lg: 2,
    sm: 2,
    md: 2,
    className: classes.footerEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/LazyLoad/index.js":
/*!**************************************!*\
  !*** ./components/LazyLoad/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\delivery\\components\\LazyLoad\\index.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgba(0, 0, 0, 0.1);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  -webkit-animation-duration: 2s !important;\n  animation-duration: 2s !important;\n  -webkit-animation-fill-mode: forwards !important;\n  animation-fill-mode: forwards !important;\n  -webkit-animation-iteration-count: infinite !important;\n  animation-iteration-count: infinite !important;\n  -webkit-animation-timing-function: linear !important;\n  animation-timing-function: linear !important;\n  -webkit-animation-name: ", " !important;\n  animation-name: ", " !important;\n  background: #3e3e3e;\n  background: linear-gradient(\n    to right,\n    #f3f3f3 2%,\n    #e9e8e8 18%,\n    #f3f3f3 33%\n  ) !important;\n  border-radius: 0px;\n  min-height: ", "\n  margin-top: ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["0% {opacity: 1;}50% {opacity: 0.4;}100% {opacity: 1;}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var Rotate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), rotate, rotate, function (props) {
  return props.height || "10px";
}, function (props) {
  return props.margintop || "5px";
});
var LasyLoading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());

function LazyLoad(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LasyLoading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rotate, {
    height: props.height,
    margintop: props.margintop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LazyLoad);

/***/ }),

/***/ "./components/LocalStorageHandler/index.js":
/*!*************************************************!*\
  !*** ./components/LocalStorageHandler/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorageHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");






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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(LocalStorageHandler, "_ls", null);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(LocalStorageHandler, "_key", null);



/***/ }),

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carrinho__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Carrinho */ "./components/Carrinho/index.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LocalStorageHandler */ "./components/LocalStorageHandler/index.js");

var _jsxFileName = "E:\\delivery\\components\\Menu\\index.js";





var renderMenu = function renderMenu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  function onAtualizarCount() {
    setCountPedidosLocal(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].count("products"));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onAtualizarCount();
  }, []);
  var menuId = "primary-search-account-menu-dois";
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Carrinho__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: props.data,
    count: countPedidosLocal,
    fecharMenu: function fecharMenu(value) {
      props.handleMenuClose(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (renderMenu);

/***/ }),

/***/ "./components/Produtos/index.js":
/*!**************************************!*\
  !*** ./components/Produtos/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Produtos; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutlineRounded */ "@material-ui/icons/RemoveCircleOutlineRounded");
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LocalStorageHandler */ "./components/LocalStorageHandler/index.js");




var _jsxFileName = "E:\\delivery\\components\\Produtos\\index.js";







 //values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _cardItemMenu;

  return {
    quantidade: {
      textAlign: "right",
      width: 40,
      paddingTop: 5,
      paddingBottom: 5,
      display: "inline",
      border: "0",
      borderBottom: "1px solid #ccc",
      position: "relative",
      top: -4
    },
    valorUnitario: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      border: "0px solid red",
      color: "rgb(244,67,54)"
    }, theme.breakpoints.up("xs"), {
      fontWeight: "bold"
    }),
    mdlCard: {
      flexDirection: "column",
      fontSize: "16px",
      fontWeight: 400,
      overflow: "hidden",
      zIndex: 1,
      position: "relative",
      background: "#fff",
      borderRadius: "2px",
      boxSizing: "border-box",
      border: "0px solid red"
    },
    cardItemMenu: (_cardItemMenu = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up("sm"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up("md"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, theme.breakpoints.up("lg"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, "margin", "10px auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, "minHeight", "10px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_cardItemMenu, "border", "0px solid red"), _cardItemMenu),
    info_item: {
      "float": "none"
    },
    nomeItemMenu: {
      fontFamily: "Lato",
      color: "#444",
      fontSize: "18px",
      margin: "0",
      padding: "0",
      marginTop: "0px",
      verticalAlign: "baseline",
      textTransform: "capitalize",
      fontWeight: "bold",
      lineHeight: "35px"
    },
    descItemMenu: {
      fontFamily: "Lato",
      color: "#444",
      fontSize: "12px",
      margin: 0,
      padding: 0,
      marginTop: "0px",
      verticalAlign: "baseline",
      lineHeight: "14px",
      textTransform: "capitalize"
    },
    img_prod: {
      width: "80px",
      height: "80px",
      "float": "left",
      margin: "10px",
      borderRadius: "5px",
      maxWidth: "100%"
    },
    mdlCard__actions: {
      fontSize: "12px",
      lineHeight: "normal",
      width: "100%",
      backgroundColor: "transparent",
      padding: "8px",
      boxSizing: "border-box",
      borderTop: "1px solid rgba(0,0,0,.1)"
    },
    myButton: {
      color: "rgb(244,67,54)",
      border: "none",
      display: "block",
      width: 35,
      minWidth: "30px",
      padding: 0
    }
  };
});
/**
 * Component: Produtos
 */

function Produtos(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      observacao = _useState6[0],
      setObservacao = _useState6[1];

  function addProduct() {
    var products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    } //Desestruturação Javascript


    var id = props.id,
        nome = props.nome,
        imagem = props.imagem,
        precoUnitario = props.precoUnitario,
        descricao = props.descricao; //Pega o index

    var objIndex = products.findIndex(function (pedido) {
      return pedido.productId === id;
    }); //Caso não exista

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
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
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
    addProduct();
    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ev.target.value);

    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quant)).toFixed(2));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }

    props.callbackParent(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_11__["default"].count("products"));
  }, [quantidade]);
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: classes.cardItemMenu,
    id: props.id,
    title: props.nome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: classes.mdlCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: classes.info_item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    alt: "Remy Sharp",
    src: props.imagem,
    className: classes.img_prod,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: classes.nomeItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, props.nome), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: classes.descItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, props.descricao.length == 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, props.nome) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, props.descricao))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    className: classes.mdlCard__actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.valorUnitario,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "R$", " ", props.precoUnitario != undefined ? props.precoUnitario.toFixed(2) : null)), quantidade > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, "Subtotal: R$ ", valorTotal)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    item: true,
    xs: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClick: subtract,
    disabled: quantidade < 1,
    className: classes.myButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    value: quantidade,
    className: classes.quantidade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.myButton,
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./components/SpinnerTeste/Produtos/index.js":
/*!***************************************************!*\
  !*** ./components/SpinnerTeste/Produtos/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\delivery\\components\\SpinnerTeste\\Produtos\\index.js";



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    flexContainer: {
      display: "flex",
      backgroundColor: "white",
      border: "0px solid red",
      padding: 0,
      margin: 0,
      marginBottom: 5
    },
    div123: {
      backgroundColor: "transparent",
      margin: 0,
      textAlign: "left",
      padding: 0,
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    p1: {
      padding: 0,
      margin: 0,
      display: "block",
      width: "100%"
    }
  };
});
function App() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.flexContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.div123,
    style: {
      flexGrow: "12"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.p1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.flexContainer,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.div123,
      style: {
        flexBasis: "1"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: 80,
      height: 80,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.div123,
      style: {
        flexGrow: "8"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.p1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 10,
      width: "80%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.p1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      height: 10,
      width: "60%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))));
  }));
}

/***/ }),

/***/ "./components/TotalPedidos/index.js":
/*!******************************************!*\
  !*** ./components/TotalPedidos/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LocalStorageHandler */ "./components/LocalStorageHandler/index.js");

var _jsxFileName = "E:\\delivery\\components\\TotalPedidos\\index.js";





var TotalPedidos = function TotalPedidos(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setCountPedidosLocal(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].count("products"));
  });

  if (props.countProdutos) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default.a, {
      color: "secondary",
      badgeContent: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, props.countProdutos),
      showZero: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  } else {
    //Tela Inicial
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default.a, {
      badgeContent: countPedidosLocal,
      showZero: true,
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TotalPedidos);

/***/ }),

/***/ "./components/useReplaceString/index.js":
/*!**********************************************!*\
  !*** ./components/useReplaceString/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function useReplaceString(_string, quantidade) {
  if (_string.toString().length > 0) {
    _string = _string.split(/\s+/gmi);
    _string = _string.filter(function (str) {
      return /(\S)/gmi.test(str);
    });
    _string = _string.filter(function (item) {
      if (item.toLowerCase() != 'das' && item.toLowerCase() != "e" && item.toLowerCase() != "dos" && item.toLowerCase() != "da" && item.toLowerCase() != "de") {
        return item;
      }
    });

    var _str = _string.map(function (str) {
      return "".concat(str, " ");
    });

    if (quantidade === undefined) {
      return _str;
    }

    var nString = "";

    if (quantidade <= _str.length) {
      for (var k = 0; k < quantidade; k++) {
        nString += _str[k];
      }

      return nString;
    }

    return _str;
  }

  return _string;
};

/***/ }),

/***/ "./components/useWidth/index.js":
/*!**************************************!*\
  !*** ./components/useWidth/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWidth; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

function useWidth() {
  //const theme = useTheme();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])();

  var keys = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(theme.breakpoints.keys).reverse();

  return keys.reduce(function (output, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
    return !output && matches ? key : output;
  }, null) || 'xs';
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Phone */ "@material-ui/icons/Phone");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/Stars */ "@material-ui/icons/Stars");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _components_AlertNotHasProducts__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../components/AlertNotHasProducts */ "./components/AlertNotHasProducts/index.js");
/* harmony import */ var _components_ApiRest__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../components/ApiRest */ "./components/ApiRest/index.js");
/* harmony import */ var _components_Categorias__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../components/Categorias */ "./components/Categorias/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../components/LocalStorageHandler */ "./components/LocalStorageHandler/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Produtos__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../components/Produtos */ "./components/Produtos/index.js");
/* harmony import */ var _components_SpinnerTeste_Produtos__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../components/SpinnerTeste/Produtos */ "./components/SpinnerTeste/Produtos/index.js");
/* harmony import */ var _components_TotalPedidos__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../components/TotalPedidos */ "./components/TotalPedidos/index.js");
/* harmony import */ var _components_useReplaceString__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../components/useReplaceString */ "./components/useReplaceString/index.js");
/* harmony import */ var _components_useReplaceString__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_components_useReplaceString__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _components_useWidth__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../components/useWidth */ "./components/useWidth/index.js");








var _jsxFileName = "E:\\delivery\\pages\\[id].js";











































var drawerWidth = 240;
var NavigationBottom = react_loadable__WEBPACK_IMPORTED_MODULE_39___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/NavigationBottom */ "./components/NavigationBottom/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default.a, {
      height: "80%",
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }));
  }
});
var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#880e4f"
    },
    action: {
      main: "#fff"
    }
  }
});
var useStylesDrawer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 9999
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: 9999
    },
    drawerHeader: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar, {
      justifyContent: "flex-end"
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
});

function CategoriasDetalhes(props) {
  return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    style: {
      maxHeight: "400px",
      overflow: "auto",
      border: "0px solid red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_Categorias__WEBPACK_IMPORTED_MODULE_42__["default"], {
    loadProductsByCategory: function loadProductsByCategory(category) {
      return props.loadProductsByCategory(category);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, [{
    itemName: "Promoções",
    icone: react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_34___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })
  }, {
    itemName: "Meu Pedido",
    icone: react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_33___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })
  }, {
    itemName: "Minha Conta",
    icone: react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })
  }, {
    itemName: "Pedir Por Telefone",
    icone: react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_32___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })
  }].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21___default.a, {
      button: true,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, item.icone), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_23___default.a, {
      primary: item.itemName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }));
  }))));
}

function DrawerCategory(props) {
  var classes = useStylesDrawer();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();

  function handleDrawerClose() {
    props.handleDrawerClose(false);
  }

  return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.drawer,
    style: {
      opacity: props.opacity == undefined ? 1 : _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default()(props.opacity)
    },
    anchor: "left",
    open: props.open,
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("div", {
    className: classes.drawerHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    onClick: handleDrawerClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, theme.direction === "ltr" ? react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(CategoriasDetalhes, {
    loadProductsByCategory: function loadProductsByCategory(category) {
      return props.loadProductsByCategory(category);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }))));
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _rootinput, _panelCategory;

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
      borderBottom: "1px solid ".concat(theme.palette.divider),
      background: "#a40000",
      color: "#fff"
    },
    toolbar: {
      flexWrap: "wrap"
    },
    toolbarTitle: {
      flexGrow: 1,
      color: "#ffffff"
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      border: "0px solid blue"
    },
    rootinput: (_rootinput = {
      borderRadius: 30,
      display: "flex",
      alignItems: "center"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, theme.breakpoints.up("sm"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, theme.breakpoints.up("md"), {}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, theme.breakpoints.up("lg"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, "margin", "0px auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, "paddingLeft", 10), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, "paddingRight", 10), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, "paddingTop", 5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_rootinput, "paddingBottom", 5), _rootinput),
    panelCategory: (_panelCategory = {
      borderRadius: 10,
      alignItems: "center"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, theme.breakpoints.up("xs"), {
      width: "96%",
      border: "0px solid lime"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, theme.breakpoints.up("sm"), {
      width: "96%",
      border: "0px solid red"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, theme.breakpoints.up("md"), {
      width: "96%",
      border: "0px solid green"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, theme.breakpoints.up("lg"), {
      width: "100%",
      border: "0px solid yellow"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, "margin", "0px auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, "paddingLeft", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, "paddingRight", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, "paddingTop", 10), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_panelCategory, "paddingBottom", 0), _panelCategory),
    textFieldInput: {
      borderRadius: 30,
      backgroundColor: theme.palette.common.white,
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    },
    iconButton: {
      padding: 10
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    },
    footerNavigationBottom: {
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(0),
      background: "white",
      position: "absolute",
      display: "block",
      border: "0px solid gold",
      "& p": {
        border: "0px solid red",
        "& span": {}
      },
      "& div": {
        border: "0px solid lime"
      }
    },
    categorias: {
      backgroundColor: "white"
    }
  };
});

var Index = function Index() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_37__["useRouter"])();
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_38___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_38___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      produtosAsObject = _React$useState4[0],
      setProdutosAsObject = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_38___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      search = _React$useState6[0],
      setSearch = _React$useState6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(!1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      mobileMoreAnchorEl = _useState8[0],
      setMobileMoreAnchorEl = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(true),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      iniciar = _useState10[0],
      setIniciar = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])({
    config: []
  }),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
      empresa = _useState12[0],
      setEmpresa = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(""),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
      nome_fantasia = _useState14[0],
      setNomeFantasia = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])({
    dados: []
  }),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState15, 2),
      produtos = _useState16[0],
      setProdutos = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(false),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState17, 2),
      isLoaded = _useState18[0],
      setIsLoaded = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(null),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState19, 2),
      empresaId = _useState20[0],
      setEmpresaId = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(!1),
      _useState22 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState21, 2),
      abrirDrawer = _useState22[0],
      setAbrirDrawer = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])({}),
      _useState24 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState23, 2),
      category = _useState24[0],
      setCategory = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])({}),
      _useState26 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState25, 2),
      shopCar = _useState26[0],
      setShopCar = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])([]),
      _useState28 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState27, 2),
      fetchProdutos = _useState28[0],
      setFetchProdutos = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_38__["useState"])(1),
      _useState30 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState29, 2),
      _opacity = _useState30[0],
      set_Opacity = _useState30[1];

  var screenSize = Object(_components_useWidth__WEBPACK_IMPORTED_MODULE_50__["default"])();
  var isMenuOpen = Boolean(anchorEl);
  /*
  function goBack() {
    window.history.back();
  }*/

  Object(react__WEBPACK_IMPORTED_MODULE_38__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();

    if (iniciar == true) {
      setIniciar(false); //setProdutosAsObject(props.shows);
    }
  }, []);
  /*
  BUSCA OS DADOS DA EMPRESA
  */

  Object(react__WEBPACK_IMPORTED_MODULE_38__["useEffect"])(function () {
    var id = router.query.id;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _components_ApiRest__WEBPACK_IMPORTED_MODULE_41__["default"].get("/companies/" + id);

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

  Object(react__WEBPACK_IMPORTED_MODULE_38__["useEffect"])(function () {
    setIsLoaded(false);

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(empresaId !== null)) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return _components_ApiRest__WEBPACK_IMPORTED_MODULE_41__["default"].get("/products/companie/" + empresaId);

              case 3:
                result = _context2.sent;
                setProdutos({
                  data: result.data
                });
                setIsLoaded(true);

              case 6:
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
  Object(react__WEBPACK_IMPORTED_MODULE_38__["useEffect"])(function () {
    if (!empresa.config) {
      if (screenSize === "xs") {
        setNomeFantasia(_components_useReplaceString__WEBPACK_IMPORTED_MODULE_49___default()(empresa["0"].company_fantasy_name, 2));
      } else {
        setNomeFantasia(empresa["0"].company_fantasy_name);
      }

      setEmpresaId(empresa["0"].company_id);
    }
  }, [empresa]);
  /*Para fazer o filtro*/

  Object(react__WEBPACK_IMPORTED_MODULE_38__["useEffect"])(function () {
    if (isLoaded) {
      if (category.length > 0) {
        set_Opacity(0.1);
        setProdutos({
          data: null
        });
        var inCategory = JSON.parse(category);
        var arr = [];
        produtos.data.map(function (product, index) {
          if (product.category_id == inCategory.category_id) {
            product.product_show = true;
            arr.push(product);
          } else {
            product.product_show = false;
            arr.push(product);
          }
        });
        setProdutos({
          data: arr
        });
        set_Opacity(1);
      }
    }
  }, [category]);

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
    setCountPedidosLocal(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__["default"].count("products"));
  }

  function handleProfileMenuOpen(event) {
    setShopCar(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__["default"].getDataByKey("products"));

    if (_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__["default"].count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function confirmarPedido() {
    alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__["default"].getDataByKey("products")));
    _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_44__["default"].remove("products");
  }

  return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(DrawerCategory, {
    open: abrirDrawer,
    handleDrawerClose: function handleDrawerClose(valor) {
      return setAbrirDrawer(valor);
    },
    opacity: _opacity,
    loadProductsByCategory: function loadProductsByCategory(categories) {
      return setCategory(categories);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    position: "fixed",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_25___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16___default.a, {
    only: ["sm", "lg", "md", "xl"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "primary",
    onClick: function onClick() {
      setAbrirDrawer(!0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
    fontSize: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_36__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26___default.a, {
    variant: "h6",
    color: "error",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, isLoaded == false ? react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default.a, {
    variante: "text",
    height: 10,
    width: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_19___default.a, {
    href: "../",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("span", {
    style: {
      color: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, nome_fantasia))))),  false && false, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_TotalPedidos__WEBPACK_IMPORTED_MODULE_48__["default"], {
    countProdutos: countPedidosLocal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
    maxWidth: "md",
    className: classes.cardGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, isLoaded == false && react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16___default.a, {
    only: ["xs", "xl"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default.a, {
    variant: "text",
    width: "90%",
    height: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, [1, 2, 3, 4, 5, 6, 7].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38__["Fragment"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("div", {
      style: {
        marginBottom: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default.a, {
      variant: "text",
      width: "90%",
      height: 10,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_35___default.a, {
      variant: "text",
      width: "70%",
      height: 10,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    })));
  })))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_SpinnerTeste_Produtos__WEBPACK_IMPORTED_MODULE_47__["default"], {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }))))), isLoaded == true && empresaId != null && react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }), produtos.data.hasOwnProperty("erro") && produtos.data ? react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_AlertNotHasProducts__WEBPACK_IMPORTED_MODULE_40__["default"], {
    label: "N\xE3o h\xE1 Produtos para esta empresa.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_16___default.a, {
    only: ["xs"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
    className: classes.categorias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(CategoriasDetalhes, {
    loadProductsByCategory: function loadProductsByCategory(categories) {
      return setCategory(categories);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_27__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_18___default.a, {
    autoFocus: true,
    className: classes.textFieldInput,
    placeholder: "Pesquisar",
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    md: 9,
    lg: 11,
    className: classes.panelCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, category.length > 0 && react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, "CATEGORIA:", " ", JSON.parse(category).category_name), " ", "-", " ", react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, "Quantidade de produtos", " ", JSON.parse(category).amount_products))))))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(produtos.data).map(function (product, index) {
    if (product.product_show == true) {
      return react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_38___default.a.Fragment, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_Produtos__WEBPACK_IMPORTED_MODULE_46__["default"], {
        callbackParent: function callbackParent(valor) {
          return setCountPedidosLocal(valor);
        },
        loadProductsWithCategory: function loadProductsWithCategory(valor) {
          return true;
        },
        produto: product,
        id: product.product_id,
        nome: product.product_name.toUpperCase(),
        imagem: product.product_image,
        precoUnitario: 2.6,
        descricao: product.product_description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }));
    }
  }))))))), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.footerNavigationBottom,
    maxWidth: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_43__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_38___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_45__["default"], {
    data: shopCar,
    anchorEl: anchorEl,
    handleMenuClose: handleMenuClose,
    abrir: isMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(ctx) {
    var configSite;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../db/config.dev.json */ "./db/config.dev.json", 3));

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

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/[id].js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\delivery\pages\[id].js */"./pages/[id].js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

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

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

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

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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

/***/ "@material-ui/core/Zoom":
/*!*****************************************!*\
  !*** external "@material-ui/core/Zoom" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/CloseSharp":
/*!************************************************!*\
  !*** external "@material-ui/icons/CloseSharp" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloseSharp");

/***/ }),

/***/ "@material-ui/icons/DeleteSharp":
/*!*************************************************!*\
  !*** external "@material-ui/icons/DeleteSharp" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteSharp");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Phone":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Phone" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "@material-ui/icons/RemoveCircleOutlineRounded":
/*!****************************************************************!*\
  !*** external "@material-ui/icons/RemoveCircleOutlineRounded" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircleOutlineRounded");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "@material-ui/icons/ShoppingCartSharp":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/ShoppingCartSharp" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCartSharp");

/***/ }),

/***/ "@material-ui/icons/Stars":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Stars" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Stars");

/***/ }),

/***/ "@material-ui/lab/Skeleton":
/*!********************************************!*\
  !*** external "@material-ui/lab/Skeleton" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map