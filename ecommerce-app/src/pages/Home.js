import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Featured Product 1',
    price: 49.99,
    description: 'Description for Featured Product 1',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 2,
    name: 'Featured Product 2',
    price: 59.99,
    description: 'Description for Featured Product 2',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 3,
    name: 'Featured Product 3',
    price: 69.99,
    description: 'Description for Featured Product 3',
    image: 'https://via.placeholder.com/400',
  },
];

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our E-Commerce Store
          </Typography>
          <Typography variant="h5" paragraph>
            Discover amazing products at great prices
          </Typography>
          <Button
            component={Link}
            to="/catalogue"
            variant="contained"
            color="secondary"
            size="large"
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" paragraph>
                    ${product.price}
                  </Typography>
                  <Button
                    component={Link}
                    to="/catalogue"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          bgcolor: 'grey.100',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start Shopping?
          </Typography>
          <Typography variant="h6" paragraph>
            Browse our extensive collection of products
          </Typography>
          <Button
            component={Link}
            to="/catalogue"
            variant="contained"
            color="primary"
            size="large"
          >
            Explore Products
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 