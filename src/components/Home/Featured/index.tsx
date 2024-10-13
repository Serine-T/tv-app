import { useAppSelector } from "@redux/app/hooks";
import { selectVideo } from "@redux/slices/video/selectors";

const Featured = () => {
    const { featured } = useAppSelector(selectVideo);
    console.log('featured', featured)
    return (
        <div>Featured</div>
    )
}

export default Featured;