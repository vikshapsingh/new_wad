import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Box, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Sample cart items (in a real app, this would come from a state management solution)
const initialCartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    quantity: 1,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    quantity: 2,
    image: 'https://via.placeholder.com/150',
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color="textSecondary">${item.price}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center">
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, -1)}
                        size="small"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, 1)}
                        size="small"
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" justifyContent="flex-end">
                      <Typography variant="h6" sx={{ mr: 2 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton
                        onClick={() => handleRemoveItem(item.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                  Subtotal: ${calculateTotal().toFixed(2)}
                </Typography>
                <Typography variant="body1">Shipping: $5.00</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Total: ${(calculateTotal() + 5).toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Cart; 