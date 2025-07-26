import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import WorkersPage from './pages/WorkersPage';
import TasksPage from './pages/TasksPage';
import ResourcesPage from './pages/ResourcesPage';
import LogsPage from './pages/LogsPage';
import DocsPage from './pages/DocsPage';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flex: 1, p: 2, overflow: 'auto' }}>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/workers" element={<WorkersPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/logs" element={<LogsPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
