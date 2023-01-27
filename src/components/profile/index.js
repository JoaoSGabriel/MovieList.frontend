import styled from "styled-components";

export default function ProfilePage() {
  return (
    <Screen>
      <img
        src="https://www.gov.br/agricultura/pt-br/assuntos/riscos-seguro/imagens/em_construao.png/@@images/image.png"
        alt="construção"
      />
    </Screen>
  );
}

const Screen = styled.div`
  width: 100vw;
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: fixed;
  }
`;
