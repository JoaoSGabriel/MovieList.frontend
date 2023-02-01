import { FaRegComments } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";

export default function InteractionArea() {
  return (
    <Container>
      <Info>
        <FaRegComments style={{ margin: "0 10px 0 4px" }} />
      </Info>
      <Info>
        <IoHeartOutline style={{ margin: "0 10px 0 4px" }} />
      </Info>
    </Container>
  );
}

const Container = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 0 5px 0;
`;

const Info = styled.div``;
