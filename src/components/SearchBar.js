import styled from "styled-components";

import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar({ children }) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params?.title) {
      setSearchText(params.title);
    }
  }, [params?.title]);

  function activeSearch(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);
  }

  return (
    <>
      <Container>
        <MdSearch className="icon" />
        <input
          placeholder="Search by title"
          type="text"
          value={searchText}
          onChange={activeSearch}
        />
      </Container>
      {children}
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 1440px;
  margin: 30px auto 0 auto;
  .icon {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 25px;
  }
  input {
    width: 600px;
    background: rgb(251, 251, 251);
    border: none;
    border-radius: 6px;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1),
      0 4px 4px rgba(103, 132, 187, 0.04);
    font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
    padding: 11px 16px 11px 40px;
    :focus {
      border: 0 none;
      outline: 0;
    }
  }
`;
