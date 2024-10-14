import Typography from '@mui/material/Typography';
import { ProfilePicture, StyledContainer } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => (
  <StyledContainer direction="row">
    <ProfilePicture>
      <AccountCircleIcon />
    </ProfilePicture>
    <Typography color="white" pt="15px">
      Daniel
    </Typography>
  </StyledContainer>
);

export default Profile;
