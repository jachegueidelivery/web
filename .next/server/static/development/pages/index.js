module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/SpinnerTeste/TelaInicial/index.js":
/*!******************************************************!*\
  !*** ./components/SpinnerTeste/TelaInicial/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostrarEmpresas; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "@material-ui/lab/Skeleton");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "E:\\delivery\\components\\SpinnerTeste\\TelaInicial\\index.js";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: "center"
    }),
    cardMedia: {
      backgroundColor: "transparent",
      margin: 15,
      height: 200
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  };
});
/**
 * Mostra os ícones das empresas
 */

function MostrarEmpresas(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    hits: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      empresas = _useState2[0],
      setEmpresas = _useState2[1];

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.data.map(function (empresa, _key) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      item: true,
      key: _key,
      xs: 12,
      sm: 6,
      md: 4,
      className: classes._grid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.cardMedia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      height: "100%",
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      height: "80%",
      width: "100%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      height: "70%",
      width: "90%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      height: "60%",
      width: "60%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))));
  })));
}

/***/ }),

/***/ "./components/SpinnerTeste/index.js":
/*!******************************************!*\
  !*** ./components/SpinnerTeste/index.js ***!
  \******************************************/
/*! exports provided: Produtos, TelaInicial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Produtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Produtos */ "./components/SpinnerTeste/Produtos/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Produtos", function() { return _Produtos__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TelaInicial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TelaInicial */ "./components/SpinnerTeste/TelaInicial/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelaInicial", function() { return _TelaInicial__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_LazyLoad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/LazyLoad */ "./components/LazyLoad/index.js");
/* harmony import */ var _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/LocalStorageHandler */ "./components/LocalStorageHandler/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_SpinnerTeste__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/SpinnerTeste */ "./components/SpinnerTeste/index.js");
/* harmony import */ var _components_TotalPedidos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/TotalPedidos */ "./components/TotalPedidos/index.js");


var _jsxFileName = "E:\\delivery\\pages\\index.js";




















var Footer = react_loadable__WEBPACK_IMPORTED_MODULE_16___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./components/Footer/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null);
  }
});
var NavigationBottom = react_loadable__WEBPACK_IMPORTED_MODULE_16___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/NavigationBottom */ "./components/NavigationBottom/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null);
  }
});
var MostrarEmpresas = react_loadable__WEBPACK_IMPORTED_MODULE_16___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/MostrarEmpresas */ "./components/MostrarEmpresas/index.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_17__["default"], {
      height: "30px",
      margintop: "5px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }));
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
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
    SiteSearchPanel__Background: {
      background: "-webkit-gradient(linear, left top, left bottom, color-stop(2%, rgba(236, 233, 233, 0.7)), color-stop(30%, rgba(255,255,255,0)))",
      position: "absolute",
      top: "0",
      bottom: "60%",
      left: "0",
      right: "0",
      width: "100%"
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
      padding: theme.spacing(8, 0, 0)
    },
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
      margin: "0px auto",
      left: 0,
      right: 0,
      width: "100%",
      "& p": {
        border: "0px solid red",
        "& span": {}
      },
      "& div": {
        border: "0px solid lime"
      }
    }
  };
});
/*
 */

var Main = function Main(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      mobileMoreAnchorEl = _useState4[0],
      setMobileMoreAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      countPedidosLocal = _useState6[0],
      setCountPedidosLocal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(!1),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      isEmpresasLoaded = _useState8[0],
      setIsEmpresasLoaded = _useState8[1];

  var classes = useStyles();
  var isMenuOpen = Boolean(anchorEl);

  function onAtualizarCount() {
    setCountPedidosLocal(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_18__["default"].count("products"));
  }

  function handleProfileMenuOpen(event) {
    onAtualizarCount();

    if (_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_18__["default"].count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    onAtualizarCount();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function onChangeToGrid() {
    alert("Implementatio by Grid");
  }

  function onChangeToList() {
    alert("Implementatio by List");
  }

  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: classes.SiteSearchPanel__Background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    color: "primary",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Delivery"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_TotalPedidos__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    component: "h4",
    variant: "h4",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "Alguma mensagem impactante aqui"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.textFieldInput,
    placeholder: "Pesquisar",
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, !isEmpresasLoaded && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_SpinnerTeste__WEBPACK_IMPORTED_MODULE_20__["TelaInicial"], {
    data: [1, 2, 3, 4, 5, 6],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(MostrarEmpresas, {
    onLoadedComplete: function onLoadedComplete(data) {
      return setIsEmpresasLoaded(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.footerNavigationBottom,
    maxWidth: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_19__["default"], {
    anchorEl: anchorEl,
    handleMenuClose: handleMenuClose,
    abrir: isMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(NavigationBottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\delivery\pages\index.js */"./pages/index.js");


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

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

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

/***/ "@material-ui/icons/RemoveCircleOutlineRounded":
/*!****************************************************************!*\
  !*** external "@material-ui/icons/RemoveCircleOutlineRounded" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircleOutlineRounded");

/***/ }),

/***/ "@material-ui/icons/ShoppingCartSharp":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/ShoppingCartSharp" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCartSharp");

/***/ }),

/***/ "@material-ui/lab/Skeleton":
/*!********************************************!*\
  !*** external "@material-ui/lab/Skeleton" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

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
//# sourceMappingURL=index.js.map