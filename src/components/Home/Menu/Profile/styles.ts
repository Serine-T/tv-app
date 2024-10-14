import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Stack)(() => ({
  display: 'flex', 
  gap: '10px',
}));

export const ProfilePicture = styled(Stack)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '50px',
  color: 'white',
  fontSize: '30px',
}));