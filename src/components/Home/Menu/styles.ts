import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export const MenuContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: isOpen ? '100%' : '70px', // Changed to make sure icons are always visible
  height: '100vh',
  background: isOpen ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
  transition: 'width 0.4s ease, background 0.4s ease',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 0',
}));

export const ProfileSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ isOpen }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '20px',
  gap: '10px',
  visibility: isOpen ? 'visible' : 'hidden', // Ensure profile section is hidden when not open
}));

export const HoverListItem = styled(ListItem)<{ isOpen: boolean }>(({ isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: isOpen ? 'flex-start' : 'center', // Center icons when menu is collapsed
  width: '100%',
  padding: isOpen ? '10px 20px' : '10px',
  transition: 'all 0.4s ease',
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledImg = styled('img')(() => ({
  width: 24,
  height: 24,
}));

export const BottomMenu = styled(Box)({
  marginTop: 'auto',
  width: '100%',
  padding: '20px',
});
