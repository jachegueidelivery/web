import React, { useState } from "react";
import ListaProdutos from "../db/produtos.json";
console.clear();

/* Product */
function Product(props) {

  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");

  function removeProduct(id) {
    let storageProducts = JSON.parse(localStorage.getItem("products"));
    let products = storageProducts.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
  }

  function addProduct() {
   
    let products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }

    //Desestruturação Javascript
    const { id } = props;

    //Pega o index
    let objIndex = products.findIndex(pedido => pedido.productId === id);

    //Caso não exista
    if (objIndex === -1) {
      products.push({
        productId: id,
        quantidade: quantidade + 1,
        observacao: observacao
      });

      localStorage.setItem("products", JSON.stringify(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;

      localStorage.setItem("products", JSON.stringify(products));
    }
  }

  function add() {

    setQuantidade(parseInt(quantidade) + 1)

    props.handleTotal(props.precoUnitario);
    
    addProduct();

    setValorTotal(props.precoUnitario * parseInt(quantidade))
  }

  function onChangeQuantidade(ev) {
    
    let quant = parseInt(ev.target.value);

    setQuantidade(quant)

    props.handleTotal(props.precoUnitario);

    addProduct();

    setValorTotal(props.precoUnitario * parseInt(quant));
  }

  function subtract() {
   
    setQuantidade(parseInt(state.quantidade) - 1);

    props.handleTotal(-props.precoUnitario);
   
    setValorTotal(props.precoUnitario * parseInt(quantidade));

  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  return (
    <div className="container" id={props.id}>
      <div
        className="row"
        style={{
          background: "white",
          boxShadow:
            "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12) !important",
          borderRadius: 3,
          padding: 20
        }}
      >
        <div className="col-sm-2">
          <figure className="figure">
            <img
              src={props.imagem}
              className="figure-img img-fluid rounded"
              alt={props.imagem}
            />
          </figure>
        </div>
        <div className="col-sm-8">
          <div className="row" style={{ marginBottom: 0 }}>
            <div className="col-sm-12">
              <h2>
                <b>{props.nome.toUpperCase()}</b>
              </h2>
            </div>
          </div>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-sm-12">{props.descricao}</div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea
                className="form-control"
                style={{ border: 0, borderBottom: "1px solid #ccc" }}
                placeholder="Observação"
                onChange={ev => {
                  alterarTextoTextArea(ev);
                }}
                value={observacao}
              >
                {observacao}
              </textarea>
            </div>
          </div>
        </div>
        <div
          className="col-sm-2 text-right"
          style={{ border: "0px solid red" }}
        >
          <h2>
            <b>R$ {props.precoUnitario.toFixed(2)}</b>
          </h2>
          <h2>
            <b>R$ {valorTotal.toFixed(2)}</b>
          </h2>
          QUANT: {quantidade}
          <br />
          <div className="btn-group" role="group">
            <button
              className="btn btn-info btn-lg"
              onClick={subtract}
              disabled={quantidade < 1}
            >
              -1
            </button>
            <input
              type="number"
              onChange={ev => onChangeQuantidade(ev)}
              value={quantidade}
              style={{ width: 40 }}
            />
            <button className="btn btn-info btn-lg" onClick={add}>
              +1
            </button>
          </div>
        </div>
        <br />
      </div>
      <hr />
    </div>
  );
}

/* COMPONENT: TotalComponent */
const TotalComponent = props => {
  let total = props.total.toFixed(2);

  const confirmarPedido = () => {
    let pedidoId = 2;

    let storageProducts = JSON.parse(localStorage.getItem("products"));

    let objIndex = storageProducts.findIndex(
      pedido => pedido.productId === pedidoId
    );

    //Update object's name property.
    storageProducts[objIndex].quantidade = 2;

    storageProducts[objIndex].observacao = "Laila";

    //Log object to console again.
    console.log(storageProducts);
    console.log(storageProducts[objIndex]);
    localStorage.setItem("products", JSON.stringify(storageProducts));
  };
  return (
    <div
      className="container"
      style={{
        marginTop: "30px",
        backgroundColor: "#F6F6F6",
        padding: "10px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center text-muted">
            <h2>
              TOTAL A PAGAR: <b>R$ {total}</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              onClick={confirmarPedido}
              className="btn btn-info btn-lg"
              style={{ border: "0px solid green" }}
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

/* ProductList */
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: ListaProdutos });
    }, 1000);
  }

  calculateTotal(precoUnitario) {
    this.setState({
      total: this.state.total + precoUnitario
    });
    console.log(this.state.total);
  }

  showProduct(descricao) {
    console.log(descricao);
    alert(descricao);
  }

  render() {
    if (!this.state.productList)
      return (
        <div className="container">
          <div className="text-center" role="alert">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            Carregando...
          </div>
        </div>
      );
    var component = this;

    var products = this.state.productList.map((product, _key) => (
      <React.Fragment key={_key}>
        <Product
          id={product.id}
          nome={product.nome}
          imagem={product.imagem}
          precoUnitario={product.preco}
          descricao={product.descricao}
          handleTotal={component.calculateTotal}
        />
      </React.Fragment>
    ));

    return (
      <div className="container">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Início</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Lista de Produtos
              </li>
            </ol>
          </nav>
          <h1>Lista</h1>
        </div>
        <hr />
        <div className="row">
          {products}
          <TotalComponent total={this.state.total} />
        </div>
      </div>
    );
  }
}
