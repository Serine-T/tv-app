import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const IconWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  width: '180px',
  height: '50px',
  alignItems: 'center',
  paddingLeft: '20px',
  borderRadius: '10px',
  backgroundColor: selected ? theme.palette.primary.main : 'transparent',
  color: 'white',
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

export const IconText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<{ isHovered: boolean }>(({ isHovered }) => ({
  marginLeft: '15px',
  opacity: isHovered ? 1 : 0,
  whiteSpace: 'nowrap',
  transition: 'opacity 0.3s ease-in-out',
}));
