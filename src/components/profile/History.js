import styled from "styled-components";

export default function History() {
  return (
    <>
      <Wrappler>Em breve, interações com histórico</Wrappler>
      <IMG
        src="https://www.gov.br/agricultura/pt-br/assuntos/riscos-seguro/imagens/em_construao.png/@@images/image.png"
        alt="building"
      />
    </>
  );
}

const Wrappler = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IMG = styled.img`
  width: 100%;
  height: auto;
`;
