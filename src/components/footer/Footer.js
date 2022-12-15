import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import footerlogoimg from '../../assets/icons/headerlogo.svg';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '192px' }}>
      <Box sx={{ height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton>
          <img src={footerlogoimg} alt="logo" />
        </IconButton>
      </Box>
      <Box sx={{ height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button sx={{ color: 'white' }}>Мой профиль</Button>
        <Button sx={{ color: 'white' }}>Избранные новости</Button>
      </Box>
    </Box>
  );
};

export default Footer;
