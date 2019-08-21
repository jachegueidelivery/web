exports.ids = [1];
exports.modules = {

/***/ "0MBr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelBottomNavigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JH4w");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8WuN");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TotalPedidos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("urJs");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BaZy");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("EQ3O");
/* harmony import */ var _LazyLoad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VP1n");

var _jsxFileName = "D:\\node\\delivery\\components\\NavigationBottom.js";









var DialogFormConfirm = react_loadable__WEBPACK_IMPORTED_MODULE_7___default()({
  loader: function loader() {
    return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "UrxM"));
  },
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LazyLoad__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
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
    bottom: 0,
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.2)"
  }
});
function LabelBottomNavigation(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("recents"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      anchorEl = _useState4[0],
      setAnchorEl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
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
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    anchorEl: anchorEl,
    handleMenuClose: handleMenuClose,
    abrir: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: value,
    className: classes.stickToBottom,
    onChange: handleChange,
    showLabels: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "IN\xCDCIO",
    value: "recents",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Home"], {
      color: "primary",
      fontSize: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }),
    onClick: function onClick() {
      return window.location.href = "../";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "CARRINHO",
    value: "favorites",
    onClick: handleMenu,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TotalPedidos__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      countProdutos: props.totalPro,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "CONCLUIR PEDIDO",
    value: "nearby",
    onClick: function onClick() {
      return setOpenDialog(true);
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Check"], {
      color: "primary",
      fontSize: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogFormConfirm, {
    open: openDialog,
    onClose: function onClose() {
      setOpenDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }));
}

/***/ })

};;