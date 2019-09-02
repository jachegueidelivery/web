module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0,
/******/ 		9: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"1319426c2d4df6105fc2","1":"0b3f3d5306db7b678120","8":"38975501503a44eaded5"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/4k+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/useScrollTrigger"
var useScrollTrigger_ = __webpack_require__("4ac1");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/DeleteSharp"
var DeleteSharp_ = __webpack_require__("oV0y");
var DeleteSharp_default = /*#__PURE__*/__webpack_require__.n(DeleteSharp_);

// EXTERNAL MODULE: external "@material-ui/icons/RemoveCircleOutlineRounded"
var RemoveCircleOutlineRounded_ = __webpack_require__("/nYp");
var RemoveCircleOutlineRounded_default = /*#__PURE__*/__webpack_require__.n(RemoveCircleOutlineRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCartSharp"
var ShoppingCartSharp_ = __webpack_require__("kvAz");
var ShoppingCartSharp_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartSharp_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-loadable"
var external_react_loadable_ = __webpack_require__("BaZy");
var external_react_loadable_default = /*#__PURE__*/__webpack_require__.n(external_react_loadable_);

// EXTERNAL MODULE: ./components/LazyLoad/index.js + 1 modules
var LazyLoad = __webpack_require__("VP1n");

// EXTERNAL MODULE: ./components/LocalStorageHandler/index.js
var LocalStorageHandler = __webpack_require__("1/9o");

// EXTERNAL MODULE: external "@material-ui/icons/CloseSharp"
var CloseSharp_ = __webpack_require__("wdIZ");
var CloseSharp_default = /*#__PURE__*/__webpack_require__.n(CloseSharp_);

// CONCATENATED MODULE: ./components/Carrinho/index.js




var _jsxFileName = "D:\\node\\delivery\\components\\Carrinho\\index.js";





















var DialogFormConfirm = external_react_loadable_default()({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "/CZV"));
  },
  loading: function loading() {
    return external_react_default.a.createElement(LazyLoad["a" /* default */], {
      height: "30px",
      margintop: "5px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }
});
var useStyles = Object(styles_["makeStyles"])(function (theme) {
  var _cardItemMenu;

  return {
    root: {
      position: "fixed",
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
    cardAvatar: {
      border: "1px solid red"
    },
    cardContent: {
      border: "1px solid lime"
    },
    cardActions: {
      border: "1px solid blue"
    },
    valorUnitario: Object(defineProperty["a" /* default */])({
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
      boxSizing: "border-box"
    },
    cardItemMenu: (_cardItemMenu = {}, Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("sm"), {
      width: 450
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("md"), {
      width: 450
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("lg"), {
      width: 450
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("xl"), {
      width: 450
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, "margin", "0px auto"), Object(defineProperty["a" /* default */])(_cardItemMenu, "minHeight", "10px"), _cardItemMenu),
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
      padding: "0px",
      boxSizing: "border-box",
      borderTop: "0px solid rgba(0,0,0,.1)",
      borderBottom: "1px solid rgba(0,0,0,.1)"
    },
    myButton: {
      color: "rgb(244,67,54)",
      border: "none",
      borderRadius: "2px",
      display: "block",
      width: 40,
      minWidth: "30px",
      padding: 0,
      margin: 0
    }
  };
});

function ScrollTop(props) {
  var children = props.children,
      window = props.window;
  var classes = useStyles(); // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  var trigger = useScrollTrigger_default()({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return external_react_default.a.createElement(Zoom_default.a, {
    "in": trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, children));
}

ScrollTop.propTypes = {
  children: external_prop_types_default.a.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: external_prop_types_default.a.func
};

var Carrinho_Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      quantidade = _useState4[0],
      setQuantidade = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(0),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      valorTotal = _useState6[0],
      setValorTotal = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(""),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      observacao = _useState8[0],
      setObservacao = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(!1),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      openDialog = _useState10[0],
      setOpenDialog = _useState10[1];

  var produtos = [];
  Object(external_react_["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);

  var remover = function remover(id) {
    LocalStorageHandler["a" /* default */].removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  function addProduct(produto_id, qtd) {
    if (localStorage.getItem("products")) {
      produtos = JSON.parse(localStorage.getItem("products"));
    } //Pega o index


    var objIndex = produtos.findIndex(function (pedido) {
      return pedido.productId === produto_id;
    }); //products[objIndex].productId = produto_id;

    produtos[objIndex].quantidade = qtd;
    produtos[objIndex].observacao = "";
    produtos[objIndex].descricao = "";
    localStorage.setItem("products", stringify_default()(produtos));
  }

  function add(produto_id, qtd) {
    var quant = parse_int_default()(quantidade) + 1;
    setQuantidade(quant);
    var d = parse_int_default()(qtd) + 1;
    addProduct(produto_id, d);
  }

  function subtract(produto_id, qtd) {
    var qt = parse_int_default()(qtd) - 1;
    setQuantidade(qt);
    addProduct(produto_id, qt);
  }

  function onChangeQuantidade(ev) {
    var quant = parse_int_default()(ev.target.value);

    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * parse_int_default()(quant)).toFixed(2));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  Object(external_react_["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(parse_int_default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    } // props.callbackParent(LocalStorageHandler.count("products"));

  }, [quantidade]);
  var _valorTotal = 0;
  var conteudo = null;

  if (data !== null) {
    if (data.length > 0) {
      conteudo = data.map(function (produto, index) {
        var produto_id = produto.productId;
        var quant = produto.quantidade;
        var valTotal = produto.preco * quant;
        _valorTotal += valTotal;
        return external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, external_react_default.a.createElement("div", {
          className: classes.cardItemMenu,
          id: produto_id,
          title: produto.nome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, external_react_default.a.createElement("div", {
          className: classes.mdlCard,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, external_react_default.a.createElement("div", {
          className: classes.info_item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, external_react_default.a.createElement(Avatar_default.a, {
          alt: "",
          src: produto.imagem,
          className: classes.img_prod,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }), external_react_default.a.createElement("p", {
          className: classes.nomeItemMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, produto.nome, external_react_default.a.createElement(IconButton_default.a, {
          edge: "end",
          className: classes.menuButton,
          color: "primary",
          size: "small",
          onClick: function onClick() {
            return remover(produto_id);
          },
          title: "Clique para remover ".concat(produto.nome, " do carrinho."),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, external_react_default.a.createElement(DeleteSharp_default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        }))), external_react_default.a.createElement("p", {
          className: classes.descItemMenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, produto.descricao.length == 0 ? external_react_default.a.createElement(external_react_default.a.Fragment, null, produto.nome) : external_react_default.a.createElement(external_react_default.a.Fragment, null, produto.descricao))), external_react_default.a.createElement(Grid_default.a, {
          container: true,
          className: classes.mdlCard__actions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, external_react_default.a.createElement(Button_default.a, {
          className: classes.valorUnitario,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, external_react_default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, "R$", " ", produto.preco != undefined ? produto.preco.toFixed(2) : null)), quant > 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, "Subtotal: R$ ", valTotal.toFixed(2))), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          container: true,
          direction: "row",
          justify: "flex-end",
          alignItems: "center",
          xs: 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, external_react_default.a.createElement(Button_default.a, {
          onClick: function onClick() {
            subtract(produto_id, quant);
          },
          disabled: quant < 1,
          className: classes.myButton,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, external_react_default.a.createElement(RemoveCircleOutlineRounded_default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        })), external_react_default.a.createElement("input", {
          type: "number",
          onChange: function onChange(ev) {
            return onChangeQuantidade(ev);
          },
          value: quant,
          className: classes.quantidade,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }), external_react_default.a.createElement(Button_default.a, {
          className: classes.myButton,
          onClick: function onClick() {
            add(produto_id, quant);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, external_react_default.a.createElement(AddCircleOutline_default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        })))))));
      });
    }
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, external_react_default.a.createElement(CssBaseline_default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }), external_react_default.a.createElement("div", {
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, external_react_default.a.createElement(AppBar_default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, external_react_default.a.createElement(Toolbar_default.a, {
    variant: "dense",
    style: {
      padding: 0,
      paddingLeft: 15,
      paddingRight: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, external_react_default.a.createElement(IconButton_default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, external_react_default.a.createElement(ShoppingCartSharp_default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  })), external_react_default.a.createElement(Typography_default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "MEU CARRINHO")), external_react_default.a.createElement(IconButton_default.a, {
    edge: "end",
    color: "inherit",
    "aria-label": "menu",
    className: classes.menuButton,
    onClick: function onClick() {
      props.fecharMenu(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, external_react_default.a.createElement(CloseSharp_default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  })))), external_react_default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, conteudo), external_react_default.a.createElement(AppBar_default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, external_react_default.a.createElement(Toolbar_default.a, {
    variant: "dense",
    style: {
      padding: 0,
      paddingLeft: 15,
      paddingRight: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 7,
    sm: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "VALOR TOTAL: R$ ", _valorTotal.toFixed(2))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 5,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, external_react_default.a.createElement(Button_default.a, {
    variant: "contained",
    align: "right",
    onClick: function onClick(ev) {
      return setOpenDialog(true);
    },
    color: "primary",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, "CONCLUIR PEDIDO")))))), external_react_default.a.createElement(DialogFormConfirm, {
    open: openDialog,
    onClose: function onClose() {
      setOpenDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }));
};

/* harmony default export */ var components_Carrinho = (Carrinho_Carrinho);
// CONCATENATED MODULE: ./components/Menu/index.js

var Menu_jsxFileName = "D:\\node\\delivery\\components\\Menu\\index.js";





var Menu_renderMenu = function renderMenu(props) {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

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
      lineNumber: 20
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    style: {
      padding: 5
    },
    __source: {
      fileName: Menu_jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, external_react_default.a.createElement(components_Carrinho, {
    count: countPedidosLocal,
    fecharMenu: function fecharMenu(value) {
      props.handleMenuClose(value);
    },
    __source: {
      fileName: Menu_jsxFileName,
      lineNumber: 30
    },
    __self: this
  })));
};

/* harmony default export */ var Menu = __webpack_exports__["a"] = (Menu_renderMenu);

/***/ }),

/***/ "/nYp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircleOutlineRounded");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2AuE");


/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

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

/***/ "1/9o":
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

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "2AuE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/InputBase"
var InputBase_ = __webpack_require__("ynsX");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__("DME6");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__("jQ8v");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__("cvHV");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// EXTERNAL MODULE: external "@material-ui/icons/Stars"
var Stars_ = __webpack_require__("8iMG");
var Stars_default = /*#__PURE__*/__webpack_require__.n(Stars_);

// EXTERNAL MODULE: external "@material-ui/lab/Skeleton"
var Skeleton_ = __webpack_require__("fDba");
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton_);

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-loadable"
var external_react_loadable_ = __webpack_require__("BaZy");
var external_react_loadable_default = /*#__PURE__*/__webpack_require__.n(external_react_loadable_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/AlertNotHasProducts/index.js

var _jsxFileName = "D:\\node\\delivery\\components\\AlertNotHasProducts\\index.js";


var useStyles = Object(core_styles_["makeStyles"])(function (theme) {
  return {
    root: Object(objectSpread["a" /* default */])({}, theme.typography.button, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: "center",
      boxShadow: "0px 0px 15px 0px rgba(10,10,10,0.1)"
    })
  };
});
function TypographyTheme(props) {
  var classes = useStyles();
  return external_react_default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.label));
}
// EXTERNAL MODULE: ./components/ApiRest/index.js
var ApiRest = __webpack_require__("tZcP");

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// CONCATENATED MODULE: ./components/Categorias/index.js




var Categorias_jsxFileName = "D:\\node\\delivery\\components\\Categorias\\index.js";










/**
 * Componente categoria
 */

function Categorias(props) {
  var _useState = Object(external_react_["useState"])({
    data: null,
    isLoaded: false
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      categorias = _useState2[0],
      setCategorias = _useState2[1];

  var router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(function () {
    var id = router.query.id;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ApiRest["a" /* default */].get("/categories/company/" + id);

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
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(List_default.a, {
    style: {
      border: "0px solid red",
      padding: "0"
    },
    __source: {
      fileName: Categorias_jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, external_react_default.a.createElement(ListItem_default.a, {
    __source: {
      fileName: Categorias_jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, external_react_default.a.createElement(ListItemText_default.a, {
    primary: external_react_default.a.createElement("b", {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "CATEGORIAS"),
    __source: {
      fileName: Categorias_jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), external_react_default.a.createElement(ListItemSecondaryAction_default.a, {
    __source: {
      fileName: Categorias_jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), external_react_default.a.createElement(Divider_default.a, {
    light: true,
    variant: "middle",
    __source: {
      fileName: Categorias_jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), !categorias.isLoaded && external_react_default.a.createElement(external_react_default.a.Fragment, null, [1, 2, 3, 4].map(function (value, index) {
    return external_react_default.a.createElement(List_default.a, {
      key: index,
      style: {
        border: "0px solid red",
        padding: "0"
      },
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, external_react_default.a.createElement(ListItem_default.a, {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, external_react_default.a.createElement(ListItemText_default.a, {
      primary: external_react_default.a.createElement(Skeleton_default.a, {
        width: "90%",
        height: 10,
        __source: {
          fileName: Categorias_jsxFileName,
          lineNumber: 42
        },
        __self: this
      }),
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), external_react_default.a.createElement(ListItemSecondaryAction_default.a, {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
  })), categorias.isLoaded && external_react_default.a.createElement(external_react_default.a.Fragment, null, categorias.data.map(function (category, index) {
    return external_react_default.a.createElement(external_react_["Fragment"], {
      key: index,
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, external_react_default.a.createElement(List_default.a, {
      title: "Clique para pesquisar produtos da categoria: ".concat(category.category_name),
      onClick: function onClick() {
        alert(stringify_default()(category));
      },
      style: {
        border: "0px solid red",
        padding: "0"
      },
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, external_react_default.a.createElement(ListItem_default.a, {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, external_react_default.a.createElement(ListItemText_default.a, {
      secondary: external_react_default.a.createElement(Typography_default.a, {
        color: "secondary",
        __source: {
          fileName: Categorias_jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, external_react_default.a.createElement("b", {
        __source: {
          fileName: Categorias_jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, category.category_name.toUpperCase())),
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), external_react_default.a.createElement(ListItemSecondaryAction_default.a, {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, external_react_default.a.createElement(Typography_default.a, {
      color: "secondary",
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, external_react_default.a.createElement("b", {
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, category.amount_products))))), external_react_default.a.createElement(Divider_default.a, {
      light: true,
      variant: "middle",
      __source: {
        fileName: Categorias_jsxFileName,
        lineNumber: 73
      },
      __self: this
    }));
  })));
}

/* harmony default export */ var components_Categorias = (Categorias);
// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__("Fl18");

// EXTERNAL MODULE: ./components/LocalStorageHandler/index.js
var LocalStorageHandler = __webpack_require__("1/9o");

// EXTERNAL MODULE: ./components/Menu/index.js + 1 modules
var Menu = __webpack_require__("/4k+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/RemoveCircleOutlineRounded"
var RemoveCircleOutlineRounded_ = __webpack_require__("/nYp");
var RemoveCircleOutlineRounded_default = /*#__PURE__*/__webpack_require__.n(RemoveCircleOutlineRounded_);

// CONCATENATED MODULE: ./components/Produtos/index.js




var Produtos_jsxFileName = "D:\\node\\delivery\\components\\Produtos\\index.js";







 //values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

var Produtos_useStyles = Object(core_["makeStyles"])(function (theme) {
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
    valorUnitario: Object(defineProperty["a" /* default */])({
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
    cardItemMenu: (_cardItemMenu = {}, Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("sm"), {
      width: "96%"
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("md"), {
      width: "96%"
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, theme.breakpoints.up("lg"), {
      width: "96%"
    }), Object(defineProperty["a" /* default */])(_cardItemMenu, "margin", "10px auto"), Object(defineProperty["a" /* default */])(_cardItemMenu, "minHeight", "10px"), Object(defineProperty["a" /* default */])(_cardItemMenu, "border", "0px solid red"), _cardItemMenu),
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
  var classes = Produtos_useStyles();

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(""),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
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
      localStorage.setItem("products", stringify_default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem("products", stringify_default()(products));
    }
  }

  function add() {
    var quant = parse_int_default()(quantidade) + 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * quant).toFixed(2));
  }

  function subtract() {
    var quant = parse_int_default()(quantidade) - 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    var quant = parse_int_default()(ev.target.value);

    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * parse_int_default()(quant)).toFixed(2));
  }

  Object(external_react_["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(parse_int_default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }

    props.callbackParent(LocalStorageHandler["a" /* default */].count("products"));
  }, [quantidade]);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: classes.cardItemMenu,
    id: props.id,
    title: props.nome,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    className: classes.mdlCard,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    className: classes.info_item,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, external_react_default.a.createElement(Avatar_default.a, {
    alt: "Remy Sharp",
    src: props.imagem,
    className: classes.img_prod,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), external_react_default.a.createElement("div", {
    className: classes.nomeItemMenu,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, props.nome), external_react_default.a.createElement("div", {
    className: classes.descItemMenu,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, props.descricao.length == 0 ? external_react_default.a.createElement(external_react_default.a.Fragment, null, props.nome) : external_react_default.a.createElement(external_react_default.a.Fragment, null, props.descricao))), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    className: classes.mdlCard__actions,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 7,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, external_react_default.a.createElement(Button_default.a, {
    className: classes.valorUnitario,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, external_react_default.a.createElement("b", {
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "R$", " ", props.precoUnitario != undefined ? props.precoUnitario.toFixed(2) : null)), quantidade > 0 && external_react_default.a.createElement(external_react_default.a.Fragment, null, "Subtotal: R$ ", valorTotal)), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    item: true,
    xs: 5,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, external_react_default.a.createElement(Button_default.a, {
    onClick: subtract,
    disabled: quantidade < 1,
    className: classes.myButton,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, external_react_default.a.createElement(RemoveCircleOutlineRounded_default.a, {
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), external_react_default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    value: quantidade,
    className: classes.quantidade,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), external_react_default.a.createElement(Button_default.a, {
    className: classes.myButton,
    onClick: add,
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, external_react_default.a.createElement(AddCircleOutline_default.a, {
    __source: {
      fileName: Produtos_jsxFileName,
      lineNumber: 241
    },
    __self: this
  })))))));
}
// EXTERNAL MODULE: ./components/SpinnerTeste/Produtos/index.js
var SpinnerTeste_Produtos = __webpack_require__("R8so");

// EXTERNAL MODULE: ./components/TotalPedidos/index.js
var TotalPedidos = __webpack_require__("K6td");

// EXTERNAL MODULE: ./components/useReplaceString/index.js
var useReplaceString = __webpack_require__("hZi0");
var useReplaceString_default = /*#__PURE__*/__webpack_require__.n(useReplaceString);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// CONCATENATED MODULE: ./components/useWidth/index.js



/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

function useWidth() {
  //const theme = useTheme();
  var theme = Object(core_styles_["createMuiTheme"])();

  var keys = _toConsumableArray(theme.breakpoints.keys).reverse();

  return keys.reduce(function (output, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var matches = useMediaQuery_default()(theme.breakpoints.up(key));
    return !output && matches ? key : output;
  }, null) || 'xs';
}
// CONCATENATED MODULE: ./pages/[id].js







var _id_jsxFileName = "D:\\node\\delivery\\pages\\[id].js";











































var NavigationBottom = external_react_loadable_default()({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "nGM1"));
  },
  loading: function loading() {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Skeleton_default.a, {
      height: "80%",
      width: "100%",
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }
});
var _id_theme = Object(core_["createMuiTheme"])({
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
var drawerWidth = 240;
var useStylesDrawer = Object(core_["makeStyles"])(function (theme) {
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
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: Object(objectSpread["a" /* default */])({
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

function CategoriasDetalhes() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Divider_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: _id_theme,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, external_react_default.a.createElement(components_Categorias, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), external_react_default.a.createElement(Divider_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: _id_theme,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, external_react_default.a.createElement(List_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, [{
    itemName: "Promoções",
    icone: external_react_default.a.createElement(Stars_default.a, {
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 138
      },
      __self: this
    })
  }, {
    itemName: "Meu Pedido",
    icone: external_react_default.a.createElement(ShoppingCart_default.a, {
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 139
      },
      __self: this
    })
  }, {
    itemName: "Minha Conta",
    icone: external_react_default.a.createElement(AccountCircle_default.a, {
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 140
      },
      __self: this
    })
  }, {
    itemName: "Pedir Por Telefone",
    icone: external_react_default.a.createElement(Phone_default.a, {
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 141
      },
      __self: this
    })
  }].map(function (item, index) {
    return external_react_default.a.createElement(ListItem_default.a, {
      button: true,
      key: index,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, external_react_default.a.createElement(ListItemIcon_default.a, {
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, item.icone), external_react_default.a.createElement(ListItemText_default.a, {
      primary: item.itemName,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 145
      },
      __self: this
    }));
  }))));
}

function DataASt(props) {
  var classes = useStylesDrawer();
  var theme = Object(core_["useTheme"])();

  function handleDrawerClose() {
    props.handleDrawerClose(false);
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, external_react_default.a.createElement(Drawer_default.a, {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: props.open,
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, external_react_default.a.createElement("div", {
    className: classes.drawerHeader,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, external_react_default.a.createElement(IconButton_default.a, {
    onClick: handleDrawerClose,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, theme.direction === "ltr" ? external_react_default.a.createElement(ChevronLeft_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 178
    },
    __self: this
  }) : external_react_default.a.createElement(ChevronRight_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))), external_react_default.a.createElement(CategoriasDetalhes, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))));
}

var _id_useStyles = Object(core_["makeStyles"])(function (theme) {
  var _rootinput;

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
    }, Object(defineProperty["a" /* default */])(_rootinput, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(defineProperty["a" /* default */])(_rootinput, theme.breakpoints.up("sm"), {
      width: "96%"
    }), Object(defineProperty["a" /* default */])(_rootinput, theme.breakpoints.up("md"), {}), Object(defineProperty["a" /* default */])(_rootinput, theme.breakpoints.up("lg"), {
      width: "96%"
    }), Object(defineProperty["a" /* default */])(_rootinput, "margin", "0px auto"), Object(defineProperty["a" /* default */])(_rootinput, "paddingLeft", 10), Object(defineProperty["a" /* default */])(_rootinput, "paddingRight", 10), Object(defineProperty["a" /* default */])(_rootinput, "paddingTop", 5), Object(defineProperty["a" /* default */])(_rootinput, "paddingBottom", 5), _rootinput),
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

var _id_Index = function Index(props) {
  var router = Object(router_["useRouter"])();
  var classes = _id_useStyles();

  var _React$useState = external_react_default.a.useState(0),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = external_react_default.a.useState([]),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      produtosAsObject = _React$useState4[0],
      setProdutosAsObject = _React$useState4[1];

  var _React$useState5 = external_react_default.a.useState(""),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      search = _React$useState6[0],
      setSearch = _React$useState6[1];

  var _useState = Object(external_react_["useState"])(!1),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(null),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      mobileMoreAnchorEl = _useState8[0],
      setMobileMoreAnchorEl = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(true),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      iniciar = _useState10[0],
      setIniciar = _useState10[1];

  var _useState11 = Object(external_react_["useState"])({
    config: []
  }),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 2),
      empresa = _useState12[0],
      setEmpresa = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(""),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      nome_fantasia = _useState14[0],
      setNomeFantasia = _useState14[1];

  var _useState15 = Object(external_react_["useState"])({
    dados: [],
    isLoading: false
  }),
      _useState16 = Object(slicedToArray["a" /* default */])(_useState15, 2),
      produtos = _useState16[0],
      setProdutos = _useState16[1];

  var _useState17 = Object(external_react_["useState"])(null),
      _useState18 = Object(slicedToArray["a" /* default */])(_useState17, 2),
      empresaId = _useState18[0],
      setEmpresaId = _useState18[1];

  var _useState19 = Object(external_react_["useState"])(!1),
      _useState20 = Object(slicedToArray["a" /* default */])(_useState19, 2),
      abrirDrawer = _useState20[0],
      setAbrirDrawer = _useState20[1];

  var screenSize = useWidth();
  var isMenuOpen = Boolean(anchorEl);

  function goBack() {
    window.history.back();
  }

  Object(external_react_["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();

    if (iniciar == true) {
      setIniciar(false); //setProdutosAsObject(props.shows);
    }
  }, []);
  /*
  BUSCA OS DADOS DA EMPRESA
  */

  Object(external_react_["useEffect"])(function () {
    var id = router.query.id;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ApiRest["a" /* default */].get("/companies/" + id);

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

  Object(external_react_["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var result;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(empresaId !== null)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return ApiRest["a" /* default */].get("/products/companie/" + empresaId);

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
  Object(external_react_["useEffect"])(function () {
    if (!empresa.config) {
      if (screenSize === "xs") {
        setNomeFantasia(useReplaceString_default()(empresa["0"].company_fantasy_name, 2));
      } else {
        setNomeFantasia(empresa["0"].company_fantasy_name);
      }

      setEmpresaId(empresa["0"].company_id);
    }
  }, [empresa]);

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
    setCountPedidosLocal(LocalStorageHandler["a" /* default */].count("products"));
  }

  function handleProfileMenuOpen(event) {
    if (LocalStorageHandler["a" /* default */].count("products") > 0) {
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
    alert(stringify_default()(LocalStorageHandler["a" /* default */].getDataByKey("products")));
    LocalStorageHandler["a" /* default */].remove("products");
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, external_react_default.a.createElement(CssBaseline_default.a, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 412
    },
    __self: this
  }), external_react_default.a.createElement(DataASt, {
    open: abrirDrawer,
    handleDrawerClose: function handleDrawerClose(valor) {
      return setAbrirDrawer(valor);
    },
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 413
    },
    __self: this
  }), external_react_default.a.createElement(AppBar_default.a, {
    position: "fixed",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, external_react_default.a.createElement(Toolbar_default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: _id_theme,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, external_react_default.a.createElement(Hidden_default.a, {
    only: ["sm", "lg", "md", "xl"],
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, external_react_default.a.createElement(IconButton_default.a, {
    color: "primary",
    onClick: function onClick() {
      setAbrirDrawer(!0);
    },
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, external_react_default.a.createElement(Menu_default.a, {
    fontSize: "default",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 430
    },
    __self: this
  })))), external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: _id_theme,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, external_react_default.a.createElement(Typography_default.a, {
    variant: "h6",
    color: "error",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, produtos.isLoading == false ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Skeleton_default.a, {
    variante: "text",
    height: 10,
    width: 200,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 443
    },
    __self: this
  })) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Link_default.a, {
    href: "../",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, external_react_default.a.createElement("span", {
    style: {
      color: "#fff"
    },
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, nome_fantasia))))),  false && false, external_react_default.a.createElement(IconButton_default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, external_react_default.a.createElement(TotalPedidos["a" /* default */], {
    countProdutos: countPedidosLocal,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 474
    },
    __self: this
  })))), external_react_default.a.createElement(Container_default.a, {
    maxWidth: "md",
    className: classes.cardGrid,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, produtos.isLoading == false && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("br", {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, external_react_default.a.createElement(Hidden_default.a, {
    only: ["xs", "xl"],
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, [1, 2, 3, 4, 5, 6, 7].map(function (item, index) {
    return external_react_default.a.createElement(external_react_["Fragment"], {
      key: index,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, external_react_default.a.createElement("div", {
      style: {
        marginBottom: 20
      },
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, external_react_default.a.createElement(Skeleton_default.a, {
      variant: "text",
      height: 15,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 491
      },
      __self: this
    }), external_react_default.a.createElement(Skeleton_default.a, {
      variant: "text",
      width: "70%",
      height: 15,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 492
      },
      __self: this
    })));
  })))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 8,
    md: 9,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, external_react_default.a.createElement(SpinnerTeste_Produtos["a" /* default */], {
    data: [1, 2, 3, 4, 5, 6, 7],
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 502
    },
    __self: this
  }))))), produtos.isLoading == true && empresaId != null && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("br", {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 510
    },
    __self: this
  }), produtos.data.hasOwnProperty("erro") && produtos.data ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(TypographyTheme, {
    label: "N\xE3o h\xE1 Produtos para esta empresa.",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 513
    },
    __self: this
  })) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, external_react_default.a.createElement(Hidden_default.a, {
    only: ["xs"],
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
    className: classes.categorias,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, external_react_default.a.createElement(CategoriasDetalhes, {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 527
    },
    __self: this
  })))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 8,
    md: 9,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    justify: "center",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, external_react_default.a.createElement(Paper_default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, external_react_default.a.createElement(IconButton_default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, external_react_default.a.createElement(icons_["Search"], {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 540
    },
    __self: this
  })), external_react_default.a.createElement(Divider_default.a, {
    className: classes.divider,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 542
    },
    __self: this
  }), external_react_default.a.createElement(InputBase_default.a, {
    autoFocus: true,
    className: classes.textFieldInput,
    placeholder: "Pesquisar",
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 543
    },
    __self: this
  }))))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, values_default()(produtos.data).map(function (product, index) {
    return external_react_default.a.createElement(external_react_default.a.Fragment, {
      key: index,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, external_react_default.a.createElement(Produtos, {
      callbackParent: function callbackParent(valor) {
        return setCountPedidosLocal(valor);
      },
      produto: product,
      id: product.product_id,
      nome: product.product_name.toUpperCase(),
      imagem: product.product_image,
      precoUnitario: 2.6,
      descricao: product.product_description,
      __source: {
        fileName: _id_jsxFileName,
        lineNumber: 559
      },
      __self: this
    }));
  }))))))), external_react_default.a.createElement(Container_default.a, {
    className: classes.footerNavigationBottom,
    maxWidth: "xl",
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, external_react_default.a.createElement(Footer["default"], {
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 582
    },
    __self: this
  })), external_react_default.a.createElement(Menu["a" /* default */], {
    anchorEl: anchorEl,
    handleMenuClose: handleMenuClose,
    abrir: isMenuOpen,
    __source: {
      fileName: _id_jsxFileName,
      lineNumber: 584
    },
    __self: this
  }));
};

_id_Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(ctx) {
    var configSite;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.t.bind(null, "q93c", 3));

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

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (_id_Index);

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

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

/***/ "4ac1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8WuN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigationAction");

/***/ }),

/***/ "8iMG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Stars");

/***/ }),

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

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

/***/ "BaZy":
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "EtfT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nybW");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\node\\delivery\\components\\Footer\\index.js";







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

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "IxSV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JH4w":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/BottomNavigation");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K6td":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IfcR");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1/9o");

var _jsxFileName = "D:\\node\\delivery\\components\\TotalPedidos\\index.js";





var TotalPedidos = function TotalPedidos(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      countPedidosLocal = _useState2[0],
      setCountPedidosLocal = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setCountPedidosLocal(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].count("products"));
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

/* harmony default export */ __webpack_exports__["a"] = (TotalPedidos);

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

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

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "R8so":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fDba");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\node\\delivery\\components\\SpinnerTeste\\Produtos\\index.js";



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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "VP1n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/LazyLoad/index.js

var _jsxFileName = "D:\\node\\delivery\\components\\LazyLoad\\index.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.1);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  -webkit-animation-duration: 2s !important;\n  animation-duration: 2s !important;\n  -webkit-animation-fill-mode: forwards !important;\n  animation-fill-mode: forwards !important;\n  -webkit-animation-iteration-count: infinite !important;\n  animation-iteration-count: infinite !important;\n  -webkit-animation-timing-function: linear !important;\n  animation-timing-function: linear !important;\n  -webkit-animation-name: ", " !important;\n  animation-name: ", " !important;\n  background: #3e3e3e;\n  background: linear-gradient(\n    to right,\n    #f3f3f3 2%,\n    #e9e8e8 18%,\n    #f3f3f3 33%\n  ) !important;\n  border-radius: 0px;\n  min-height: ", "\n  margin-top: ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["0% {opacity: 1;}50% {opacity: 0.4;}100% {opacity: 1;}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotate = Object(external_styled_components_["keyframes"])(_templateObject());
var Rotate = external_styled_components_default.a.div(_templateObject2(), rotate, rotate, function (props) {
  return props.height || "10px";
}, function (props) {
  return props.margintop || "5px";
});
var LasyLoading = external_styled_components_default.a.div(_templateObject3());

function LazyLoad(props) {
  return external_react_default.a.createElement(LasyLoading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, external_react_default.a.createElement(Rotate, {
    height: props.height,
    margintop: props.margintop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/* harmony default export */ var components_LazyLoad = __webpack_exports__["a"] = (LazyLoad);

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "cvHV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

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

/***/ "fDba":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hZi0":
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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "jQ8v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kvAz":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCartSharp");

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "oV0y":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteSharp");

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

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "tZcP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiConfig = [{
  baseURL: "http://localhost:3300"
}, {
  baseURL: "http://192.168.129.171:3300"
}, {
  baseURL: "http://deliverytest-com-br.umbler.net"
}];
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[0]);
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

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

/***/ "wdIZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloseSharp");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

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