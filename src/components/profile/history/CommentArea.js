import styled from "styled-components";

export default function CommentArea({ isComment }) {
  return <>{isComment ? <Container>SOCORRO</Container> : <></>}</>;
}

const Container = styled.div`
  width: 100%;
`;
