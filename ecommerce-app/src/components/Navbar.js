import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce Store
        </Typography>
        <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/catalogue" startIcon={<StoreIcon />}>
          Catalogue
        </Button>
        <Button color="inherit" component={Link} to="/contact" startIcon={<ContactMailIcon />}>
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 