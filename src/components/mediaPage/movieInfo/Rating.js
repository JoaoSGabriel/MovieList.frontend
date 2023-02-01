import { useState } from "react";
import styled from "styled-components";

import ReactStars from "react-rating-stars-component";

export default function Rating() {
  const [value, setValue] = useState(0);

  return (
    <Wrappler>
      <h3>Escolha sua nota:</h3>
      <Container>
        <ReactStars
          value={value}
          count={10}
          onChange={setValue}
          size={30}
          isHalf={true}
          activeColor="#ffd700"
        />
      </Container>
    </Wrappler>
  );
}

const Wrappler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 70px;
`;

const Container = styled.div`
  max-width: 136px;

  .icon {
    font-size: 1.5rem;
    color: #fabb05;
  }
`;
