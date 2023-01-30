import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProfile } from "../../services/ProfileApi";
import Home from "../HomeStyle";
import LoaderScreen from "../LoaderScreen";
import History from "./History";
import Movies from "./Movies";
import UserArea from "./UserArea";

export default function ProfilePage() {
  const [profile, setProfile] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params?.username) {
      const promisse = getProfile(params.username);
      promisse
        .then((e) => {
          setProfile(e);
        })
        .catch(() => {
          setProfile([]);
        });
    }
  }, [params]);
  return (
    <>
      {profile?.id ? (
        <>
          <UserArea info={profile} />
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
      ) : (
        <LoaderScreen />
      )}
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
