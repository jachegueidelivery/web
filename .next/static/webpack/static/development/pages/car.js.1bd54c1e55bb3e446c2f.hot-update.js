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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _db_produtos_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../db/produtos.json */ "./db/produtos.json");
var _db_produtos_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/produtos.json */ "./db/produtos.json", 1);








var _jsxFileName = "D:\\node\\delivery-rsvtelecom-com-br\\pages\\car.js";


console.clear();
/* Product */

var Product =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Product, _React$Component);

  function Product(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Product).call(this, props));
    _this.state = {
      quantidade: 0,
      valorTotal: 0,
      descricao: "",
      observacao: ""
    };
    _this.add = _this.add.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.subtract = _this.subtract.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "removeProduct",
    value: function removeProduct(id) {
      var storageProducts = JSON.parse(localStorage.getItem("products"));
      var products = storageProducts.filter(function (product) {
        return product.id !== id;
      });
      localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    }
  }, {
    key: "addProduct",
    value: function addProduct() {
      var products = [];

      if (localStorage.getItem("products")) {
        products = JSON.parse(localStorage.getItem("products"));
      } //Desestruturação Javascript


      var id = this.props.id;
      var _this$state = this.state,
          quantidade = _this$state.quantidade,
          observacao = _this$state.observacao; //Pega o index

      var objIndex = products.findIndex(function (pedido) {
        return pedido.productId === id;
      }); //Caso não exista

      if (objIndex === -1) {
        products.push({
          productId: id,
          quantidade: quantidade + 1,
          observacao: observacao
        });
        localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
      } else {
        products[objIndex].productId = id;
        products[objIndex].quantidade = quantidade + 1;
        products[objIndex].observacao = observacao;
        localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
      }
    }
  }, {
    key: "add",
    value: function add() {
      var _this2 = this;

      this.setState({
        quantidade: this.state.quantidade + 1
      });
      this.props.handleTotal(this.props.precoUnitario);
      this.setState(function (state, props) {
        _this2.addProduct();

        return {
          valorTotal: _this2.props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(state.quantidade)
        };
      });
    }
  }, {
    key: "subtract",
    value: function subtract() {
      var _this3 = this;

      this.setState({
        quantidade: this.state.quantidade - 1
      });
      this.props.handleTotal(-this.props.precoUnitario);
      this.setState(function (state, props) {
        return {
          valorTotal: _this3.props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(state.quantidade)
        };
      });
    }
  }, {
    key: "alterarTextoTextArea",
    value: function alterarTextoTextArea(ev) {
      this.setState({
        observacao: ev.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        style: {
          background: "white",
          boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12) !important",
          borderRadius: 3,
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("figure", {
        className: "figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: this.props.imagem,
        className: "figure-img img-fluid rounded",
        alt: this.props.imagem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        style: {
          marginBottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, this.props.nome.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        style: {
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.props.descricao)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        className: "form-control",
        style: {
          border: 0,
          borderBottom: "1px solid #ccc"
        },
        placeholder: "Observa\xE7\xE3o",
        onChange: function onChange(ev) {
          _this4.alterarTextoTextArea(ev);
        },
        value: this.state.observacao,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.state.observacao)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-sm-2 text-right",
        style: {
          border: "0px solid red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "R$ ", this.props.precoUnitario.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "R$ ", this.state.valorTotal.toFixed(2))), "QUANT: ", this.state.quantidade, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "btn-group",
        role: "group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-info btn-lg",
        onClick: this.subtract,
        disabled: this.state.quantidade < 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "-1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "number",
        value: this.state.quantidade,
        style: {
          width: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-info btn-lg",
        onClick: this.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "+1"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/* TotalComponent */


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
    localStorage.setItem("products", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(storageProducts));
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "col text-center text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "TOTAL A PAGAR: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "R$ ", total)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "col text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: confirmarPedido,
    className: "btn btn-info btn-lg",
    style: {
      border: "0px solid green"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Confirmar Pedido"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  })));
};
/* ProductList */


var ProductList =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ProductList, _React$Component2);

  function ProductList(props) {
    var _this5;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProductList);

    _this5 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductList).call(this, props));
    _this5.state = {
      total: 0,
      productList: ""
    };
    _this5.calculateTotal = _this5.calculateTotal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this5));
    _this5.showProduct = _this5.showProduct.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this5));
    return _this5;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      setTimeout(function () {
        _this6.setState({
          productList: _db_produtos_json__WEBPACK_IMPORTED_MODULE_9__
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
      if (!this.state.productList) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }), "Carregando..."));
      var component = this;
      var products = this.state.productList.map(function (product, _key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          key: _key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Product, {
          id: product.id,
          nome: product.nome,
          imagem: product.imagem,
          precoUnitario: product.preco,
          descricao: product.descricao,
          handleTotal: component.calculateTotal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ol", {
        className: "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "breadcrumb-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "In\xEDcio")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "breadcrumb-item active",
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "Lista de Produtos"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "Lista")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, products, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TotalComponent, {
        total: this.state.total,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      })));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=car.js.1bd54c1e55bb3e446c2f.hot-update.js.map