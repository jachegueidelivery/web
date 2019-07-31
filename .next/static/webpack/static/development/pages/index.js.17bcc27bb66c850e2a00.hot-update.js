webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LocalStorageHandler.js":
/*!*******************************************!*\
  !*** ./components/LocalStorageHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorageHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");





/*
Uma classe para trabalhar com LocalStorage
*/
var LocalStorageHandler =
/*#__PURE__*/
function () {
  function LocalStorageHandler() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LocalStorageHandler);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LocalStorageHandler, null, [{
    key: "get",

    /**
     * @method get
     * @param key {String} Item key
     * @return {String|Object|Null}
     */
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
      this._ls.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(val));

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
      if (typeof index === "number") {
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
    /**
     * @method remove
     * @param keyOrIndex {String|Number} Item key or index (which will be converted to key anyway)
     * @return {Boolean} True if the key was found before deletion, false if not
     */

  }, {
    key: "remove",
    value: function remove(keyOrIndex) {
      var result = false;
      var key = typeof keyOrIndex === "number" ? this.key(keyOrIndex) : keyOrIndex;

      if (key in this._ls) {
        result = true;

        this._ls.removeItem(key);
      }

      return result;
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

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(LocalStorageHandler, "_ls", localStorage);



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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");


var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\carrinho.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  margin: 0px;\n  border: 0px outset pink;\n  &:hover {\n    background-color: #ccc;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
      height: "100%"
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
var Div = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

var Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function onConfirmar() {
    alert("Não implementado");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);

  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "N\xE3o h\xE1 produtos ainda");
  }

  var remover = function remover(id) {
    alert('Remover' + id);
  };

  var valorTotal = 0;
  var Conteudo = data.map(function (produto, _k) {
    var quant = produto.quantidade;
    var valTotal = produto.preco * quant;
    valorTotal += valTotal;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: _k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: classes.img,
      alt: "complex",
      src: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: 12,
      sm: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: true,
      container: true,
      direction: "column",
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, produto.nome)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        lineNumber: 118
      },
      __self: this
    }, "Remover"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "R$  ", produto.preco.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "R$  ", valTotal.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Quant:  ", quant)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      style: {
        border: 0,
        borderTop: "1px solid #ddd"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "MEU CARRINHO")))), Conteudo, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "VALOR TOTAL R$ ", valorTotal.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    align: "",
    size: "large",
    color: "primary",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "CONFIRMAR?")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ })

})
//# sourceMappingURL=index.js.17bcc27bb66c850e2a00.hot-update.js.map