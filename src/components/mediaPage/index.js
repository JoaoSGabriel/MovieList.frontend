import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Home from "../HomeStyle";
import useGetDetailsMovie from "../../hooks/api/useGetDetailsMovie";
import MovieInfo from "./MovieInfo";
import { ImHeart } from "react-icons/im";
import SideBarInfo from "./SIdeBarInfo";
import MovieContent from "./MovieContent";
import LoaderScreen from "../LoaderScreen";

export default function MediaPage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieBanner, setMovieBanner] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const params = useParams();
  const { detailsLoading, getDetails } = useGetDetailsMovie();

  useEffect(() => {
    const promisse = getDetails(params.movieId);
    promisse.then((p) => {
      setMovieDetails(p);

      if (p?.backdrop_path) {
        setMovieBanner("https://image.tmdb.org/t/p/w1280" + p.backdrop_path);
      } else {
        setMovieBanner(
          "https://img.freepik.com/free-photo/gray-wall-empty-room-with-concrete-floor_53876-88447.jpg?w=2000"
        );
      }

      setMoviePoster("https://image.tmdb.org/t/p/w1280" + p.poster_path);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      {detailsLoading ? (
        <LoaderScreen />
      ) : (
        <>
          <Background>
            <Image imageUrl={movieBanner}></Image>
          </Background>
          <Home>
            <BackgroundColor>
              <Details>
                <Banner>
                  <img src={moviePoster} alt="movie Poster" />
                  <LikeButton>
                    <ImHeart />
                  </LikeButton>
                </Banner>
                <MovieInfo movieDetails={movieDetails} />
              </Details>
            </BackgroundColor>
            <Details>
              <SideBarInfo movieDetails={movieDetails} />
              <MovieContent movieDetails={movieDetails} />
            </Details>
          </Home>
        </>
      )}
    </>
  );
}

const Background = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(
    180deg,
    rgba(6, 13, 34, 0) 0%,
    rgba(6, 13, 34, 0.5) 90%,
    #000000 100%
  );
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 400px;
  position: absolute;
  z-index: -1;
  background: ${(props) => `url(${props.imageUrl})`};
`;

const BackgroundColor = styled.div`
  width: 100%;
  min-height: 290px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const Details = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 1440px;
`;

const Banner = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 29px rgb(49 54 68 / 25%);
  position: relative;
  img {
    width: 215px;
    height: 322px;
    position: absolute;
    top: -100px;
    right: 0;
  }
`;

const LikeButton = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 240px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 41, 75);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
`;
