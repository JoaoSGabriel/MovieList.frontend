import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFavorits } from "../../services/FavoritFunctional";
import LoaderDiv from "../LoaderDiv";
import MediaCard from "../MediaCard";

export default function Movies({ token }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setLoading(true);
      const promisse = getAllFavorits(token);
      promisse
        .then((e) => {
          setMovies(e);
          setLoading(false);
        })
        .catch(() => {
          setMovies([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderMovies() {
    if (movies[0]) {
      return movies.map((value, index) => (
        <MediaCard
          key={index}
          info={value}
          style={{ margin: "20px 10px 20px 10px" }}
        />
      ));
    }
  }

  return (
    <>
      <GenreBox>
        Gênero mais assistidos
        <h1>Em breve...</h1>
      </GenreBox>
      {loading ? (
        <Favorits>
          <LoaderDiv />
        </Favorits>
      ) : (
        <>
          {movies[0] ? (
            <Favorits>{renderMovies()}</Favorits>
          ) : (
            <Favorits>
              <h2>Você ainda não adicionou nenhum favorito ✍(◔◡◔)</h2>
            </Favorits>
          )}
        </>
      )}
    </>
  );
}

const GenreBox = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  font-size: 1.3rem;
  text-align: center;

  h1 {
    margin: 30px 0 0 0;
    font-size: 0.9rem;
  }
`;

const Favorits = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  overflow-x: scroll;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    font-size: 1.3rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
