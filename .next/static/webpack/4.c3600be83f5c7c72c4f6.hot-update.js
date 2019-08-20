webpackHotUpdate(4,{

/***/ "./components/NavigationBottom.js":
/*!****************************************!*\
  !*** ./components/NavigationBottom.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelBottomNavigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/esm/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/esm/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _TotalPedidos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TotalPedidos */ "./components/TotalPedidos.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");
/* harmony import */ var _LazyLoad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyLoad */ "./components/LazyLoad/index.js");

var _jsxFileName = "E:\\delivery\\components\\NavigationBottom.js";









var DialogFormConfirm = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./DialogFormConfirm */ "./components/DialogFormConfirm.js"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LazyLoad__WEBPACK_IMPORTED_MODULE_9__["default"], {
      height: "30px",
      margintop: "5px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});
function LabelBottomNavigation(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("recents"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      openDialog = _useState6[0],
      setOpenDialog = _useState6[1];

  var open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    anchorEl: anchorEl,
    handleMenuClose: handleMenuClose,
    abrir: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    className: classes.stickToBottom,
    onChange: handleChange,
    showLabels: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "IN\xCDCIO",
    value: "recents",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Home"], {
      color: "primary",
      fontSize: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }),
    onClick: function onClick() {
      return alert('a');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "CARRINHO",
    value: "favorites",
    onClick: handleMenu,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TotalPedidos__WEBPACK_IMPORTED_MODULE_6__["default"], {
      countProdutos: props.totalPro,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "FAZER PEDIDO",
    value: "nearby",
    onClick: function onClick() {
      return setOpenDialog(true);
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Check"], {
      color: "primary",
      fontSize: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogFormConfirm, {
    open: openDialog,
    onClose: function onClose() {
      setOpenDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=4.c3600be83f5c7c72c4f6.hot-update.js.map