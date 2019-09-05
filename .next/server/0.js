exports.ids = [0];
exports.modules = {

/***/ "./components/DialogFormConfirm/index.js":
/*!***********************************************!*\
  !*** ./components/DialogFormConfirm/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleDialog; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../LocalStorageHandler */ "./components/LocalStorageHandler/index.js");


var _jsxFileName = "E:\\delivery\\components\\DialogFormConfirm\\index.js";
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    root: {
      textAlign: "center"
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    }
  };
});

function SignIn() {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_16__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isEditing = _useState2[0],
      setEditing = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    if (!isEditing) {
      inputRef.current.focus();
      setEditing(!0);
    }
  }, [isEditing]);
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "main",
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    type: "text",
    id: "email",
    label: "Email ou Telefone",
    name: "email",
    autoFocus: true,
    inputRef: inputRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "endereco",
    label: "Endereco",
    type: "text",
    id: "endereco",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
}

function SimpleDialog(props) {
  var onClose = props.onClose,
      open = props.open;
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["useTheme"])();
  var fullScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_14___default()(theme.breakpoints.down("sm"));
  var classes = useStyles();

  function handleClose() {
    onClose(true);
  }

  function onCloncluirPedido() {
    alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_17__["default"].getDataByKey("products")) + "\n\n" + _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_17__["default"].remove("products"));
    onClose(!0);
  }

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fullScreen: fullScreen,
    open: open,
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "responsive-dialog-title",
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Concluir Pedido")), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Verificaremos que voc\xEA n\xE3o est\xE1 logado ou que n\xE3o possui uma conta, ent\xE3o, para proseguir, digite seu n\xFAmero de telefone e endere\xE7o, e o seu pedido ser\xE1 feito."), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(SignIn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleClose,
    color: "default",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Fechar"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: onCloncluirPedido,
    color: "primary",
    variant: "contained",
    autoFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Confirmar")));
}

/***/ })

};;
//# sourceMappingURL=0.js.map