import styled from "styled-components";

export default function Movies() {
  return (
    <>
      <GenreBox>Gênero mais assistidos</GenreBox>
      <Favorits></Favorits>
    </>
  );
}

const GenreBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  font-size: 2rem;
  text-align: center;
`;

const Favorits = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;
