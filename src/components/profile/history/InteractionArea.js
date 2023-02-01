import { useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { toast } from "react-toastify";
import styled from "styled-components";
import useToken from "../../../hooks/useToken";
import { getHistoryInfo, postLikeHistory } from "../../../services/HistoryApi";

export default function InteractionArea({ info }) {
  const [historyInfo, setHistoryInfo] = useState([]);
  const [reload, setReload] = useState(false);
  const token = useToken();
  console.log(info, historyInfo);

  function countComments() {
    if (historyInfo.Comment?.length > 0) {
      return historyInfo.Comment.length;
    }
    return "";
  }

  function countLikes() {
    if (historyInfo.Like?.length > 0) {
      return historyInfo.Like.length;
    }
    return "";
  }

  useEffect(() => {
    const promisse = getHistoryInfo(info?.id);
    promisse
      .then((e) => {
        setHistoryInfo(e);
      })
      .catch(() => {
        setHistoryInfo([]);
      });
  }, [info, reload]);

  function setLike() {
    if (!token) return;
    const promisse = postLikeHistory(token, historyInfo.id);
    promisse
      .then(() => {
        toast("Você curtiu o history");
        setReload(!reload);
      })
      .catch(() => {
        toast("Ops! Algo deu errado com sua requisição");
      });
  }

  return (
    <Container>
      <Info>
        {countComments()}
        <FaRegComments className="icon" />
      </Info>
      <Info>
        {countLikes()}
        {info?.Like[0] ? (
          <BsSuitHeartFill className="icon" style={{ color: "red" }} />
        ) : (
          <BsSuitHeart className="icon" onClick={setLike} />
        )}
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
    cursor: pointer;
    margin: 0 10px 0 4px;
  }
`;

const Info = styled.div``;
