import React from 'react';
import { AppBar, Toolbar, Typography, Box, Chip } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Distributed Task Master Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Placeholder chips for user info, JWT status, health, breadcrumbs */}
          <Chip label="User: admin" color="primary" />
          <Chip label="JWT: Valid" color="success" />
          <Chip label="Health: OK" color="success" />
          <Chip label="Dashboard" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;