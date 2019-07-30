import React, { useState, useEffect, createRef }  from "react";
import styled from 'styled-components';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Div = styled.div`
  display: flex;
  justify-content: center;
  width:400px;
  margin: 0px;
  border: 0px outset pink;
  &:hover {
   background-color: #ccc;
 }`;
 
const cssMedia = styled.div`
  margin: 0px;
  border: 3px outset pink;`;
 
 const Content = styled.div`
  width:60%;
  margin: 0px;`;
 
const cssActions = styled.div`
  width:20%;
  margin: 0px;
  `;

const Carrinho  = props =>{
	
	const classes = useStyles();

	const [data, setData] = useState([]);
		
	
	function onConfirmar(){
		alert('Não implementado');
	}

	 useEffect(() => {
		 setData(JSON.parse(localStorage.getItem('products')));
	 }, []);
	
	if(!data){
		return(
			<>
			Não há produtos ainda
			</>
		)
	}
	let valorTotal = 0;
	let Conteudo = data.map((produto, _k)=>{
	let quant = produto.quantidade;
	valorTotal += produto.preco;
		return <React.Fragment key={_k}>
		<Div>
			<cssMedia style={{width:"20%"}}>
				<img src={produto.imagem}
				style={{width:"100%", height:"100%"}}
				alt={produto.imagem} />
			</cssMedia>	
			<Content style={{width:"50%"}}>
				<h4 style={{margin:0, padding:0, paddingLeft:5}}>{'  '}{produto.nome}</h4>
			</Content>	
			<cssActions style={{width:"30%"}}>
				<h4 style={{margin:0, padding:0}}><small>qt:</small>{quant}</h4>
<h4 style={{margin:0, padding:0}}><small>Preço Uni:</small>R$ {produto.preco.toFixed(2)}</h4>
<h4 style={{margin:0, padding:0}}><small>Valor Total:</small>R$ {produto.preco * quant}</h4>
			</cssActions>
		</Div>
		<hr style={{border:0,borderTop:"1px solid #ddd"}}/>
		</React.Fragment>;
	});
	
	return(
		<>
		{Conteudo}


<AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <b>Valor total dos pedidos: {valorTotal} </b>
          </Typography>
          <Button color="secondary" onClick={onConfirmar} title="Clique para confirmar"><b>Confirmar</b></Button>
        </Toolbar>
      </AppBar>
			
		</>
	)
}


export default Carrinho;