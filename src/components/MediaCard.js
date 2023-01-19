import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MediaCard({ info }) {
  const src = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
  const navigate = useNavigate();

  function seeMore() {
    navigate(`/Movie/${info.id}`);
  }

  return (
    <Container onClick={seeMore}>
      <img src={src} alt="loaded Banner" />
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  img {
    width: 250px;
    height: 375px;
  }
`;
