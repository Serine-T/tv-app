import { useAppSelector } from "@redux/app/hooks";
import { selectVideo } from "@redux/slices/video/selectors";
import { convertDuration, getImagePath } from "@utils/helpers";
import { StyledCategory, StyledComponent, StyledContainer, StyledImg, StyledImgContainer, StyledText, StyledTitle } from "./styles";
import moment from "moment";
import Stack from "@mui/material/Stack";
import MenuSection from "../Menu";

const Featured = () => {
    const { featured } = useAppSelector(selectVideo);

    const {
        Category,
        CoverImage = '',
        Description,
        Title,
        Date, 
        Duration = 0,
        MpaRating,
    } = featured || {};

    console.log('featured', CoverImage, Description, Title)
    return (
        <StyledContainer>
            <MenuSection />
            <StyledComponent>
                <StyledCategory>{Category}</StyledCategory>
                <StyledTitle>{Title}</StyledTitle>
                <Stack direction="row" gap="10px">
                    <StyledText>{moment(Date).year()}</StyledText>
                    <StyledText>{MpaRating}</StyledText>
                    <StyledText>{convertDuration(Duration)}</StyledText>
                </Stack>
                <StyledText>{Description}</StyledText>
            </StyledComponent>
            <StyledImgContainer>
                <StyledImg alt="" src={getImagePath(CoverImage)} />
            </StyledImgContainer>
        </StyledContainer>
    )
}

export default Featured;