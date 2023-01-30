import React, { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme';
import { IconButton, InputBase, useTheme } from '@mui/material';
import { Box } from '@mui/material'
import {
  Search as SearchIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon
} from '@mui/icons-material';



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display='flex' justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flex' >
        <IconButton><NotificationsOutlinedIcon /></IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
        <IconButton><PersonOutlinedIcon /></IconButton>
        <IconButton><SettingsOutlinedIcon /></IconButton>
      </Box>
    </Box>
  )
}

export default Topbar