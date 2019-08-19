webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./components/Carrinho.js":
/*!********************************!*\
  !*** ./components/Carrinho.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");
/* harmony import */ var _LazyLoad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LazyLoad */ "./components/LazyLoad/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\node\\delivery\\components\\Carrinho.js";














var DialogFormConfirm = react_loadable__WEBPACK_IMPORTED_MODULE_14___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./DialogFormConfirm */ "./components/DialogFormConfirm.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LazyLoad__WEBPACK_IMPORTED_MODULE_13__["default"], {
      height: "30px",
      margintop: "5px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      margin: "auto",
      maxWidth: 500,
      minWidth: 500
    },
    image: {
      width: 128,
      height: "110.129px"
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    Div: {
      display: "flex",
      justifyContent: "center",
      width: "200px",
      margin: "0px",
      border: "1px outset pink"
    }
  };
});

var Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      openDialog = _useState4[0],
      setOpenDialog = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);

  var remover = function remover(id) {
    _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_12__["default"].removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  var valorTotal = 0;
  var conteudo = null;

  if (data !== null) {
    if (data.length > 0) {
      conteudo = data.map(function (produto, _k) {
        var quant = produto.quantidade;
        var valTotal = produto.preco * quant;
        valorTotal += valTotal;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          key: _k,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          container: true,
          spacing: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: classes.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: classes.img,
          alt: "complex",
          src: produto.imagem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          sm: true,
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: true,
          container: true,
          direction: "column",
          spacing: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gutterBottom: true,
          variant: "subtitle1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, produto.nome)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "body2",
          gutterBottom: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: function onClick(ev) {
            return remover(produto.productId);
          },
          size: "small",
          variant: "body2",
          style: {
            cursor: "pointer"
          },
          color: "primary",
          title: "Clique para remover este item do carrinho",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Remover"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "subtitle1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, "Quant: ", quant)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "subtitle1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "R$ ", produto.preco.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "subtitle1",
          title: "Valor Total",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "V.T.: R$ ", valTotal.toFixed(2))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
          style: {
            border: 0,
            borderTop: "1px solid #ddd"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }));
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "MEU CARRINHO")))), conteudo, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sm: true,
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "VALOR TOTAL: R$ ", valorTotal.toFixed(2)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    align: "",
    size: "large",
    onClick: function onClick(ev) {
      return setOpenDialog(true);
    },
    color: "primary",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "FAZER PEDIDO"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogFormConfirm, {
    open: openDialog,
    onClose: function onClose() {
      setOpenDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ })

})
//# sourceMappingURL=[id].js.9cc0d22960dd5e2c8158.hot-update.js.map