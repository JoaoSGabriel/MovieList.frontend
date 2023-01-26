import { ImHeart } from "react-icons/im";
import { toast } from "react-toastify";
import styled from "styled-components";

import useMovieFavorit from "../../hooks/API/useMovieFavorit";

export default function LikeButton({ movieDetails }) {
  const { postFavorit } = useMovieFavorit();

  function setMovieAsFavorit() {
    let src;
    if (movieDetails?.poster_path) {
      src = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    } else {
      src =
        "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    const body = {
      tmdbTitle: movieDetails.title,
      tmdbMovieId: movieDetails.id,
      tmdbPoster_path: src,
    };

    try {
      const { favoritError } = postFavorit(body);
      if (favoritError) throw favoritError;
      toast("Filme adicionado aos favoritos");
    } catch (error) {
      toast("Ops, algo deu errado com sua requisição");
    }
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
