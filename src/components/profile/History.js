import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllHistory } from "../../services/HistoryApi";
import HistoryCard from "./HistoryCard";

export default function History({ token, profile }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!token) return;
    const promisse = getAllHistory(token);
    promisse
      .then((e) => {
        setHistory(e);
      })
      .catch(() => {
        setHistory([]);
      });
  }, [token]);

  return (
    <>
      {history[0] ? (
        <Wrappler>
          {history.map((value, index) => (
            <HistoryCard key={index} info={value} />
          ))}
        </Wrappler>
      ) : (
        <Empty>Você não possui interações no histórico</Empty>
      )}
    </>
  );
}

const Wrappler = styled.div`
  width: 100%;
  max-height: 785px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Empty = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  font-size: 1.3rem;
`;
