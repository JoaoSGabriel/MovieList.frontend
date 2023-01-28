import styled from "styled-components";
import Home from "../HomeStyle";
import History from "./History";
import Movies from "./Movies";
import UserArea from "./UserArea";

export default function ProfilePage() {
  return (
    <>
      <UserArea />
      <Home>
        <ContentArea>
          <Area>
            <Movies />
          </Area>
          <Area>
            <History />
          </Area>
        </ContentArea>
      </Home>
    </>
  );
}

const ContentArea = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;

const Area = styled.div`
  width: 48%;
  height: 800px;
`;
