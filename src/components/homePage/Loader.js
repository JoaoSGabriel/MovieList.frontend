import styled from "styled-components";
import { Radio } from "react-loader-spinner";

export default function Loader() {
  const count = [1, 2, 3, 4, 5, 6];
  return (
    <Wrappler>
      {count.map((index) => (
        <Container key={index}>
          <Radio
            visible={true}
            height="315"
            width="210"
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass="radio-wrapper"
            colors={["#8D949E", "#8D949E", "#8D949E"]}
          />
        </Container>
      ))}
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 0 20px 0;
  width: 210px;
  height: 315px;
  border-radius: 4px;
`;
