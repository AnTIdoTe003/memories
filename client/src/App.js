import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import memories from '../src/assets/memories.jpg'
import Posts from '../src/components/Posts/Posts'
import Form from "../src/components/Form/Form";
import useStyles from './styles'
const App = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App