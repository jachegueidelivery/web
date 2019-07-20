webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pricing; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "./node_modules/@material-ui/icons/StarBorder.js");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../cards */ "../cards.js");

var _jsxFileName = "D:\\node\\blog\\web\\pages\\index.js";



















function MadeWithLove() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, 'Criado por ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Teste"), ' team.');
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["makeStyles"])(function (theme) {
  return {
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white
      },
      ul: {
        margin: 0,
        padding: 0
      },
      li: {
        listStyle: 'none'
      }
    },
    appBar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbar: {
      flexWrap: 'wrap'
    },
    toolbarTitle: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6)
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200]
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2)
    },
    footer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderTop: "1px solid ".concat(theme.palette.divider),
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }, theme.breakpoints.up('sm'), {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    })
  };
});
var tiers = [{
  title: 'Free',
  price: '0',
  description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
  buttonText: 'Sign up for free',
  buttonVariant: 'outlined'
}, {
  title: 'Pro',
  subheader: 'Most popular',
  price: '15',
  description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
  buttonText: 'Get started',
  buttonVariant: 'contained'
}, {
  title: 'Enterprise',
  price: '30',
  description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
  buttonText: 'Contact us',
  buttonVariant: 'outlined'
}];
var footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations']
}, {
  title: 'Features',
  description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use']
}];
function Pricing() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    color: "default",
    elevation: 0,
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.toolbarTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Company name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Features"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Enterprise"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "button",
    color: "textPrimary",
    href: "#",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Support")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "#",
    color: "primary",
    variant: "outlined",
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    maxWidth: "sm",
    component: "main",
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "h4",
    variant: "h4",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "T\xEDtulo do Sistema ou outro texto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, _cards__WEBPACK_IMPORTED_MODULE_18__["default"].map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      key: card,
      xs: 12,
      sm: 6,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.cardMedia,
      image: "https://source.unsplash.com/random",
      title: "Image title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Heading"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "This is a media card. You can use this section to describe the content.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "View"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Edit"))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    maxWidth: "md",
    component: "footer",
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 4,
    justify: "space-evenly",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, footers.map(function (footer) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 6,
      sm: 3,
      key: footer.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "h6",
      color: "textPrimary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, footer.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, footer.description.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
        href: "#",
        variant: "subtitle1",
        color: "textSecondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, item));
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["default"], {
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MadeWithLove, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.06285fe38c488eef9039.hot-update.js.map