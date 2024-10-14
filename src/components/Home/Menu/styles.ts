import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const SidebarContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<{ isHovered: boolean }>(({ theme, isHovered }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: isHovered ? '100%' : '60px',
  height: '100vh',
  backgroundColor: theme.palette.grey[50],
  padding: '20px',
  transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out, opacity 0.3s ease-in-out',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  opacity: isHovered ? 0.8 : 1,
}));

export const MenuIcons = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: '100px',
  gap: '20px',
}));

export const HoveredMenuIcons = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
}));

export const MenuItem = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  color: selected ? 'white' : 'black',
  borderRadius: '10px',
  width: '100%',

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

export const StyledButtom = styled(Stack)(() => ({
  position: 'absolute',
  bottom: '10px',
}));
