webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./components/TotalPedidos.js":
/*!************************************!*\
  !*** ./components/TotalPedidos.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
var _jsxFileName = "E:\\delivery\\components\\TotalPedidos.js";






var TotalPedidos = function TotalPedidos(props) {
  /*const [countPedidosLocal, setCountPedidosLocal] = useState(!1);
  const [carregado, setCarregado] = useState(!1);
    useEffect(() => {
    setCarregado(true);
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  },[]);
    if (countPedidosLocal <= 0) {
    return (
      <Badge badgeContent={0} color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  } else {
    if (!carregado) {
      return <CircularProgress disableShrink />;
    }
    return (
      <Badge badgeContent={countPedidosLocal} color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  }*/
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
    badgeContent: !props.countProdutos ? 0 : props.countProdutos,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TotalPedidos);

/***/ })

})
//# sourceMappingURL=[id].js.cd3669e3bfaf1263e63c.hot-update.js.map