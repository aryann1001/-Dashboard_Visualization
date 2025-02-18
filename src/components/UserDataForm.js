// Updated UserDataForm.js
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

const UserDataForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [unsaved, setUnsaved] = useState(false);

  useEffect(() => {
    const handleUnload = (e) => {
      if (unsaved) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [unsaved]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Date.now();
    const userData = { id: userId, name, address, email, phone };
    localStorage.setItem('userData', JSON.stringify(userData));
    setUnsaved(false);
    alert('Data saved!');
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '50%', p: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            User Data Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setName(e.target.value);
                setUnsaved(true);
              }}
              required
            />
            <TextField
              label="Address"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setAddress(e.target.value);
                setUnsaved(true);
              }}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setEmail(e.target.value);
                setUnsaved(true);
              }}
              required
            />
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setPhone(e.target.value);
                setUnsaved(true);
              }}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
export default UserDataForm;