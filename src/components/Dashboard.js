// File: src/components/Dashboard.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { useSpring, animated } from '@react-spring/web';

const Dashboard = () => {
  const fadeProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 170, friction: 20 },
  });

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  // Chart data for example
  const data = {
    labels: ['Name', 'Address', 'Email', 'Phone'],
    datasets: [
      {
        label: 'User Data Length',
        data: [
          userData.name ? userData.name.length : 0,
          userData.address ? userData.address.length : 0,
          userData.email ? userData.email.length : 0,
          userData.phone ? userData.phone.length : 0,
        ],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    window.location.href = '/signin';
  };

  return (
    <animated.div style={fadeProps}>
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Box sx={{ width: '60%', mb: 2 }}>
          <Bar data={data} />
        </Box>
        <Button variant="contained" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Box>
    </animated.div>
  );
};

export default Dashboard;
