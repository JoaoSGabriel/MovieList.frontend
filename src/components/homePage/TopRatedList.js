import { useEffect, useState } from "react";
import useRatedMovie from "../../hooks/api/useRatedMovies";

import MediaCard from "../MediaCard";
import { Container, List, Text } from "./ListStyle";

export default function RatedList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getRated } = useRatedMovie();

  useEffect(() => {
    const promisse = getRated();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 5));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
