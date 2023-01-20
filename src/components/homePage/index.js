import { useState } from "react";
import styled from "styled-components";

import SearchBar from "./SearchBar";
import TrendingList from "./TrendingList";
import RatedList from "./TopRatedList";
import UpcomingList from "./UpcomingList";
import SearchPage from "../searchPage";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");

  return (
    <Home>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {searchText !== "" ? (
        <SearchPage searchText={searchText} />
      ) : (
        <>
          <TrendingList>Trending Now</TrendingList>
          <RatedList>All time Popular</RatedList>
          <UpcomingList>Upcoming movies</UpcomingList>
        </>
      )}
    </Home>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
