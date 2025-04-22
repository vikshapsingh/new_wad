import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    description: 'Description for Product 1',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 39.99,
    description: 'Description for Product 2',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 49.99,
    description: 'Description for Product 3',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 59.99,
    description: 'Description for Product 4',
    image: 'https://via.placeholder.com/300',
  },
];

function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Catalogue
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                    ${product.price}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Catalogue; 