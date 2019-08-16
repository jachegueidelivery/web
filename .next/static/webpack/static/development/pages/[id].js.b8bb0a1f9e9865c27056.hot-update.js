webpackHotUpdate("static\\development\\pages\\[id].js",{

/***/ "./components/Produtos.js":
/*!********************************!*\
  !*** ./components/Produtos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Produtos; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");



var _jsxFileName = "E:\\delivery-rsvtelecom-com-br\\components\\Produtos.js";











var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    input: {
      marginLeft: 8,
      flex: 1,
      borderRadius: 15,
      padding: 15
    },
    content: {
      flex: '1 0 auto'
    },
    listaProdutos: {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);',
      display: 'flex',
      flexWrap: 'nowrap',
      border: '0px solid red',
      flexDirection: 'row',
      height: 160,
      marginTop: 10,
      backgroundColor: 'rgba(245,245,245,0.8)'
    },
    itemAvatar: {
      width: '20%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime',
      padding: 4
    },
    itemAvatarImg: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime'
    },
    itemContent: {
      width: '60%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      border: '0px solid lime',
      padding: 10
    },
    itemAcoes: {
      width: '20%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '0px solid lime',
      padding: 10,
      textAlign: 'center'
    },
    inputQuantidade: {
      border: 0,
      outline: 0,
      textAlign: 'center',
      width: 40
    }
  };
});
/**
 * Component: Produtos
 */

function Produtos(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      quantidade = _useState2[0],
      setQuantidade = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      valorTotal = _useState4[0],
      setValorTotal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      observacao = _useState6[0],
      setObservacao = _useState6[1];

  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])('(min-width:600px)');

  function addProduct() {
    var products = [];

    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    } //Desestrutura��o Javascript


    var id = props.id,
        nome = props.nome,
        imagem = props.imagem,
        precoUnitario = props.precoUnitario,
        descricao = props.descricao; //Pega o index

    var objIndex = products.findIndex(function (pedido) {
      return pedido.productId === id;
    }); //Caso n�o exista

    if (objIndex === -1) {
      products.push({
        productId: id,
        nome: nome,
        imagem: imagem,
        quantidade: quantidade + 1,
        observacao: observacao,
        preco: precoUnitario,
        descricao: descricao
      });
      localStorage.setItem('products', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem('products', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(products));
    }
  }

  function add() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) + 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * quant).toFixed(2));
  }

  function subtract() {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade) - 1;
    setQuantidade(quant);
    addProduct(); //props.handleTotal(-props.precoUnitario);

    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    var quant = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(ev.target.value);

    setQuantidade(quant); //props.handleTotal(props.precoUnitario);

    addProduct();
    setValorTotal((props.precoUnitario * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quant)).toFixed(2));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (quantidade <= 0 || isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }
  }, [quantidade]);
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root,
    id: props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.listaProdutos,
    title: 'Clique para entrar em ' + props.nome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemAvatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: classes.itemAvatarImg,
    alt: "",
    src: props.imagem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, props.nome)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    wrap: "nowrap",
    title: props.descricao,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: true,
    zeroMinWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, props.descricao))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sub", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Kg")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), observacao.length == 0 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    wrap: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    htmlFor: "my-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Observa\xE7\xE3o:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "my-input",
    onChange: function onChange(ev) {
      alterarTextoTextArea(ev);
    },
    value: observacao,
    "aria-describedby": "my-helper-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.itemAcoes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "A partir de  ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "R$ ", props.precoUnitario.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Quantidade:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableFocusRipple: true,
    size: "small",
    variant: "contained",
    color: "primary",
    "aria-label": "Split button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: subtract,
    disabled: quantidade < 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(ev) {
      return onChangeQuantidade(ev);
    },
    value: quantidade,
    className: classes.inputQuantidade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "primary",
    variant: "contained",
    size: "small",
    "aria-haspopup": "true",
    value: "+",
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "+")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.chip,
    color: "primary",
    label: "SubTotal ".concat('\n\n', "R$ ", valorTotal),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  })))))));
}

/***/ })

})
//# sourceMappingURL=[id].js.b8bb0a1f9e9865c27056.hot-update.js.map