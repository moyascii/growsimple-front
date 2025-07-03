import { Container, Typography, Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container 
      maxWidth="sm" 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" gutterBottom>
        ¡Hola, GrowSimple! 🚀
      </Typography>
      <Typography variant="body1" gutterBottom>
        Este es un ejemplo base usando React, TypeScript y MUI.
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Contador: {count}
      </Button>
    </Container>
  );
}

export default App;
