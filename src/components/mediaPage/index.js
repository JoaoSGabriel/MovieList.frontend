import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Home from "../HomeStyle";
import useGetDetailsMovie from "../../hooks/api/useGetDetailsMovie";

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
              </Banner>
              <Information>
                <h1>{movieDetails.title}</h1>
                <h2>{movieDetails.overview}</h2>
              </Information>
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

const Information = styled.div`
  width: 1075px;
  margin: 10px 0 0 30px;
  h1 {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgb(93, 114, 138);
  }
  h2 {
    color: rgb(122, 133, 143);
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    max-width: 900px;
    padding: 15px 0;
    transition: 0.2s;
  }
`;
