import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/material';

function Registration() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pdate, setPdate] = useState('');
  const [pproblem, setPproblem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        name,
        age,pdate,pproblem,
      email,
      password,
    });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" style={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} p={5} pt={10} component={Paper} elevation={6} square>
          <Box
            style={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar style={{ m: 1, bgcolor: 'secondary.main' }} variant="rounded">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <p>* fill the form correctly, once you signup details can't be updated *</p>
            <form onSubmit={handleSubmit} style={{ mt: 1 }}>
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="User Name"
                name="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Number"
                label="Your Age"
                name="age"
                autoFocus
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Number"
                label="Last Month Menstrual cycle date"
                name="Pdate"
                autoFocus
                value={pdate}
                onChange={(e) => setPdate(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                id="text"
                label="Do you have any Menstrual related problem "
                name="Pproblem"
                autoFocus
                value={pproblem}
                onChange={(e) => setPproblem(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary" // or color="secondary"
                style={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Registration;
