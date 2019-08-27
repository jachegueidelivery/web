webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./components/SpinnerTeste/Produtos/index.js":
/*!***************************************************!*\
  !*** ./components/SpinnerTeste/Produtos/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Produtos; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutlineRounded */ "./node_modules/@material-ui/icons/RemoveCircleOutlineRounded.js");
/* harmony import */ var _material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_16__);


var _jsxFileName = "D:\\node\\delivery\\components\\SpinnerTeste\\Produtos\\index.js";















var useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
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
}); //values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  var _imageBox, _bigAvatar, _cardItemMenu;

  return {
    root: {
      border: "0px solid #ccc",
      marginBottom: 4,
      boxShadow: theme.shadows[3],
      backgroundColor: "rgba(245,245,245,0.8)"
    },
    imageBox: (_imageBox = {
      width: "100%",
      height: 140,
      flex: 1
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageBox, theme.breakpoints.up("xs"), {
      border: "0px solid green"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageBox, theme.breakpoints.up("sm"), {
      border: "0px solid red"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageBox, theme.breakpoints.up("md"), {
      border: "0px solid lime"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageBox, theme.breakpoints.up("lg"), {
      border: "0px solid gold"
    }), _imageBox),
    bigAvatar: (_bigAvatar = {
      height: 100,
      borderRadius: 5
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigAvatar, theme.breakpoints.up("xs"), {
      border: "1px solid green",
      margin: 0,
      width: 80
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigAvatar, theme.breakpoints.up("sm"), {
      margin: 10,
      width: 100
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigAvatar, theme.breakpoints.up("md"), {
      margin: 10,
      width: 100
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigAvatar, theme.breakpoints.up("lg"), {
      margin: 10,
      width: 100
    }), _bigAvatar),
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
    valorUnitario: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      border: "0px solid red",
      color: "rgb(244,67,54)"
    }, theme.breakpoints.up("xs"), {
      fontWeight: "bold"
    }),
    subtotal: {
      border: "0px solid red",
      paddingRight: 12,
      fontSize: "12px"
    },
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
    cardItemMenu: (_cardItemMenu = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, theme.breakpoints.up("xs"), {
      width: "100%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, theme.breakpoints.up("sm"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, theme.breakpoints.up("md"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, theme.breakpoints.up("lg"), {
      width: "96%"
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, "margin", "10px auto"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, "minHeight", "10px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_cardItemMenu, "border", "0px solid red"), _cardItemMenu),
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
      borderRadius: "2px",
      display: "block",
      width: 40,
      minWidth: "30px"
    }
  };
});
/**
 * Component: Produtos
 */

function Produtos(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.cardItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.mdlCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.info_item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alt: "Remy Sharp",
    src: props.imagem,
    className: classes.img_prod,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.cardMedia,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "100%",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: classes.nomeItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "100%",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: classes.descItemMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "100%",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    className: classes.mdlCard__actions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true,
    xs: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "100%",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    xs: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.myButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_RemoveCircleOutlineRounded__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    className: classes.quantidade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.myButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })))))));
}

/***/ })

})
//# sourceMappingURL=[id].js.df6711790811caa951cc.hot-update.js.map