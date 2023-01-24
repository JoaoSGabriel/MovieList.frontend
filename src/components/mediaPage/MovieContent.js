import styled from "styled-components";
import Collections from "./Collections";

export default function MovieContent({ movieDetails }) {
  return (
    <>
      <Wrappler>
        {movieDetails.belong_to_collection ? (
          <></>
        ) : (
          <Collections collectionDetails={movieDetails.belongs_to_collection} />
        )}
      </Wrappler>
    </>
  );
}

const Wrappler = styled.div`
  width: 1075px;
  margin: 30px 0 0 30px;

  h1 {
    color: rgb(92, 114, 138);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 10px 0;
  }
`;
