import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
} from '@mui/material';
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

function createData(date, title, text) {
  return { date, title, text };
}

const news = [
  createData(
    '26.12.2022',
    'Some news',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  ),
  createData(
    '26.12.2022',
    'Some news',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  ),
];

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex', margin: '34px 150px', justifyContent: 'space-between' }}>
        <Box sx={{ width: '20%' }}>
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
        <Box sx={{ width: '70%' }}>
          {news.map((info, index) => (
            <Box sx={{ display: 'flex' }}>
              <img src="" alt="newsImg" />
              <Box>
                <Typography>{info.date}</Typography>
                <Typography>{info.title}</Typography>
                <Typography>{info.text}</Typography>
                <a href="">Читать дальше</a>
                <IconButton>
                  <img src="" alt="shareImg" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
