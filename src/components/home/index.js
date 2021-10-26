import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TotalCard from './TotalCard';
import TableItems from './TableItems';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '600px',
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="codeBarText"
            name="codeBarText"
            label="Code bar"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Item>
            <TableItems />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <TotalCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
