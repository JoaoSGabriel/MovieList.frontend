import TrendingList from "./TrendingList";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <TrendingList>Trending Now</TrendingList>
    </>
  );
}
