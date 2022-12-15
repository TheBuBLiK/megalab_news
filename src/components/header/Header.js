import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import headerimg from '../../assets/imgs/header.png';
import burgerimg from '../../assets/icons/burger.svg';
import searchimg from '../../assets/icons/search.svg';
import profileimg from '../../assets/icons/account.svg';
import headerlogoimg from '../../assets/icons/headerlogo.svg';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${headerimg})`,
        height: '240px',
        objectFit: 'cover',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', height: '20%', justifyContent: 'space-around' }}>
        <IconButton>
          <img src={headerlogoimg} alt="logo" />
        </IconButton>
        <Box>
          <IconButton>
            <img src={searchimg} alt="search" />
          </IconButton>
          <IconButton>
            <img src={profileimg} alt="profile" />
          </IconButton>
          <IconButton>
            <img src={burgerimg} alt="menu" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '80%', alignItems: 'center' }}>
        <Typography sx={{ color: 'white', fontSize: '72px' }}>Новости</Typography>
      </Box>
    </Box>
  );
};

export default Header;
