webpackHotUpdate("static\\development\\pages\\index.js",{

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
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
    },
    CssMedia: {
      width: '20%',
      margin: '0px',
      border: '3px outset pink'
    },
    Content: {
      width: '60%',
      margin: '0px'
    },
    CssActions: {
      width: '20%',
      margin: '0px'
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

  var valorTotal = 0;
  var Conteudo = data.map(function (produto, _k) {
    var quant = produto.quantidade;
    var valTotal = produto.preco * quant;
    valorTotal += valTotal;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: _k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      className: classes.img,
      alt: "complex",
      src: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: 12,
      sm: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
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
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, produto.nome), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "R$ ", produto.preco.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "R$ ", valTotal.toFixed(2)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
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
  }, Conteudo);
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ })

})
//# sourceMappingURL=index.js.fc4db02446c5e941723f.hot-update.js.map