import styled from "styled-components";
import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <SiThemoviedatabase className="icon" />
      MovieList
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;

  .icon {
    margin: 0 10px 0 0;
  }

  :hover {
    animation: rainbow 2.5s linear;
    animation-iteration-count: infinite;
  }

  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
`;
