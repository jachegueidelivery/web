webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeReviewCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data */ "../data.js");

var _jsxFileName = "D:\\node\\blog\\web\\pages\\index.js";












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'center',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      maxWidth: "80%"
    },
    card: {
      maxWidth: 345,
      height: 500
    },
    media: {
      height: 14
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["red"][500]
    }
  };
});
function RecipeReviewCard() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.gridList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_12__["default"].map(function (obj, id) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.card,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.media,
      image: obj.img,
      title: "Contemplative Reptile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Lizard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "textSecondary",
      component: "p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Share"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      size: "small",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Learn More")));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.1aec2df79c05c7b72a1e.hot-update.js.map