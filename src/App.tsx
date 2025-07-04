// src/App.tsx
import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import DashboardPage from './pages/dashboard/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) return <DashboardPage />;

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a GrowSimple
      </Typography>
      <Button variant="contained" onClick={() => setShowDashboard(true)}>
        Ir al Dashboard
      </Button>
    </Container>
  );
}

export default App;
