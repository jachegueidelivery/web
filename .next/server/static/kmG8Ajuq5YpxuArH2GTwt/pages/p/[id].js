module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"9":"640e93a8fc503023237c"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4VpM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nOj+");


/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

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

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

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

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "QEhy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

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

/***/ "XSPh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Folder");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

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

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "nOj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vYYK");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QzC/");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4151");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("PxrZ");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("thJL");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("s051");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("AJJM");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("Ms0O");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("ynsX");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("nybW");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("SJC6");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("6Yxu");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("9E4/");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("aIN1");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("IbbU");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("QEhy");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("GLYF");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("ubCc");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("W+03");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("4ZJ9");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("XSPh");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("ng1p");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("4VpM");
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("lWoh");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("hbHv");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("tBFs");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("ZVla");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("zOcm");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_51__);









var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\pages\\p\\[id].js",
    _this = undefined;














































function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(props, ["children", "value", "index"]);

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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

function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Criado por ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Teste"), " team.");
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__["makeStyles"])(function (theme) {
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
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_33__["green"][500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_33__["green"][600]
      }
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});

function generate(element) {
  return [0, 1, 2, 5, 7, 5, 6, 5, 5, 55].map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(element, {
      key: value
    });
  });
}

var Index = function Index(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_32__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(!1),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState3, 2),
      dense = _React$useState4[0],
      setDense = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(!1),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_React$useState5, 2),
      secondary = _React$useState6[0],
      setSecondary = _React$useState6[1];

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__["useTheme"])();
  var classes = useStyles();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  var transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  /*const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add"
    },
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit"
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand"
    }
  ];*/

  var handleClick = function handleClick() {
    console.log("this is:", _this);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    position: "fixed",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_19___default.a, {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "../",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Delivery ", router.query.id)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "Sair"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28___default.a, {
    "aria-label": "Account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_31__["ShoppingCartOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_29___default.a, {
    value: value,
    onChange: handleChange,
    "aria-label": "Simple tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "PRODUTOS"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "SEUS PEDIDOS"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_30___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    label: "AVALIA\xC7\xD5ES"
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23___default.a, {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25___default.a, {
    className: classes.rootinput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_31__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_26___default.a, {
    className: classes.textFieldInput,
    placeholder: "Pesquise produtos aqui...".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(router.query)),
    inputProps: {
      "aria-label": "Search Google Maps"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_27___default.a, {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28___default.a, {
    className: classes.iconButton,
    "aria-label": "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_31__["Search"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default.a, {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(props.shows).map(function (produto) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default.a, {
      item: true,
      key: produto.id,
      title: "Clique para entrar em " + produto.nome,
      xs: 12,
      sm: 6,
      md: 4,
      className: classes._grid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.cardMedia,
      image: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15___default.a, {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, produto.nome), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, " ", produto.nome), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, produto.descricao)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
      size: "small",
      color: "primary",
      dataobj: produto,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "IR PARA A LOJA"))));
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default.a, {
    item: true,
    xs: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, "Avatar with text and icon"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: classes.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_37___default.a, {
    dense: dense,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(props.shows).map(function (produto) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_38___default.a, {
      key: produto.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_39___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.cardMediaList,
      image: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_42___default.a, {
      primary: produto.nome,
      secondary: produto.descricao,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_41___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_28___default.a, {
      edge: "end",
      "aria-label": "Delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_45___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_47___default.a, {
      className: classes.formControl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_51___default.a, {
      htmlFor: "component-simple",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      },
      __self: this
    }, "Observa\xE7\xE3o:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_49___default.a, {
      id: "component-simple",
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }));
  }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "Tab 3")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_23___default.a, {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, _components_footer__WEBPACK_IMPORTED_MODULE_35__[/* default */ "a"].map(function (footer) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18___default.a, {
      item: true,
      xs: 6,
      sm: 3,
      key: footer.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20___default.a, {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, footer.description.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21___default.a, {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, item));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_24___default.a, {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.t.bind(null, "ATgf", 3));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            shows: res
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

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

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

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

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });