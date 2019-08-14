module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ApiRest.js":
/*!*******************************!*\
  !*** ./components/ApiRest.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var os = __webpack_require__(/*! os */ "os");

var index = 'server';
var apiConfig = {
  local: {
    baseURL: "http://127.0.0.1:3333"
  },
  server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
};

if (os.hostname() === 'cryptopc') {
  index = 'local';
}

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(apiConfig[index]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./components/LocalStorageHandler.js":
/*!*******************************************!*\
  !*** ./components/LocalStorageHandler.js ***!
  \*******************************************/
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

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carrinho__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho */ "./components/carrinho.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");

var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\Menu.js";





var renderMenu = function renderMenu(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      mobileMoreAnchorEl = _useState4[0],
      setMobileMoreAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      countPedidosLocal = _useState6[0],
      setCountPedidosLocal = _useState6[1];

  function onAtualizarCount() {
    setCountPedidosLocal(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].count("products"));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onAtualizarCount();
  }, []);
  var menuId = "primary-search-account-menu-dois";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_carrinho__WEBPACK_IMPORTED_MODULE_3__["default"], {
    count: countPedidosLocal,
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (renderMenu);

/***/ }),

/***/ "./components/SpinnerDelivery.js":
/*!***************************************!*\
  !*** ./components/SpinnerDelivery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\SpinnerDelivery.js";














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

/* harmony default export */ __webpack_exports__["default"] = (SpinnerDelivery);

/***/ }),

/***/ "./components/carrinho.js":
/*!********************************!*\
  !*** ./components/carrinho.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");

var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\carrinho.js";











 //LocalStorage Classe:


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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

var Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function onConfirmar() {
    //alert(JSON.stringify(LocalStorageHandler.getDataByKey('products')));
    _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_13__["default"].remove('products');
  }
  /*useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);*/


  if (!props.data) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "N\xE3o h\xE1 produtos ainda"));
  }

  var remover = function remover(id) {
    _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_13__["default"].removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  var valorTotal = 0; //Objeto

  var Conteudo = props.data.map(function (produto, _k) {
    var quant = produto.quantidade;
    var valTotal = produto.preco * quant;
    valorTotal += valTotal;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: _k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: classes.img,
      alt: "complex",
      src: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      item: true,
      xs: 12,
      sm: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      gutterBottom: true,
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, produto.nome)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    }, "Remover"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Quant:  ", quant)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "R$  ", produto.preco.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "subtitle1",
      title: "Valor Total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "V.T.: R$  ", valTotal.toFixed(2))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "MEU CARRINHO")))), Conteudo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    sm: true,
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "VALOR TOTAL: R$ ", valorTotal.toFixed(2)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "CONFIRMAR?"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footers; });
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/LocalStorageHandler */ "./components/LocalStorageHandler.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_ApiRest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/ApiRest */ "./components/ApiRest.js");
/* harmony import */ var _components_SpinnerDelivery__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/SpinnerDelivery */ "./components/SpinnerDelivery.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__);





var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\pages\\index.js";



























function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Criado por ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Teste"), " team.");
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return {
    "@global": {
      body: {
        background: "url(https://res.cloudinary.com/delivery-com/image/fetch/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2Fdefault-small.jpg)",
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
    toolbar2: {
      flexWrap: "wrap",
      padding: 0,
      margin: 0
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
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({
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
      flexDirection: "column",
      cursor: "pointer !important"
    },
    _grid: {
      cursor: "pointer !important"
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
      width: "80%",
      margin: "0px auto",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    carregando: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
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
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    hoverUp: {
      border: "5px solid red !important"
    },
    hoverDown: {
      border: "0px solid red !important"
    }
  };
});
/**
 * Footer (Rodapé)
 */

function Footer(classes) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19___default.a, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, _components_footer__WEBPACK_IMPORTED_MODULE_25__["default"].map(function (footer, id) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      key: id + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, footer.description.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, item));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_20___default.a, {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })));
}
/**
 * Mostra os ícones das empresas
 */


function MostrarEmpresas(props, classes) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    hits: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      empresas = _useState2[0],
      setEmpresas = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
                return _components_ApiRest__WEBPACK_IMPORTED_MODULE_28__["default"].get("/empresas");

              case 2:
                result = _context.sent;
                setEmpresas(result.data);

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

  function mouseOverStyle(ev) {
    ev.preventDefault();
    ev.target.classList.add("hoverUp");
  }

  function mouseOutStyle(ev, id) {
    ev.preventDefault();
    ev.target.classList.remove("hoverDown");
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, empresas.length === undefined && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SpinnerDelivery__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: " Carregando empresas, aguarde, por gentileza... ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(empresas).map(function (empresa, _key) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
      item: true,
      key: _key,
      title: "Clique para entrar em " + empresa.nome_fantasia,
      xs: 12,
      sm: 6,
      md: 4,
      className: classes._grid,
      onClick: function onClick() {
        window.location = "/empresa/" + empresa.url.toLowerCase();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, empresa.nome_fantasia != null && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.card,
      onMouseOut: function onMouseOut(ev) {
        return mouseOutStyle(ev, empresa.id);
      },
      onMouseOver: function onMouseOver(ev) {
        return mouseOverStyle(ev, empresa.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.cardMedia,
      image: empresa.logomarca,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, empresa.nome_fantasia), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, " ", empresa.telefone), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, empresa.descricao)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      color: "primary",
      dataobj: empresa,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "IR PARA A LOJA"))));
  })));
}
/*
 */


var Main = function Main(props) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      mobileMoreAnchorEl = _useState6[0],
      setMobileMoreAnchorEl = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      countPedidosLocal = _useState8[0],
      setCountPedidosLocal = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      data = _useState10[0],
      setData = _useState10[1];

  var classes = useStyles();
  var isMenuOpen = Boolean(anchorEl);

  function onAtualizarCount() {
    setCountPedidosLocal(_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_26__["default"].count("products"));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();
  });

  function handleProfileMenuOpen(event) {
    onAtualizarCount();

    if (_components_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_26__["default"].count("products") > 0) {
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

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: classes.SiteSearchPanel__Background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    position: "fixed",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "h6",
    color: "textPrimary",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "Delivery"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Entrar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default.a, {
    onClick: handleProfileMenuOpen,
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.margin,
    badgeContent: countPedidosLocal,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__["ShoppingCartOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19___default.a, {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    component: "h4",
    variant: "h4",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, "Alguma mensagem impactante aqui KKK"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_22___default.a, {
    className: classes.textFieldInput,
    placeholder: "Pesquisar",
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19___default.a, {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    position: "static",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.toolbar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "h6",
    color: "textPrimary",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default.a, {
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__["GridOn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_24___default.a, {
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_30__["ReorderRounded"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }), MostrarEmpresas(props, classes)), Footer(classes), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_27__["default"], {
    anchorEl: anchorEl,
    data: data,
    handleMenuClose: handleMenuClose,
    abrir: isMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
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

module.exports = __webpack_require__(/*! E:\delivery-rsvtelecom-com-br\pages\index.js */"./pages/index.js");


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

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

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

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

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

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

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

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

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

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

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

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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