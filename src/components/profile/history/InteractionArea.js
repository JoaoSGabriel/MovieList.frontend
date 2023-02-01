import { useEffect, useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";
import { getHistoryInfo } from "../../../services/HistoryApi";

export default function InteractionArea({ info }) {
  const [historyInfo, setHistoryInfo] = useState([]);
  console.log(historyInfo);

  useEffect(() => {
    const promisse = getHistoryInfo(info?.id);
    promisse
      .then((e) => {
        setHistoryInfo(e);
      })
      .catch(() => {
        setHistoryInfo([]);
      });
  }, [info]);

  return (
    <Container>
      <Info>
        {historyInfo?.Comment.length > 0 ? historyInfo?.Comment.length : ""}
        <FaRegComments className="icon" />
      </Info>
      <Info>
        {historyInfo?.Like.length > 0 ? historyInfo?.Like.length : ""}
        <IoHeartOutline className="icon" />
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

  .icon {
    margin: 0 10px 0 4px;
  }
`;

const Info = styled.div``;
