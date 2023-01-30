import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { List, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Item = ({ icon, title, link, to, setSelected, selected }) =>
  <ListItem disablePadding sx={() => {
    return selected === title ? {

      backgroundColor: 'grey',
      opacity: [0.9, 0.8, 0.7],
    } : {};
  }} >
    <ListItemButton onClick={() => {
      setSelected(title)
      to(link)
    }}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  </ListItem>



const Sidebar = () => {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const drawerToggleHandler = () => {
    setOpen(prev => !prev);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={drawerToggleHandler}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <Item
            icon={<InboxIcon />}
            title="ss1"
            link="dashboard"
            to={(link) => { navigate(link) }}
            selected={selected}
            setSelected={setSelected}
          />
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar


