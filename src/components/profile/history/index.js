import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllHistory } from "../../../services/HistoryApi";
import HistoryCard from "./HistoryCard";

export default function History({ token, profile }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!token) return;
    const promisse = getAllHistory(token, profile.username);
    promisse
      .then((e) => {
        setHistory(e);
      })
      .catch(() => {
        setHistory([]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Title>Histórico de interações</Title>
      {history[0] ? (
        <>
          <Wrappler>
            {history.map((value, index) => (
              <HistoryCard key={index} info={value} />
            ))}
          </Wrappler>
        </>
      ) : (
        <Empty>Você não possui interações no histórico</Empty>
      )}
    </>
  );
}

const Title = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;

const Wrappler = styled.div`
  width: 100%;
  max-height: 785px;
  margin: 20px 0 0 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  padding: 50px 0;
  font-size: 1.3rem;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  font-size: 1.3rem;
`;
