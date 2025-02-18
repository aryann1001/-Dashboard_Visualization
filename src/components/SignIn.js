// File: src/components/SignIn.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwt_decode(token);

    // Save token & user info to localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('userEmail', decoded.email);

    // Redirect to dashboard
    navigate('/dashboard');
  };

  const handleGoogleError = () => {
    console.error('Google sign-in failed');
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '50%', p: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Sign In with Google
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
