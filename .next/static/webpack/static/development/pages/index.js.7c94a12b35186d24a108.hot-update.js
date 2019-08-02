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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LocalStorageHandler */ "./components/LocalStorageHandler.js");

var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\carrinho.js";






















 //LocalStorage Classe:


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
      height: "110.129px"
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
var messages = [{
  id: 1,
  primary: 'Brunch this week?',
  secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
  person: '/static/images/avatar/5.jpg'
}, {
  id: 2,
  primary: 'Birthday Gift',
  secondary: "Do you have a suggestion for a good present for John on his work\n      anniversary. I am really confused & would love your thoughts on it.",
  person: '/static/images/avatar/1.jpg'
}, {
  id: 3,
  primary: 'Recipe to try',
  secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
  person: '/static/images/avatar/2.jpg'
}, {
  id: 4,
  primary: 'Yes!',
  secondary: 'I have the tickets to the ReactConf for this year.',
  person: '/static/images/avatar/3.jpg'
}, {
  id: 5,
  primary: "Doctor's Appointment",
  secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
  person: '/static/images/avatar/4.jpg'
}, {
  id: 6,
  primary: 'Discussion',
  secondary: "Menus that are generated by the bottom app bar (such as a bottom\n      navigation drawer or overflow menu) open as bottom sheets at a higher elevation\n      than the bar.",
  person: '/static/images/avatar/5.jpg'
}, {
  id: 7,
  primary: 'Summer BBQ',
  secondary: "Who wants to have a cookout this weekend? I just got some furniture\n      for my backyard and would love to fire up the grill.",
  person: '/static/images/avatar/1.jpg'
}];

var Carrinho = function Carrinho(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function onConfirmar() {
    alert("Não implementado");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setData(JSON.parse(localStorage.getItem("products")));
  }, []);

  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "N\xE3o h\xE1 produtos ainda"));
  }

  var remover = function remover(id) {
    _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_24__["default"].removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  var valorTotal = 0;
  var Conteudo = data.map(function (produto, _k) {
    var quant = produto.quantidade;
    var valTotal = produto.preco * quant;
    valorTotal += valTotal;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: _k,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      container: true,
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: classes.img,
      alt: "complex",
      src: produto.imagem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 12,
      sm: true,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: true,
      container: true,
      direction: "column",
      spacing: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      gutterBottom: true,
      variant: "subtitle1",
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
    }, produto.nome)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "body2",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        lineNumber: 166
      },
      __self: this
    }, "Remover"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Quant:  ", quant)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "subtitle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "R$  ", produto.preco.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "subtitle1",
      title: "Valor Total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "V.T.: R$  ", valTotal.toFixed(2))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      style: {
        border: 0,
        borderTop: "1px solid #ddd"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
    square: true,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.text,
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Inbox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, messages.map(function (_ref) {
    var id = _ref.id,
        primary = _ref.primary,
        secondary = _ref.secondary,
        person = _ref.person;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, id === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: classes.subheader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Today"), id === 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_19__["default"], {
      className: classes.subheader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Yesterday"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
      alt: "Profile Picture",
      src: person,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
      primary: primary,
      secondary: secondary,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "fixed",
    color: "primary",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "secondary",
    "aria-label": "add",
    className: classes.fabButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "end",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_23___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carrinho);

/***/ })

})
//# sourceMappingURL=index.js.7c94a12b35186d24a108.hot-update.js.map