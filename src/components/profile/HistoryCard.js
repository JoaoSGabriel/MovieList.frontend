import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HistoryCard({ info }) {
  const navigate = useNavigate();

  function countTimer() {
    const start = new Date(info.createdAt);
    const end = new Date();
    const totalDiff = new Date(end - start);

    if (totalDiff.getUTCHours() < 1 && totalDiff.getUTCMinutes() < 6) {
      return "Agora mesmo";
    } else if (totalDiff.getUTCHours() < 1) {
      let diff = totalDiff.getUTCMinutes() + "min ";

      return `Há ${diff} atrás`;
    } else if (totalDiff.getUTCHours() === 1) {
      let diff = totalDiff.getUTCHours() + " hora ";

      return `Há ${diff} atrás`;
    } else if (totalDiff.getUTCHours() > 1) {
      let diff = totalDiff.getUTCHours() + " horas ";

      return `Há ${diff} atrás`;
    } else if (totalDiff.getUTCHours() >= 23) {
      const diffInMs = new Date(end) - new Date(start);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      return `Há ${diffInDays} dia(s) atrás`;
    }

    return "empty";
  }

  function searchPosterPath() {
    if (info?.type === "LIKED") {
      return `${info.MovieFavorits[0]?.tmbdPoster_path}`;
    } else if (info?.type === "PLANNING") {
      return `${info.PlaningSee[0]?.tmbdPoster_path}`;
    } else if (info?.type === "WATCHED") {
      return `${info.Watched[0]?.tmbdPoster_path}`;
    }
  }

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
      <img src={searchPosterPath()} alt="poster" />
      <Container>
        <InsideMenu>{countTimer()}</InsideMenu>
        {searcTitleName()}
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
