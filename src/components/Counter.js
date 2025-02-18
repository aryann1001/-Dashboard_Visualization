import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Button, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Calculate a percentage based on a max count of 100.
  const percentage = (count / 100) * 100;

  // React Spring animation for the background.
  const springProps = useSpring({
    background: `linear-gradient(to right, #4caf50 ${percentage}%, #f0f0f0 ${percentage}%)`,
  });

  return (
    <animated.div
      style={{
        ...springProps,
        width: '100%',
        height: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4">Count: {count}</Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount((prev) => prev + 1)}
          style={{ marginRight: 8 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          style={{ marginRight: 8 }}
        >
          Decrement
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;


// npm install react-router-dom
// npm install @mui/material @emotion/react @emotion/styled
// npm install @react-spring/web
// npm install react-quill quill
// npm install react-chartjs-2 chart.js
// npm install @react-oauth/google jwt-decode
