import styled from "styled-components";

export default function Crew({ info }) {
  return (
    <>
      <h1>Equipe Técnica:</h1>
      <Wrappler>
        {info.map((value, index) => (
          <CrewCard>
            {value.profile_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.profile_path}
                alt="poster"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt="no data"
              />
            )}
            <CrewInfo>
              <h1>{value.name}</h1>
              <h1>Departamento: {value.department}</h1>
              <h1>Emprego: {value.job}</h1>
            </CrewInfo>
          </CrewCard>
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

const CrewCard = styled.div`
  width: 330px;
  height: auto;
  background-color: #fafafa;
  margin: 0 0 30px 0;
  display: flex;

  img {
    width: 100px;
  }
`;

const CrewInfo = styled.div`
  padding: 10px;

  h1 {
    color: rgb(146, 153, 161);
    font-size: 1rem;
    font-weight: 500;
  }
`;
