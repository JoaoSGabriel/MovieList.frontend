import { ImHeart } from "react-icons/im";
import styled from "styled-components";

export default function LikeButton({ movieDetails }) {
  function setMovieAsFavorit() {
    const body = {
      tmdbTitle: movieDetails.title,
      tmdbMovieId: movieDetails.id,
      tmdbPoster_path: movieDetails.poster_path,
    };
  }

  return (
    <>
      <LikeWrappler onClick={setMovieAsFavorit}>
        <ImHeart />
      </LikeWrappler>
    </>
  );
}

const LikeWrappler = styled.div`
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
