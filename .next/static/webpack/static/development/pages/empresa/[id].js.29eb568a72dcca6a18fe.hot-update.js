webpackHotUpdate("static\\development\\pages\\empresa\\[id].js",{

/***/ "./components/SpinnerDelivery.js":
/*!***************************************!*\
  !*** ./components/SpinnerDelivery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");


var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\SpinnerDelivery.js";






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
    appBarBottom: {
      top: "auto",
      bottom: 0
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
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
    carregando: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
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
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][500],
      "&:hover": {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][600]
      }
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    icon: {
      margin: theme.spacing(2)
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 151
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    listaProdutos: {
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);",
      display: "flex",
      flexWrap: "nowrap",
      border: "0px solid red",
      flexDirection: "row",
      height: 160,
      marginTop: 10,
      backgroundColor: "rgba(245,245,245,0.8)"
    },
    itemAvatar: {
      width: "20%",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      border: "0px solid lime",
      padding: 4
    },
    itemAvatarImg: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      border: "0px solid lime"
    },
    itemContent: {
      width: "60%",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      alignItems: "flex-start",
      border: "0px solid lime",
      padding: 10
    },
    itemAcoes: {
      width: "20%",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "0px solid lime",
      padding: 10,
      textAlign: "center"
    },
    inputQuantidade: {
      border: 0,
      outline: 0,
      textAlign: "center",
      width: 40
    }
  };
});

var SpinnerDelivery = function SpinnerDelivery(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Carregando produtos, aguarde, por gentileza... "),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      labelIni = _useState2[0],
      setLabelIni = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLabelIni(props.label);
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.carregando,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    avatar: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disableShrink: true,
      size: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }),
    label: labelIni,
    variant: "outlined",
    style: {
      border: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SpinnerDelivery);

/***/ })

})
//# sourceMappingURL=[id].js.29eb568a72dcca6a18fe.hot-update.js.map