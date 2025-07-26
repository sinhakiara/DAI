import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Workers', icon: <PeopleIcon />, path: '/workers' },
  { text: 'Tasks', icon: <AssignmentIcon />, path: '/tasks' },
  { text: 'Resources', icon: <StorageIcon />, path: '/resources' },
  { text: 'System Logs', icon: <ListAltIcon />, path: '/logs' },
  { text: 'API Docs', icon: <DescriptionIcon />, path: '/docs' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <Drawer variant="permanent" sx={{ width: 220, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 220, boxSizing: 'border-box' } }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;