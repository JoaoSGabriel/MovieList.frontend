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
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
    0 4px 4px rgba(103, 132, 187, 0.05);
  margin: 0 0 20px 0;
  cursor: pointer;
  img {
    width: 250px;
    height: 375px;
    border-radius: 4px;
  }
`;
