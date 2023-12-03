import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ marginBottom: '1.5em', color: '#ffcc00' }}>
              Company Name
            </Typography>
            <Typography style={{ marginBottom: '0.5em' }}>About Us</Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ marginBottom: '1.5em', color: '#ffcc00' }}>
              Services
            </Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Service 1</Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Service 2</Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Service 3</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom style={{ marginBottom: '1.5em', color: '#ffcc00' }}>
              Follow Us
            </Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Facebook</Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Twitter</Typography>
            <Typography style={{ marginBottom: '0.5em' }}>Instagram</Typography>
          </Grid>
        </Grid>
      </Container>
   
    </footer>
  );
};

export default Footer;

