import { useEffect, useState } from "react";
import { getSearchList } from "../../services/TMDB-api";

import styled from "styled-components";
import { List, Text } from "../homePage/ListStyle";
import MediaCard from "../MediaCard";
import { useNavigate, useParams } from "react-router-dom";
import Home from "../HomeStyle";

export default function SearchPage() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.title === undefined) navigate("/");
    if (params) {
      const promisse = getSearchList(params.title);
      promisse.then((p) => {
        if (p) setMovieList(p.results);
      });
    }
  }, [params]);

  return (
    <Home>
      <List>
        <Text>Search results for "{params.title}"</Text>
        <Container>
          {movieList.map((value, index) => (
            <MediaCard key={index} info={value} />
          ))}
        </Container>
      </List>
    </Home>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`;
