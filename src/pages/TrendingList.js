import { useEffect, useState } from "react";
import styled from "styled-components";
import useTrendingMovie from "../hooks/api/useTrendingMovies";
import MediaCard from "./MediaCard";

export default function TrendingList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getTrending } = useTrendingMovie();

  useEffect(() => {
    const promisse = getTrending();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 5));
    });
  }, []);

  return (
    <>
      <Text>{children}</Text>
      <Container>
        {movieList.map((value, index) => (
          <MediaCard key={index} info={value} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
