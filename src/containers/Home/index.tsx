import Home from "@components/Home/index";
import { useAppDispatch, useAppSelector } from "@redux/app/hooks"
import { getVideos } from "@redux/slices/video/actions";
import { selectVideo } from "@redux/slices/video/selectors";
import { useEffect } from "react";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(selectVideo)

  useEffect(() => {
    dispatch(getVideos())
  }, [dispatch])


  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <Home />
      )}
    </>
  )
}

export default HomeContainer