 import React from 'react'
 import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
 import { ShoppingCart } from '@material-ui/icons';

 import logo from './../../assets/shoes.jpg';
 import useStyles from './styles';
 
 const Navbar = () => {
    const classes = useStyles();
   return (
     <>
     <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography>
                <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                Commerce.js
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>
        </Toolbar>
     </AppBar>
     </>
   )
 }
 
 export default Navbar