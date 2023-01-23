import styled from "styled-components";

export default function ProgressBar({ completed }) {
  return (
    <Wrappler>
      <Container>
        <Filler value={completed}></Filler>
      </Container>
      <Value>{completed}</Value>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  height: 10px;
  width: 200px;
  background-color: #e0e0de;
  border-radius: 50px;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => `${props.value * 10}%`};
  background-color: #16d47b;
  border-radius: inherit;
  text-align: right;
`;

const Value = styled.div`
  margin: 0 0 0 8px;
  color: rgb(122, 133, 143);
`;
