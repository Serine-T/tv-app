import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledContainer = styled(Stack)(() => ({
    height: '100vh', 
    width: '100%', 
    position:'relative',
}));

export const StyledComponent = styled(Stack)(() => ({
    width: '100%', 
    position:'absolute',
    top: 0, 
    left: 0, 
    zIndex: 10,
    padding: '100px 150px'
}));

export const StyledCategory = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    fontSize: '30px',
    textTransform: 'uppercase'
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '60px',
    fontWeight: 900,
    textTransform: 'uppercase'
}));

export const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '30px',
}));

export const StyledImgContainer = styled(Stack)(() => ({
  width: '100%', 
  position:'absolute', 
  top: 0, 
  left: 0, 
  zIndex: 9
}));

export const StyledImg = styled('img')(() => ({
    width: '100%', 
    height:'100vh', 
    objectFit: 'cover'
}));