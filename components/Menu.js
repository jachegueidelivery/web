import React, {useState, useEffect} from "react";
import Menu from '@material-ui/core/Menu';
import Carrinho from './carrinho';
import LocalStorageHandler from './LocalStorageHandler';

const renderMenu = (props) =>{

  const [anchorEl, setAnchorEl] = useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [countPedidosLocal, setCountPedidosLocal] = useState(0);
  
  const [data, setData] = useState([]);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function onAtualizarCount(){
   setCountPedidosLocal(LocalStorageHandler.count('products'));
  }

  useEffect(() => {
    onAtualizarCount();
    //setData(JSON.parse(localStorage.getItem("products")));
  }, []);
	
  function handleProfileMenuOpen(event) {
    onAtualizarCount();
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    onAtualizarCount();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

   const menuId = 'primary-search-account-menu-dois';

   return(<Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.abrir}
      onClose={props.handleMenuClose}
    >	
	  <div style={{padding:10}}>
		<Carrinho count={countPedidosLocal} data={props.data} />
	  </div>
    </Menu>);
      
} 

export default renderMenu;