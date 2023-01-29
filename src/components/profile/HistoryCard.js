import styled from "styled-components";

export default function HistoryCard({ info }) {
  function countTimer() {
    const inicio = new Date(info.createdAt);
    const fim = new Date();
    const diferenca = new Date(fim - inicio);

    let diff = diferenca.getUTCHours() + "h ";
    diff += diferenca.getUTCMinutes() + "m ";
    diff += diferenca.getUTCSeconds() + "s ";

    if (diferenca.getUTCHours() < 1 && diferenca.getUTCMinutes() < 6) {
      return "Agora mesmo";
    } else if (diferenca.getUTCHours() < 1) {
      let diff = diferenca.getUTCMinutes() + "m ";

      return `Há ${diff} atrás`;
    } else if (diferenca.getUTCHours() === 1) {
      let diff = diferenca.getUTCHours() + "h ";
      diff += diferenca.getUTCMinutes() + "m ";

      return `Há ${diff} atrás`;
    } else if (diferenca.getUTCHours() > 5) {
      let diff = diferenca.getUTCHours() + "h ";

      return `Há ${diff} atrás`;
    }

    return diff;
  }

  if (info?.type === "LIKED") {
    return (
      <Wrappler>
        <img src={info.MovieFavorits[0]?.tmbdPoster_path} alt="poster" />
        <Container>
          <InsideMenu>{countTimer()}</InsideMenu>
          <Text>Assistiu o filme: "{info.MovieFavorits[0]?.tmdbTitle}"</Text>
        </Container>
      </Wrappler>
    );
  } else if (info?.type === "PLANNING") {
    return (
      <Wrappler>
        <img src={info.PlaningSee[0]?.tmbdPoster_path} alt="poster" />
        <Container>
          <InsideMenu>{countTimer()}</InsideMenu>
          <Text>Assistiu o filme: "{info.PlaningSee[0]?.tmdbTitle}"</Text>
        </Container>
      </Wrappler>
    );
  } else if (info?.type === "WATCHED") {
    return (
      <Wrappler>
        <img src={info.Watched[0]?.tmbdPoster_path} alt="poster" />
        <Container>
          <InsideMenu>{countTimer()}</InsideMenu>
          <Text>Assistiu o filme: "{info.Watched[0]?.tmdbTitle}"</Text>
        </Container>
      </Wrappler>
    );
  }
}

const Wrappler = styled.div`
  width: 340px;
  height: 120px;
  border-radius: 5px;
  margin: 0 0 10px 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  cursor: pointer;

  img {
    width: 80px;
    height: 120px;
  }
`;

const Container = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
`;

const InsideMenu = styled.div`
  width: 100%;
  height: 20px;
  font-size: 0.7rem;
  text-align: end;
  padding: 7px 7px 0 0;
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 800;
`;

const Text = styled.div`
  font-size: 1rem;
  word-break: break-word;
  padding: 10px 10px;
  color: rgb(81, 97, 112);
`;
