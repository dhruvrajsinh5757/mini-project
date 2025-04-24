import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            AgriTrack
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/transactions"
          >
            Transactions
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/add"
          >
            Add Transaction
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 