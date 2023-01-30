import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";

import useToken from "../../hooks/useToken";

export default function Nav() {
  const token = useToken();
  const navigate = useNavigate();

  const user = useLocalStorage("userData", {});

  return (
    <Container>
      {token ? (
        <div
          onClick={() => {
            navigate(`/profile/${user[0].user.Profile[0].username}`);
          }}
        >
          Perfil
        </div>
      ) : (
        <></>
      )}
      <div
        onClick={() => {
          navigate("/search/");
        }}
      >
        Pesquisar
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Tela Inicial
      </div>
      {token ? (
        <div
          onClick={() => {
            navigate("/movies");
          }}
        >
          Meus Filmes
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 0 25px;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
      filter: brightness(2);
    }
  }
`;
