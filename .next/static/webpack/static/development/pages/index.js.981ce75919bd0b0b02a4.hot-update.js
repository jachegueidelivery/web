webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.js */ "../data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
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
      width: 868,
      height: 1050
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  };
};

function RecipeReviewCard(props) {
  var classes = props.classes;

  function onTileTouch(ev) {
    window.location = "/post?postId=" + (ev + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.gridList,
    cols: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (tile, id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: function onClick(e) {
        onTileTouch(id);
      },
      key: id.toString(),
      rows: 10,
      cols: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: tile.img,
      alt: tile.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: tile.title,
      subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "by: ", tile.author),
      actionIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "aria-label": "info about ".concat(tile.title),
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      href: {
        pathname: "/post",
        query: {
          postId: id
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "subtitle1",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Continue reading...")));
  }))));
}

RecipeReviewCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(useStyles)(RecipeReviewCard));

/***/ })

})
//# sourceMappingURL=index.js.981ce75919bd0b0b02a4.hot-update.js.map