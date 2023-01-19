import TrendingList from "./TrendingList";
import styled from "styled-components";
import RatedList from "./TopRatedList";

export default function HomePage() {
  return (
    <Home>
      <TrendingList>Trending Now</TrendingList>
      <RatedList>All time Popular</RatedList>
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
