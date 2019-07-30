webpackHotUpdate("static\\development\\pages\\car.js",{

/***/ "./pages/car.js":
/*!**********************!*\
  !*** ./pages/car.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _db_produtos_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../db/produtos.json */ "./db/produtos.json");
var _db_produtos_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/produtos.json */ "./db/produtos.json", 1);









var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\pages\\car.js";


console.clear();
/* Product */

function Product(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState5, 2),
      descricao = _useState6[0],
      setDescricao = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState7, 2),
      observacao = _useState8[0],
      setObservacao = _useState8[1];

  function removeProduct(id) {
    var storageProducts = JSON.parse(localStorage.getItem("products"));
    var products = storageProducts.filter(function (product) {
      return product.id !== id;
    });
    localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(products));
  }

  function addProduct() {
    var products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    } //Desestruturação Javascript


    var id = props.id; //Pega o index

    var objIndex = products.findIndex(function (pedido) {
      return pedido.productId === id;
    }); //Caso não exista

    if (objIndex === -1) {
      products.push({
        productId: id,
        quantidade: quantidade + 1,
        observacao: observacao
      });
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(products));
    }
  }

  function add() {
    setQuantidade(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(quantidade) + 1);
    props.handleTotal(props.precoUnitario);
    addProduct();
    setValorTotal(props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(quantidade));
  }

  function onChangeQuantidade(ev) {
    var quant = ev.target.value;
    setQuantidade(quant);
    props.handleTotal(props.precoUnitario);
    addProduct();
    setValorTotal(props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(quant));
  }

  function subtract() {
    setQuantidade(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(state.quantidade) - 1);
    props.handleTotal(-props.precoUnitario);
    setValorTotal(props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(quantidade));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "container",
    id: props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    style: {
      background: "white",
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12) !important",
      borderRadius: 3,
      padding: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("figure", {
    className: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
    src: props.imagem,
    className: "figure-img img-fluid rounded",
    alt: props.imagem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    style: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, props.nome.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    style: {
      marginBottom: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, props.descricao)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
    className: "form-control",
    style: {
      border: 0,
      borderBottom: "1px solid #ccc"
    },
    placeholder: "Observa\xE7\xE3o",
    onChange: function onChange(ev) {
      alterarTextoTextArea(ev);
    },
    value: observacao,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, observacao)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-sm-2 text-right",
    style: {
      border: "0px solid red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "R$ ", props.precoUnitario.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "R$ ", valorTotal.toFixed(2))), "QUANT: ", quantidade, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btn-group",
    role: "group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn-info btn-lg",
    onClick: subtract,
    disabled: quantidade < 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "-1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    value: quantidade,
    style: {
      width: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn-info btn-lg",
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "+1"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }));
}
/* COMPONENT: TotalComponent */


var TotalComponent = function TotalComponent(props) {
  var total = props.total.toFixed(2);

  var confirmarPedido = function confirmarPedido() {
    var pedidoId = 2;
    var storageProducts = JSON.parse(localStorage.getItem("products"));
    var objIndex = storageProducts.findIndex(function (pedido) {
      return pedido.productId === pedidoId;
    }); //Update object's name property.

    storageProducts[objIndex].quantidade = 2;
    storageProducts[objIndex].observacao = "Laila"; //Log object to console again.

    console.log(storageProducts);
    console.log(storageProducts[objIndex]);
    localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(storageProducts));
  };

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: "30px",
      backgroundColor: "#F6F6F6",
      padding: "10px",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col text-center text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "TOTAL A PAGAR: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "R$ ", total)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    onClick: confirmarPedido,
    className: "btn btn-info btn-lg",
    style: {
      border: "0px solid green"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Confirmar Pedido"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })));
};
/* ProductList */


var ProductList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList).call(this, props));
    _this.state = {
      total: 0,
      productList: ""
    };
    _this.calculateTotal = _this.calculateTotal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.showProduct = _this.showProduct.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          productList: _db_produtos_json__WEBPACK_IMPORTED_MODULE_10__
        });
      }, 1000);
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal(precoUnitario) {
      this.setState({
        total: this.state.total + precoUnitario
      });
      console.log(this.state.total);
    }
  }, {
    key: "showProduct",
    value: function showProduct(descricao) {
      console.log(descricao);
      alert(descricao);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.productList) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "text-center",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), "Carregando..."));
      var component = this;
      var products = this.state.productList.map(function (product, _key) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          key: _key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Product, {
          id: product.id,
          nome: product.nome,
          imagem: product.imagem,
          precoUnitario: product.preco,
          descricao: product.descricao,
          handleTotal: component.calculateTotal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ol", {
        className: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "In\xEDcio")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "breadcrumb-item active",
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Lista de Produtos"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Lista")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, products, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TotalComponent, {
        total: this.state.total,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      })));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=car.js.69e485d2c061f3d84f48.hot-update.js.map