import styled from "styled-components";

export default function HistoryCard({ info }) {
  console.log(info);
  return (
    <Wrappler>
      <img src={info.MovieFavorits[0]?.tmbdPoster_path} alt="poster" />
      <Container>
        <InsideMenu>teste</InsideMenu>
        <Text>Assistiu o filme: "{info.MovieFavorits[0]?.tmdbTitle}"</Text>
      </Container>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  width: 340px;
  height: 120px;
  border-radius: 5px;
  margin: 10px 0;
  background-color: rgb(255, 255, 255);
  display: flex;

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
`;

const Text = styled.div`
  font-size: 1rem;
  padding: 10px 10px;
`;
