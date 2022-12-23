import { Box, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('rgba(126, 91, 194, 1)'),
  backgroundColor: 'rgba(126, 91, 194, 1)',
  '&:hover': {
    backgroundColor: 'rgba(100, 80, 140, 1)',
  },
}));

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography>Фильтрация</Typography>
          <FormGroup>
            <Box>
              <FormControlLabel
                control={<Checkbox color="primary" value="checkedA" />}
                label="Спорт"
              ></FormControlLabel>
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox color="primary" value="checkedA" />}
                label="Политика"
              ></FormControlLabel>
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox color="primary" value="checkedA" />}
                label="Звезды"
              ></FormControlLabel>
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox color="primary" value="checkedA" />}
                label="Искусство"
              ></FormControlLabel>
            </Box>
            <Box>
              <FormControlLabel
                control={<Checkbox color="primary" value="checkedA" />}
                label="Мода"
              ></FormControlLabel>
            </Box>
            <ColorButton variant="contained">Применить</ColorButton>
          </FormGroup>
        </Box>
        <Box></Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
