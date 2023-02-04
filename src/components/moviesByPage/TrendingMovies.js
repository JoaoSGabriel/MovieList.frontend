import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Home from "../HomeStyle";
import PageNumber from "./PageNumber";
import MediaCard from "../mediaCard";

import { getTrendingList } from "../../services/TMDB-api";
import { Container, Text } from "./MoviesPageStyles";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  const params = useParams();

  useEffect(() => {
    const promisse = getTrendingList(params.page);
    promisse.then((p) => {
      setMovies(p.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <Home>
        <Container>
          <Text>Tendências da semana</Text>
          {movies.map((value, index) => (
            <MediaCard
              key={index}
              info={value}
              buttons={true}
              style={{ margin: "0 30px 20px 0" }}
            />
          ))}
        </Container>
      </Home>
      <PageNumber path={"trending"} />
    </>
  );
}
