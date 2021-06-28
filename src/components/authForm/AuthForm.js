import React from 'react';
import { Card, Input, IconButton, CardActions, CardContent, Button, FormControl, TextField, InputLabel, InputAdornment } from '@material-ui/core';
import useStyles from "./AuthForm.styles";
import { Visibility, VisibilityOff } from '@material-ui/icons';

 function AuthForm ({ children } = {}) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return <Card className={classes.cardOverAll}>
    <CardContent>
      <div className="formLayout">
        <FormControl fullWidth>
          <TextField
            id="standard-error-helper-text"
            label="E-mail"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        { children }
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Login</Button>
    </CardActions>
  </Card>;
}

export default AuthForm;
