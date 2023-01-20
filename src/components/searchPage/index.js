import { useEffect, useState } from "react";
import { getSearchList } from "../../services/TMDB-api";

import styled from "styled-components";
import { List, Text } from "../homePage/ListStyle";
import MediaCard from "../MediaCard";

export default function SearchPage({ searchText }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const promisse = getSearchList(searchText);
    promisse.then((p) => {
      if (p) setMovieList(p.results);
    });
  }, [searchText]);

  return (
    <>
      <List>
        <Text>Search results for "{searchText}"</Text>
        <Container>
          {movieList.map((value, index) => (
            <MediaCard key={index} info={value} />
          ))}
        </Container>
      </List>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`;
