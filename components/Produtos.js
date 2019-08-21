import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	input: {
		marginLeft: 8,
		flex: 1,
		borderRadius: 15,
		padding: 15,
	},
	content: {
		flex: '1 0 auto',
	},
	listaProdutos: {
		boxShadow:
			'0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);',
		display: 'flex',
		flexWrap: 'nowrap',
		border: '0px solid red',
		flexDirection: 'row',
		height: 160,
		marginTop: 10,
		backgroundColor: 'rgba(245,245,245,0.8)',
	},
	itemAvatar: {
		width: '20%',
		display: 'flex',
		flexWrap: 'nowrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		border: '0px solid lime',
		padding: 4,
	},
	itemAvatarImg: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexWrap: 'nowrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		border: '0px solid lime',
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
		padding: 10,
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
		textAlign: 'center',
	},
	inputQuantidade: {
		border: 0,
		outline: 0,
		textAlign: 'center',
		width: 40,
	},
}));

/**
 * Component: Produtos
 */
export default function Produtos(props) {
	
	const [quantidade, setQuantidade] = useState(0);
	const [valorTotal, setValorTotal] = useState(0);
	const [observacao, setObservacao] = useState('');

	const matches = useMediaQuery('(min-width:600px)');

	function addProduct() {
		let products = [];

		if (localStorage.getItem('products')) {
			products = JSON.parse(localStorage.getItem('products'));
		}

		//Desestruturação Javascript
		const { id, nome, imagem, precoUnitario, descricao } = props;

		//Pega o index
		let objIndex = products.findIndex(pedido => pedido.productId === id);

		//Caso não exista
		if (objIndex === -1) {
			products.push({
				productId: id,
				nome: nome,
				imagem: imagem,
				quantidade: quantidade + 1,
				observacao: observacao,
				preco: precoUnitario,
				descricao: descricao,
			});

			localStorage.setItem('products', JSON.stringify(products));
		} else {
			products[objIndex].productId = id;
			products[objIndex].quantidade = quantidade + 1;
			products[objIndex].observacao = observacao;
			products[objIndex].nome = nome;
			products[objIndex].imagem = imagem;
			products[objIndex].preco = precoUnitario;
			products[objIndex].descricao = descricao;
			localStorage.setItem('products', JSON.stringify(products));
		}
	}

	function add() {
		let quant = parseInt(quantidade) + 1;

		setQuantidade(quant);

		addProduct();

		setValorTotal((props.precoUnitario * quant).toFixed(2));
	}

	function subtract() {
		let quant = parseInt(quantidade) - 1;

		setQuantidade(quant);

		addProduct();

		setValorTotal(props.precoUnitario * quant);
	}

	function onChangeQuantidade(ev) {
		let quant = parseInt(ev.target.value);

		setQuantidade(quant);

		addProduct();

		setValorTotal((props.precoUnitario * parseInt(quant)).toFixed(2));
	}

	function alterarTextoTextArea(ev) {
		setObservacao(ev.target.value);
	}

	useEffect(() => {
		if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
			setValorTotal(0);
			setQuantidade(0);
		}
		props.callbackParent(quantidade);
	}, [quantidade]);
	
	/*useEffect(() => {
    		
  	},[quantidade])*/

	const classes = useStyles();
	return (
		<div className={classes.root} id={props.id}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={12}>
					<div className={classes.demo}>
						<div className={classes.listaProdutos} title={'Clique para entrar em ' + props.nome}>
							<div className={classes.itemAvatar}>
								{props.imagem ? (
									<img className={classes.itemAvatarImg} alt="" src={props.imagem} />
								) : (
									<div>b</div>
								)}
							</div>
							<div className={classes.itemContent}>
								<Typography>
									<b>{props.nome}</b>
								</Typography>
								<Grid container wrap="nowrap" title={props.descricao}>
									<Grid item xs zeroMinWidth>
										<Typography noWrap>{props.descricao}</Typography>
									</Grid>
								</Grid>
								<sub>
									<strong>Kg</strong>
								</sub>
								<br />
								{observacao.length === 0 && <br />}
								<Grid container wrap="nowrap">
									<FormControl fullWidth>
										<InputLabel htmlFor="my-input">Observação:</InputLabel>
										<Input
											id="my-input"
											onChange={ev => {
												alterarTextoTextArea(ev);
											}}
											value={observacao}
											aria-describedby="my-helper-text"
										/>
									</FormControl>
								</Grid>
							</div>
							<div className={classes.itemAcoes}>
								<br />
								<Typography>
									A partir de <br /> <b>R$ {props.precoUnitario.toFixed(2)}</b>
								</Typography>
								<small>Quantidade:</small>
								<ButtonGroup
									disableFocusRipple={true}
									size="small"
									variant="contained"
									color="primary"
									aria-label="Split button"
								>
									<Button onClick={subtract} disabled={quantidade < 1}>
										-
									</Button>
									<input
										type="number"
										onChange={ev => onChangeQuantidade(ev)}
										value={quantidade}
										className={classes.inputQuantidade}
									/>
									<Button
										color="primary"
										variant="contained"
										size="small"
										aria-haspopup="true"
										value="+"
										onClick={add}
									>
										+
									</Button>
								</ButtonGroup>
								<br />
								<Chip
									className={classes.chip}
									color="primary"
									label={`SubTotal ${'\n\n'}R$ ${valorTotal}`}
								/>
								<br />
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
