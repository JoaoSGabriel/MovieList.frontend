import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetDetailsMovie from "../hooks/api/useGetDetailsMovie";

export default function MediaPage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  const { detailsLoading, getDetails } = useGetDetailsMovie();

  useEffect(() => {
    const promisse = getDetails(params.movieId);
    promisse.then((p) => {
      if (p) setMovieDetails(p);
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
          <Header>
            <img src=`` alt="banner"/>
          </Header>
        </>
      )}
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 400px;
`;
