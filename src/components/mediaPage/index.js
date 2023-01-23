import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Home from "../HomeStyle";
import useGetDetailsMovie from "../../hooks/api/useGetDetailsMovie";
import MovieInfo from "./MovieInfo";
import { ImHeart } from "react-icons/im";

export default function MediaPage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieBanner, setMovieBanner] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const params = useParams();
  const { detailsLoading, getDetails } = useGetDetailsMovie();

  useEffect(() => {
    const promisse = getDetails(params.movieId);
    promisse.then((p) => {
      if (p) {
        setMovieDetails(p);
        setMovieBanner("https://image.tmdb.org/t/p/w1280" + p.backdrop_path);
        setMoviePoster("https://image.tmdb.org/t/p/w1280" + p.poster_path);
      }
      console.log(p);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {detailsLoading ? (
        <>Carregando</>
      ) : (
        <>
          <Background>
            <Image imageUrl={movieBanner}></Image>
          </Background>
          <Home>
            <Details>
              <Banner>
                <img src={moviePoster} alt="movie Poster" />
                <LikeButton>
                  <ImHeart />
                </LikeButton>
              </Banner>
              <MovieInfo movieDetails={movieDetails} />
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

const Details = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 1440px;
  background-color: #fafafa;
`;

const Banner = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 29px rgb(49 54 68 / 25%);
  position: relative;
  img {
    width: 200px;
    height: 300px;
    position: absolute;
    top: -100px;
    right: 0;
  }
`;

const LikeButton = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 225px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 41, 75);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
`;
