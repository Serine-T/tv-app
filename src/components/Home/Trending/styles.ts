import styled from 'styled-components';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

const StyledSwiperContainer = styled(Box)(() => ({
  maxWidth: '1280px',
  margin: '0 auto',
  bottom: 0,
  width: '100%',
  left: 0,
  zIndex: 9,
  padding: '20px',
}));

const StyledImageListItem = styled(ImageListItem)(() => ({
  cursor: 'pointer',
}));

export { StyledSwiperContainer, StyledImageListItem };
