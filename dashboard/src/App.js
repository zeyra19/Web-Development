import React,{useState} from 'react';
import './App.css';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
          <LocalLibraryIcon />
        </IconButton>
        <Typography variant='h5' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>zeyrarararara</Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color='inherit'>CART</Button>
          <Button color='inherit'>CURT</Button>
          <Button color='inherit'>ZART</Button>
          <Button color='inherit'>ZORT</Button>
        </Box>


        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' edge='start' color='inherit'>
            <MenuIcon />
          </IconButton>
        </Box>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
          <LocalLibraryIcon />
        </IconButton>
        <Typography variant='h5' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>zeyrarararara</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
