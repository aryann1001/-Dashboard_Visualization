import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Button, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);
  const percentage = (count / 100) * 100;

  const springProps = useSpring({
    background: `linear-gradient(to right, #4caf50 ${percentage}%, #f0f0f0 ${percentage}%)`,
  });

  return (
    <animated.div style={{ ...springProps, width: '100%', height: '25vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4">Count: {count}</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>Decrement</Button>
        <Button variant="outlined" color="error" onClick={() => setCount(0)} style={{ marginLeft: '8px' }}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;