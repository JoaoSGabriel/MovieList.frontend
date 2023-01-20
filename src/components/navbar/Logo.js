import styled from "styled-components";
import { SiThemoviedatabase } from "react-icons/si";

export default function Logo() {
  return (
    <Container>
      <SiThemoviedatabase className="icon" />
      MovieList
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  .icon {
    margin: 0 10px 0 0;
  }
`;
