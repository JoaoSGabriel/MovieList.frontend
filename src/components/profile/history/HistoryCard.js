import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import infoFunctions from "./infoFunctions";

import InteractionArea from "./InteractionArea";

export default function HistoryCard({ info }) {
  const navigate = useNavigate();

  function searcTitleName() {
    if (info?.type === "LIKED") {
      return (
        <Text
          onClick={() => {
            navigate(`/movie/${info.MovieFavorits[0]?.tmdbMovieId}`);
          }}
        >
          Marcou o filme: "<strong>{info.MovieFavorits[0]?.tmdbTitle}</strong>"
          como favorito.
        </Text>
      );
    } else if (info?.type === "PLANNING") {
      return (
        <Text
          onClick={() => {
            navigate(`/movie/${info.PlaningSee[0]?.tmdbMovieId}`);
          }}
        >
          Tem interesse em assistir o filme: "
          <strong>{info.PlaningSee[0]?.tmdbTitle}</strong>".
        </Text>
      );
    } else if (info?.type === "WATCHED") {
      return (
        <Text
          onClick={() => {
            navigate(`/movie/${info.Watched[0]?.tmdbMovieId}`);
          }}
        >
          Assistiu o filme: "<strong>{info.Watched[0]?.tmdbTitle}</strong>".
        </Text>
      );
    }
  }

  return (
    <Wrappler>
      <img src={infoFunctions.searchPosterPath(info)} alt="poster" />
      <Container>
        <InsideMenu>{infoFunctions.countTimer(info)}</InsideMenu>
        {searcTitleName()}
        <InteractionArea />
      </Container>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  width: 340px;
  height: 120px;
  border-radius: 5px;
  margin: 0 0 10px 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  img {
    width: 80px;
    height: 120px;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

const InsideMenu = styled.div`
  width: 100%;
  height: 20px;
  font-size: 0.7rem;
  text-align: end;
  padding: 7px 7px 0 0;
  font-weight: 800;
`;

const Text = styled.div`
  font-size: 1rem;
  word-break: break-word;
  padding: 10px 10px;
  color: rgb(81, 97, 112);
  line-height: 1.3rem;
  cursor: pointer;

  :hover {
    color: rgb(61, 180, 242);
  }
`;
