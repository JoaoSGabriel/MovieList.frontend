import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCollectionDetails } from "../../services/TMDB-api";

export default function Collections({ collectionDetails }) {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (collectionDetails?.id) {
      const promisse = getCollectionDetails(collectionDetails.id);
      promisse.then((p) => {
        if (p) setMovieList(p.parts);
        console.log(p);
      });
    }
  }, [collectionDetails]);

  function seeMore(value) {
    navigate(`/movie/${value.id}/${value.title}`);
  }

  return (
    <>
      <h1>Relações</h1>
      <Main>
        {movieList.map((value, index) => (
          <CollectionCard
            key={index}
            onClick={() => {
              seeMore(value);
            }}
          >
            <img
              src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
              alt="poster"
            />
            <h1>{value.title}</h1>
          </CollectionCard>
        ))}
      </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
`;

const CollectionCard = styled.div`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: rgb(250, 250, 250);
  border-radius: 3px;
  width: 330px;
  display: flex;
  border-radius: 10px;
  margin: 0 30px 0 0;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100px;
    height: 150px;
  }

  h1 {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
    padding: 10px 0 0 10px;
  }
`;
