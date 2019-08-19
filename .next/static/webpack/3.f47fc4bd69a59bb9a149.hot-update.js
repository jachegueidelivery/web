webpackHotUpdate(3,{

/***/ "./components/MostrarEmpresas.js":
/*!***************************************!*\
  !*** ./components/MostrarEmpresas.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostrarEmpresas; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _ApiRest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ApiRest */ "./components/ApiRest.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _db_empresas_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../db/empresas.json */ "./db/empresas.json");
var _db_empresas_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/empresas.json */ "./db/empresas.json", 1);





var _jsxFileName = "D:\\node\\delivery\\components\\MostrarEmpresas.js";











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, theme.typography.button, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textAlign: "center",
      boxShadow: "0px 0px 15px 0px rgba(10,10,10,0.1)"
    }),
    cardMedia: {
      paddingTop: "56.25%" // 16:9

    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer !important"
    },
    _grid: {
      cursor: "pointer !important"
    }
  };
});
/**
 * Mostra os ícones das empresas
 */

function MostrarEmpresas() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    hits: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      empresas = _useState2[0],
      setEmpresas = _useState2[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ApiRest__WEBPACK_IMPORTED_MODULE_13__["default"].get("/empresas");

              case 2:
                result = _context.sent;
                setEmpresas(result.data); //setEmpresas(dataEmpresasJSON);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  function mouseOverStyle(ev) {
    ev.preventDefault();
    ev.target.classList.add("hoverUp");
  }

  function mouseOutStyle(ev, id) {
    ev.preventDefault();
    ev.target.classList.remove("hoverDown");
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(empresas).map(function (empresa, _key) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      key: _key,
      title: "Clique para entrar em " + empresa.nome_fantasia,
      xs: 12,
      sm: 6,
      md: 4,
      className: classes._grid,
      onClick: function onClick() {
        window.location.href = empresa.url.toLowerCase();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.card,
      onMouseOut: function onMouseOut(ev) {
        return mouseOutStyle(ev, empresa.id);
      },
      onMouseOver: function onMouseOver(ev) {
        return mouseOverStyle(ev, empresa.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.cardMedia,
      image: empresa.logomarca,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.cardContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      gutterBottom: true,
      variant: "h5",
      component: "h2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, empresa.nome_fantasia), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, " ", empresa.telefone), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, empresa.descricao)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      color: "primary",
      dataobj: empresa,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "IR PARA A LOJA"))));
  })));
}

/***/ })

})
//# sourceMappingURL=3.f47fc4bd69a59bb9a149.hot-update.js.map