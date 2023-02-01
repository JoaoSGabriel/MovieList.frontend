import { useState } from "react";
import styled from "styled-components";
import useToken from "../../../hooks/useToken";
import { postComment } from "../../../services/HistoryApi";
import infoFunctions from "./infoFunctions";

export default function CommentArea({
  isComment,
  historyInfo,
  reload,
  setReload,
}) {
  console.log(historyInfo?.Comment);
  const [comment, setComment] = useState([]);
  const token = useToken();

  function newComment(e) {
    e.preventDefault();

    if (!token) return;

    const promisse = postComment(token, historyInfo.id, comment);
    promisse
      .then(() => {
        setReload(!reload);
        setComment("");
      })
      .catch();
  }
  return (
    <>
      {isComment ? (
        <Container>
          <form onSubmit={newComment}>
            <input
              placeholder="Escreva um comentário..."
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              autoFocus
            />
          </form>
          {historyInfo?.Comment.map((value, index) => (
            <Comment key={index}>
              <span>{infoFunctions.countTimer(value)}</span>
              <div>
                <img src={value.User.Profile[0].photo_path} alt="profile" />
                {value.User.Profile[0].username}
              </div>
              {value.comment}
            </Comment>
          ))}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.div`
  width: 95%;
  max-height: 190px;
  overflow-y: scroll;
  margin: 0 auto 10px auto;
  background-color: rgb(255, 255, 255);

  ::-webkit-scrollbar {
    display: none;
  }

  input {
    color: rgb(81, 97, 112);
    font-size: 0.9rem;
    font-weight: 400;
    height: 20px;
    margin: 10px 0;
    padding: 0 15px;
    width: 95%;
    border-radius: 4px;
    border: 0;
    font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    :focus {
      border: 0 none;
      outline: 0;
    }

    ::placeholder {
      font-weight: 400;
      color: rgb(81, 97, 112);
    }
  }
`;

const Comment = styled.div`
  width: 100%;
  padding: 8px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border-top: 3px solid #edf1f5;
  color: rgb(81, 97, 112);
  font-size: 0.9rem;
  font-weight: 400;
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px 0 0;
    font-size: 0.7rem;
    font-weight: 800;
  }

  img {
    width: 25px;
    height: 25px;
    margin: 0 10px 0 0;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 0 15px 0;
  }
`;
