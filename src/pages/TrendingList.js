import { useEffect, useState } from "react";
import styled from "styled-components";
import useTrendingMovie from "../hooks/api/useTrendingMovies";

export default function TrendingList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getTrending } = useTrendingMovie();

  useEffect(() => {
    const promisse = getTrending();
    promisse.then((p) => {
      if (p) console.log(p.results);
    });
  }, []);

  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;
