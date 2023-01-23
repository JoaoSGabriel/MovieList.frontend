import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function MovieInfo({ movieDetails }) {
  return (
    <Information>
      <h1>
        {movieDetails.title} ({movieDetails.status})
      </h1>
      {movieDetails.tagline ? <h3>"{movieDetails.tagline}"</h3> : <></>}
      <h2>{movieDetails.overview}</h2>
      <h2>IMDB: Pontuação</h2>
      <ProgressBar completed={movieDetails.vote_average} />
    </Information>
  );
}

const Information = styled.div`
  width: 1075px;
  height: 260px;
  margin: 10px 0 0 30px;

  h1 {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
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

  h3 {
    color: rgb(122, 133, 143);
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    max-width: 900px;
    padding: 15px 0 0 0;
    transition: 0.2s;
  }
`;
