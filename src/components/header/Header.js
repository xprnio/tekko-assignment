import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import useStyles from './Header.styles';


const Header = () => {
  const classes = useStyles();

  return (<AppBar position="static">
    <Toolbar>
      <Container className={ classes.navSpacing }>
        <div>

          <Typography variant="h6">
            DexAssign
          </Typography>
        </div>
        <div className={ classes.navBtns }>
          <a href="/">
            <Button color="inherit">Login</Button>
          </a>
          <a href="/register">
            <Button color="inherit">Register</Button>
          </a>
        </div>
      </Container>

    </Toolbar>
  </AppBar>);
};

export default Header;
