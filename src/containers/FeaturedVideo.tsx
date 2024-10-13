import { Box, Typography } from '@mui/material';

const FeaturedVideo: React.FC = () => {
  // const { featured } = useSelector((state: RootState) => state.video);
 const featured = {}
  return (
    <Box>
      {featured ? (
        <>
          {/* <img src={featured.coverImage} alt={featured.title} />
          <Typography variant="h5">{featured.title}</Typography>
          <Typography>{featured.description}</Typography>
          <Button variant="contained">Play</Button>
          <Button variant="outlined">More Info</Button> */}
        </>
      ) : (
        <Typography variant="h5">No Featured Video</Typography>
      )}
    </Box>
  );
};

export default FeaturedVideo;
