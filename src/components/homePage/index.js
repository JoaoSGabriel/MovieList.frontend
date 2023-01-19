import TrendingList from "./TrendingList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Home>
      <TrendingList>Trending Now</TrendingList>
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
