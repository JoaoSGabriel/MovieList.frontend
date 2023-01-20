import { useState } from "react";
import styled from "styled-components";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function activeSearch(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  return (
    <Container>
      <input
        placeholder="Search"
        type="text"
        value={searchText}
        onChange={activeSearch}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 20px 0 0 0;
  input {
    background: rgb(251, 251, 251);
    border: none;
    border-radius: 6px;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1),
      0 4px 4px rgba(103, 132, 187, 0.04);
    display: grid;
    font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
    padding: 11px 16px;
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;
