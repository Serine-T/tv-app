import { useEffect, useState } from "react";
import { useAppSelector } from "@redux/app/hooks";
import { selectVideo } from "@redux/slices/video/selectors";
import { convertDuration, getImagePath } from "@utils/helpers";
import { StyledButton, StyledCategory, StyledComponent, StyledImg, StyledImgContainer, StyledText, StyledTitle, StyledVideo } from "./styles";
import moment from "moment";
import Stack from "@mui/material/Stack";

const Featured = () => {
    const { featured, lastViewed, isPlay } = useAppSelector(selectVideo);
    const videoToDisplay = lastViewed || featured;

    const [isLoading, setIsLoading] = useState(true); 

    const {
        Category,
        CoverImage = '',
        Description,
        Title,
        Date,
        Duration = 0,
        MpaRating,
        VideoUrl,
    } = videoToDisplay || {};

    useEffect(() => {
        setIsLoading(true);

        if (isPlay) {
            const timer = setTimeout(() => {
                setIsLoading(false); 
            }, 2000); 

            return () => clearTimeout(timer); 
        }
    }, [isPlay, videoToDisplay]); 

    return (
        <>
            <StyledComponent>
                <StyledCategory>{Category}</StyledCategory>
                <StyledTitle>{Title}</StyledTitle>
                <Stack direction="row" gap="10px">
                    <StyledText>{moment(Date).year()}</StyledText>
                    <StyledText>{MpaRating}</StyledText>
                    <StyledText>{convertDuration(Duration)}</StyledText>
                </Stack>
                <StyledText>{Description}</StyledText>
                {isLoading && (
                    <Stack direction="row" gap="10px" mt={2}>
                        <StyledButton isPlay variant="contained">Play</StyledButton>
                        <StyledButton variant="outlined">More Info</StyledButton>
                    </Stack>
                )}
            </StyledComponent>

            <StyledImgContainer>
                {isLoading && CoverImage ? ( // Show cover image while loading
                    <StyledImg alt="" src={getImagePath(CoverImage)} />
                ) : (
                    VideoUrl && (
                        <StyledVideo autoPlay loop muted playsInline>
                            <source src={VideoUrl} />
                            Your browser does not support the video tag.
                        </StyledVideo>
                    )
                )}
            </StyledImgContainer>
        </>
    );
};

export default Featured;
