import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        onClick={() => {
          navigate("/search/a");
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
      <div>Social</div>
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
