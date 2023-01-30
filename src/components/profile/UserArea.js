import styled from "styled-components";

export default function UserArea({ info }) {
  console.log(info);
  function getImage() {
    if (info?.photo_path) {
      return info.photo_path;
    }

    return "https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg";
  }
  return (
    <Background url={info?.backdrop_path}>
      <Profile>
        <img src={getImage()} alt="profile'" />
        <Name>{info?.username}</Name>
      </Profile>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.url ? `url(${props.url})` : "#2b2d42")};
  background-size: cover;
  background-position: 50% 35%;
`;

const Profile = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 400px;
  position: relative;

  img {
    width: 260px;
    height: 260px;
    size: cover;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 20px;
  left: 280px;
  padding: 10px;
  border-radius: 5px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.7);
`;
