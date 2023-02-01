import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { toast } from "react-toastify";
import styled from "styled-components";
import useToken from "../../../hooks/useToken";
import {
  deleteLikeHistory,
  postLikeHistory,
} from "../../../services/HistoryApi";

export default function InteractionArea({
  info,
  historyInfo,
  reload,
  setReload,
  isComment,
  setIsComment,
}) {
  const token = useToken();

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

  function removeLike() {
    if (!token) return;
    const promisse = deleteLikeHistory(token, info.Like[0].id);
    promisse
      .then(() => {
        toast("Você removeu sua curtida");
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
        <FaRegComments
          className="icon"
          onClick={() => {
            setIsComment(!isComment);
          }}
        />
      </Info>
      <Info>
        {countLikes()}
        {info?.Like[0] ? (
          <BsSuitHeartFill
            className="icon"
            style={{ color: "red" }}
            onClick={removeLike}
          />
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
