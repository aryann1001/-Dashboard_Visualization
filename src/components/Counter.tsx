// File: src/components/Counter.tsx

import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Button, Typography } from '@mui/material';

// Define a maximum count for calculating the percentage.
const MAX_COUNT = 100;

// Create an animated version of Material UI's Box.
// This allows the style prop to accept animated values.
const AnimatedBox = animated(Box);

const Counter: React.FC = () => {
  // Local state for the counter.
  const [count, setCount] = useState<number>(0);
  
  // Calculate the percentage fill based on the count.
  const percentage = (count / MAX_COUNT) * 100;
  
  // Use react-spring to animate the background.
  const springProps = useSpring({
    background: `linear-gradient(to right, #ff0000 ${percentage}%, #ffffff ${percentage}%)`,
    config: { tension: 210, friction: 20 },
  });

  // Handlers for button actions.
  const increment = () => setCount((prev) => Math.min(prev + 10, MAX_COUNT));
  const decrement = () => setCount((prev) => Math.max(prev - 10, 0));
  const reset = () => setCount(0);

  return (
    <AnimatedBox
      sx={{
        width: '100%',
        height: '25vh', // Occupies 25% of the viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      style={springProps}  // Merges the animated styles (including animated background)
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Count: {count}
        </Typography>
        <Box sx={{ '& > *': { m: 1 } }}>
          <Button variant="contained" color="primary" onClick={increment}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="outlined" color="error" onClick={reset}>
            Reset
          </Button>
        </Box>
      </Box>
    </AnimatedBox>
  );
};

export default Counter;
