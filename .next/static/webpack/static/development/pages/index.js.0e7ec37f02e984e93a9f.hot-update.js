webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridList */ "./node_modules/@material-ui/core/esm/GridList/index.js");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "./node_modules/@material-ui/core/esm/GridListTile/index.js");
/* harmony import */ var _material_ui_core_GridListTileBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/GridListTileBar */ "./node_modules/@material-ui/core/esm/GridListTileBar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data.js */ "../data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);

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
    }
  };
};

function RecipeReviewCard(props) {
  var classes = props.classes;

  function onTileTouch(ev) {
    window.location = "/post?postId=" + (ev + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.gridList,
    cols: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (tile, id) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardHeader, {
      avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Avatar, {
        "aria-label": "Recipe",
        className: classes.avatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "R"),
      action: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "aria-label": "Settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreVertIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })),
      title: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardMedia, {
      className: classes.media,
      image: "/static/images/cards/paella.jpg",
      title: "Paella dish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      color: "textSecondary",
      component: "p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardActions, {
      disableSpacing: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Add to favorites",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FavoriteIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Share",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShareIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: clsx(classes.expand, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.expandOpen, expanded)),
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "Show more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExpandMoreIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Collapse, {
      "in": expanded,
      timeout: "auto",
      unmountOnExit: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Method:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xF3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Set aside off of the heat to let rest for 10 minutes, and then serve."))));
  }))));
}

RecipeReviewCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(useStyles)(RecipeReviewCard));

/***/ })

})
//# sourceMappingURL=index.js.0e7ec37f02e984e93a9f.hot-update.js.map