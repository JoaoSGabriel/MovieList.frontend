import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Home from "../HomeStyle";
import PageNumber from "./PageNumber";
import MediaCard from "../mediaCard";

import { getTrendingList } from "../../services/TMDB-api";

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
      <PageNumber />
    </>
  );
}

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0 0 0;

  @media screen and (max-width: 1366px) {
    width: 1100px;
    margin: 30px 0 0 0;
  }
`;
