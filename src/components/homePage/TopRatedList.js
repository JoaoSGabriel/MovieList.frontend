import { useEffect, useState } from "react";
import styled from "styled-components";
import useRatedMovie from "../../hooks/api/useRatedMovies";
import MediaCard from "../MediaCard";

export default function RatedList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getRated } = useRatedMovie();

  useEffect(() => {
    const promisse = getRated();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 5));
    });
  }, []);

  return (
    <List>
      <Text>{children}</Text>
      <Container>
        {movieList.map((value, index) => (
          <MediaCard key={index} info={value} />
        ))}
      </Container>
    </List>
  );
}

const List = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 40px 0 20px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Text = styled.div`
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
