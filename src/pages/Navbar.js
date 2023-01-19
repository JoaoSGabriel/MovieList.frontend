import styled from "styled-components";

export default function Navbar() {
  return (
    <Container>
      <Wrappler></Wrappler>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 75px;
  justify-content: center;
  transition: background 0.8s ease, color 0.2s;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  background: #2b2d42;
  color: #bcbedc;
  margin: 0 0 20px 0;
`;

const Wrappler = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 50px;
  max-width: 1050px;
  width: 100%;
`;
