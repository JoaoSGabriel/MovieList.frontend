import styled from "styled-components";

export default function UserArea() {
  return (
    <Background>
      <Profile>
        <img
          src="https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg"
          alt="profile'"
        />
        <Name>Nome</Name>
      </Profile>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 400px;
  background: #2b2d42;
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 400px;
  position: relative;

  img {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 20px;
  left: 280px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  -ms-high-contrast-adjust: auto;
`;
