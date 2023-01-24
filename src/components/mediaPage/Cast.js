import styled from "styled-components";

export default function Cast({ info }) {
  return (
    <>
      <h1>Elenco:</h1>
      <Wrappler>
        {info.map((value, index) => (
          <CastCard>
            <img
              src={"https://image.tmdb.org/t/p/w500" + value.profile_path}
              alt="poster"
            />
            <CastInfo>
              <h1>{value.name}</h1>
              <h1>"{value.character}"</h1>
            </CastInfo>
          </CastCard>
        ))}
      </Wrappler>
    </>
  );
}

const Wrappler = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CastCard = styled.div`
  width: 330px;
  height: auto;
  background-color: #fafafa;
  margin: 0 0 30px 0;
  display: flex;

  img {
    width: 100px;
  }
`;

const CastInfo = styled.div`
  padding: 10px;
`;
