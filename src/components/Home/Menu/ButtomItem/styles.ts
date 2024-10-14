import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  cursor: 'pointer'
}));

