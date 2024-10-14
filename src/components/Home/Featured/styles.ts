import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledComponent = styled(Stack)(() => ({
    width: '100%', 
    position:'absolute',
    top: 0, 
    left: 0, 
    padding: '100px 20px 10px 110px',
    zIndex: 9,
}));

export const StyledCategory = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[500],
    fontSize: '30px',
    textTransform: 'uppercase',

    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '60px',
    fontWeight: 900,
    textTransform: 'uppercase',
    
    [theme.breakpoints.down('md')]: {
        fontSize: '25px',
    },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '30px',

    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

export const StyledImgContainer = styled(Stack)(() => ({
  width: '100%', 
  position:'absolute', 
  top: 0, 
  left: 0, 
}));

export const StyledImg = styled('img')(() => ({
    width: '100%', 
    height:'100vh', 
    objectFit: 'cover'
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  outline: 'none',
  border: 'none',
}));

export const StyledButton = styled(Button,  {
    shouldForwardProp: (prop) => prop !== 'isPlay',
})<{isPlay?: boolean}>(({ isPlay, theme }) => ({
    borderRadius: '50px',
    background: isPlay ? theme.palette.common.white : theme.palette.primary.main,
    color: isPlay ? theme.palette.common.black : theme.palette.common.white
}));