import { FormControl, TextField } from '@material-ui/core';
import React from 'react';
import { AuthForm } from '../components';

const Register = () => {
  return (
    <>
      <AuthForm>
        <FormControl fullWidth>
          <TextField
            id="standard-error-helper-text"
            label="Firstname"
          />
          <FormControl fullWidth>
            <TextField
              id="standard-error-helper-text"
              label="Lastname"
            />
          </FormControl>
        </FormControl>
      </AuthForm>
    </>
  );
};

export default Register;
