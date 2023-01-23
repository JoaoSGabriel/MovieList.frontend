import { useEffect, useState } from "react";
import useUpcomingMovie from "../../hooks/api/useUpcomingMovies";

import MediaCard from "../MediaCard";
import { Container, List, Text } from "./ListStyle";

export default function UpcomingList({ children }) {
  const [movieList, setMovieList] = useState([]);
  const { getUpcoming } = useUpcomingMovie();

  useEffect(() => {
    const promisse = getUpcoming();
    promisse.then((p) => {
      if (p) setMovieList(p.results.slice(0, 6));
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
