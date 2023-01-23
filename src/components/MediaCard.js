import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MediaCard({ info }) {
  const src = `https://image.tmdb.org/t/p/w500/${info.poster_path}`;
  const navigate = useNavigate();

  function seeMore() {
    navigate(`/movie/${info.id}/${info.title}`);
  }

  return (
    <Container onClick={seeMore}>
      <img src={src} alt="loaded Banner" />
      <h1>{info.title}</h1>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0 20px 0;
  cursor: pointer;
  background: none;
  img {
    width: 210px;
    height: 315px;
    border-radius: 4px;
  }
  h1 {
    width: 210px;
    color: rgb(116, 136, 153);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 21px;
    margin-top: 10px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
