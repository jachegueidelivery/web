webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data.js */ "../data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");

var _jsxFileName = "D:\\node\\blog\\web\\pages\\index.js";



























var useStyles = function useStyles(theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 1440,
      height: 1050
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_20__["red"][500]
    }
  };
};

function RecipeReviewCard(props) {
  var classes = props.classes;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function onTileTouch(ev) {
    window.location = "/post?postId=" + (ev + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cellHeight: 160,
    className: classes.gridList,
    cols: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (tile) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: tile.img,
      cols: tile.cols || 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: tile.img,
      alt: tile.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  }))));
}

RecipeReviewCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(useStyles)(RecipeReviewCard));

/***/ })

})
//# sourceMappingURL=index.js.5e23e2e8fd791b6b8979.hot-update.js.map