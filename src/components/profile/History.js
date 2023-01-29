import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllHistory } from "../../services/HistoryApi";
import HistoryCard from "./HistoryCard";

export default function History({ token }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!token) return;
    const promisse = getAllHistory(token);
    promisse
      .then((e) => {
        console.log(e);
        setHistory(e);
      })
      .catch(() => {
        setHistory([]);
      });
  }, [token]);

  return (
    <>
      <Wrappler>
        {history.map((value, index) => (
          <HistoryCard key={index} info={value} />
        ))}
      </Wrappler>
    </>
  );
}

const Wrappler = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
