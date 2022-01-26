import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './assets/memories.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';

const App = () => {
  return (
    <Container maxwidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <img src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={4}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
