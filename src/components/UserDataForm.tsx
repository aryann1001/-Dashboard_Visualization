// File: src/components/UserDataForm.tsx

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface UserData {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserDataForm: React.FC = () => {
  // Form field state
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Flag to track unsaved changes
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  // Add a beforeunload event listener to warn about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = ''; // Chrome requires returnValue to be set
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Auto-generate user ID using Date.now()
    const id = Date.now();
    const userData: UserData = { id, name, address, email, phone };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Reset unsaved changes flag
    setUnsavedChanges(false);

    // Optionally clear form fields after submission
    setName('');
    setAddress('');
    setEmail('');
    setPhone('');

    alert('User data saved successfully!');
  };

  // Generic input change handler to update state and flag unsaved changes
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setUnsavedChanges(true);
    };

  return (
    <Box sx={{ maxWidth: 600, margin: '2rem auto', padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={handleInputChange(setName)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Address"
          value={address}
          onChange={handleInputChange(setAddress)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={handleInputChange(setEmail)}
          margin="normal"
          type="email"
          required
        />
        <TextField
          fullWidth
          label="Phone"
          value={phone}
          onChange={handleInputChange(setPhone)}
          margin="normal"
          type="tel"
          required
        />
        <Box sx={{ marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Save Data
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserDataForm;
