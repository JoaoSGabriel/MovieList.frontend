import TrendingList from "./TrendingList";
import RatedList from "./TopRatedList";
import UpcomingList from "./UpcomingList";
import Home from "../HomeStyle";

export default function HomePage() {
  return (
    <Home>
      <TrendingList>Trending Now</TrendingList>
      <RatedList>All time Popular</RatedList>
      <UpcomingList>Upcoming movies</UpcomingList>
    </Home>
  );
}
