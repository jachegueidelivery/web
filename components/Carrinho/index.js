import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Loadable from 'react-loadable';
import LazyLoad from '../LazyLoad';
import LocalStorageHandler from '../LocalStorageHandler';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

const DialogFormConfirm = Loadable({
	loader: () => import('../DialogFormConfirm'),
	loading() {
		return <LazyLoad height="30px" margintop="5px" />;
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	menuButton: {
		marginRight: theme.spacing(0),
	},
	title: {
		flexGrow: 1,
		border: '0px solid lime',
	},
	quantidade: {
		textAlign: 'right',
		width: 40,
		paddingTop: 5,
		paddingBottom: 5,
		display: 'inline',
		border: '0',
		borderBottom: '1px solid #ccc',
		position: 'relative',
		top: -4,
	},
	cardAvatar: {
		border: '1px solid red',
	},
	cardContent: {
		border: '1px solid lime',
	},
	cardActions: {
		border: '1px solid blue',
	},
	valorUnitario: {
		border: '0px solid red',
		color: 'rgb(244,67,54)',
		[theme.breakpoints.up('xs')]: {
			fontWeight: 'bold',
		},
	},
	mdlCard: {
		flexDirection: 'column',
		fontSize: '16px',
		fontWeight: 400,
		overflow: 'hidden',
		zIndex: 1,
		position: 'relative',
		background: '#fff',
		borderRadius: '2px',
		boxSizing: 'border-box',
	},
	cardItemMenu: {
		[theme.breakpoints.up('xs')]: {
			width: '100%',
		},
		[theme.breakpoints.up('sm')]: {
			width: 450,
		},
		[theme.breakpoints.up('md')]: {
			width: 450,
		},
		[theme.breakpoints.up('lg')]: {
			width: 450,
		},
		[theme.breakpoints.up('xl')]: {
			width: 450,
		},
		margin: '0px auto',
		minHeight: '10px',
	},
	info_item: {
		float: 'none',
	},
	nomeItemMenu: {
		fontFamily: 'Lato',
		color: '#444',
		fontSize: '18px',
		margin: '0',
		padding: '0',
		marginTop: '0px',
		verticalAlign: 'baseline',
		textTransform: 'capitalize',
		fontWeight: 'bold',
		lineHeight: '35px',
	},
	descItemMenu: {
		fontFamily: 'Lato',
		color: '#444',
		fontSize: '12px',
		margin: 0,
		padding: 0,
		marginTop: '0px',
		verticalAlign: 'baseline',
		lineHeight: '14px',
		textTransform: 'capitalize',
	},
	img_prod: {
		width: '80px',
		height: '80px',
		float: 'left',
		margin: '10px',
		borderRadius: '5px',
		maxWidth: '100%',
	},
	mdlCard__actions: {
		fontSize: '12px',
		lineHeight: 'normal',
		width: '100%',
		backgroundColor: 'transparent',
		padding: '0px',
		boxSizing: 'border-box',
		borderTop: '0px solid rgba(0,0,0,.1)',
		borderBottom: '1px solid rgba(0,0,0,.1)',
	},
	myButton: {
		color: 'rgb(244,67,54)',
		border: 'none',
		borderRadius: '2px',
		display: 'block',
		width: 40,
		minWidth: '30px',
		padding: 0,
		margin: 0,
	},
}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = event => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const DataTRS = props => {
	const classes = useStyles();
	const [quantidade, setQuantidade] = useState(0);
	const [valorTotal, setValorTotal] = useState(0);
	const [observacao, setObservacao] = useState('');

	let produtos = [];

	const remover = id => {
		LocalStorageHandler.removeByIdInArray(id, 'products');
	};

	function addProduct(produto_id, qtd) {
		if (localStorage.getItem('products')) {
			produtos = JSON.parse(localStorage.getItem('products'));
		}

		//Pega o index
		let objIndex = produtos.findIndex(pedido => pedido.productId === produto_id);

		produtos[objIndex].quantidade = qtd;
		produtos[objIndex].observacao = '';
		produtos[objIndex].descricao = '';
		localStorage.setItem('products', JSON.stringify(produtos));
	}

	function add(produto_id, qtd) {
		let quant = parseInt(quantidade) + 1;
		setQuantidade(quant);
		let d = parseInt(qtd) + 1;
		addProduct(produto_id, d);
	}

	function subtract(produto_id, qtd) {
		let qt = parseInt(qtd) - 1;
		setQuantidade(qt);
		let d = parseInt(qtd) - 1;
		addProduct(produto_id, d);
	}

	function onChangeQuantidade(produto_id, ev) {
		let quant = parseInt(ev.target.value);
		console.log(quant);
		setQuantidade(quant);
		addProduct(produto_id, quant);
		setValorTotal((props.precoUnitario * parseInt(quant)).toFixed(2));
	}

	useEffect(() => {

		if (localStorage.getItem('products')) {

			produtos = JSON.parse(localStorage.getItem('products'));

			//Pega o index
			let objIndex = produtos.findIndex(pedido => pedido.productId === props.product_id);

			setQuantidade(produtos[objIndex].quantidade);
		
		}
/*
		if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
			setValorTotal(0);
			setQuantidade(0);
		}*/
	},[quantidade]);

	return (
		<div className={classes.cardItemMenu} id={props.product_id} title={props.product_name}>
			<div className={classes.mdlCard}>
				<div className={classes.info_item}>
					<Avatar alt={''} src={props.product_img} className={classes.img_prod} />
					<div className={classes.nomeItemMenu}>
						{props.product_name}
						<IconButton
							edge="end"
							className={classes.menuButton}
							color="primary"
							size="small"
							onClick={() => remover(props.product_id)}
							title={`Clique para remover ${props.product_name} do carrinho.`}
						>
							<DeleteSharpIcon />
						</IconButton>
					</div>
					<div className={classes.descItemMenu}>
						{/*produto.descricao.length == 0 ? <>{props.product_name}</> : <>{produto.descricao}</>*/}
					</div>
				</div>
				<Grid container className={classes.mdlCard__actions}>
					<Grid item xs={7}>
						<Button className={classes.valorUnitario}>
							<b>R$ {props.product_preco != undefined ? props.product_preco.toFixed(2) : null}</b>
						</Button>
						{props.quant > 0 && <>Subtotal: R$ {props.subTotal.toFixed(2)}</>}
					</Grid>
					<Grid item container direction="row" justify="flex-end" alignItems="center" xs={5}>
						<Button
							onClick={() => {
								subtract(props.product_id, props.quant);
							}}
							disabled={props.quant < 1}
							className={classes.myButton}
						>
							<RemoveCircleOutlineRoundedIcon />
						</Button>
						<input
							type="number"
							onChange={ev => onChangeQuantidade(props.product_id, ev)}
							value={quantidade}
							className={classes.quantidade}
						/>
						<Button
							className={classes.myButton}
							onClick={() => {
								add(props.product_id, props.quant);
							}}
						>
							<AddCircleOutlineIcon />
						</Button>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

const Carrinho = props => {
	
	const classes = useStyles();

	const [data, setData] = useState({});

	const [openDialog, setOpenDialog] = useState(!1);

	let _valorTotal = 0;

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('products')));
	});

	return (
		<React.Fragment>
			<CssBaseline />
			<div style={{ position: 'relative' }}>
				<AppBar position="static">
					<Toolbar variant="dense" style={{ padding: 0, paddingLeft: 15, paddingRight: 5 }}>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<ShoppingCartSharpIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" className={classes.title}>
							<b>MEU CARRINHO</b>
						</Typography>
						<IconButton
							edge="end"
							color="inherit"
							aria-label="menu"
							className={classes.menuButton}
							onClick={() => {
								props.fecharMenu(true);
							}}
						>
							<CloseSharpIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<div>
					{/* {Array.isArray(props.data) && ( */}
						<>
							{data.map((product, index) => {
								let productName = product.nome;

								let produto_id = product.productId;

								let prodPicture = product.imagem;

								let amount = product.quantidade;

								let price = product.preco;

								let subTotal = price * amount;

								_valorTotal += subTotal;

								return (
									<DataTRS
										key={index}
										product_id={produto_id}
										product_name={productName}
										product_img={prodPicture}
										product_preco={price}
										subTotal={subTotal}
										quant={amount}
									/>
								);
							})}
						</>
					{/* )} */}
				</div>

				<AppBar position="static">
					<Toolbar variant="dense" style={{ padding: 0, paddingLeft: 15, paddingRight: 5 }}>
						<Grid item xs={7} sm={7}>
							<b>VALOR TOTAL: R$ {_valorTotal.toFixed(2)}</b>
						</Grid>
						<Grid item xs={5} sm={5}>
							<Button
								variant="contained"
								align="right"
								onClick={ev => setOpenDialog(true)}
								color="primary"
								className={classes.button}
							>
								<b>CONCLUIR PEDIDO</b>
							</Button>
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
			<DialogFormConfirm
				open={openDialog}
				onClose={() => {
					setOpenDialog(false);
				}}
			/>
		</React.Fragment>
	);
};

export default Carrinho;
