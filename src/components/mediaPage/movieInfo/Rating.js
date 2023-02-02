import { useEffect, useState } from "react";
import styled from "styled-components";

import useToken from "../../../hooks/useToken";
import { getRate, postRate } from "../../../services/RatedApi";
import { toast } from "react-toastify";

export default function Rating({ movieDetails }) {
  const [value, setValue] = useState(0.5);
  const [rateDetails, setRateDetails] = useState([]);

  const token = useToken();

  useEffect(() => {
    if (movieDetails?.id) {
      const promisse = getRate(token, movieDetails?.id);
      promisse
        .then((e) => {
          setRateDetails(e);
          setValue(e.rated);
        })
        .catch(() => {
          setRateDetails([]);
        });
    }
  }, [movieDetails]);

  function newRate(e) {
    e.preventDefault();
    if (value < 0.5 || value > 10) {
      toast("Digite uma nota entre 0.5 e 10");
      return;
    }

    let src;
    if (movieDetails?.poster_path) {
      src = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
    } else {
      src =
        "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg";
    }

    const body = {
      tmdbTitle: movieDetails.title,
      tmdbMovieId: movieDetails.id,
      tmdbPoster_path: src,
      rated: value,
      rateId: value?.id,
    };

    const promisse = postRate(token, body);
    promisse
      .then(() => {
        toast("Nova nota selecionada");
      })
      .catch(() => {
        toast("Ops! Não foi possível salvar sua nota");
      });
  }

  return (
    <>
      {token ? (
        <Wrappler>
          {rateDetails?.id ? (
            <h3>Sua nota: {rateDetails?.rated}</h3>
          ) : (
            <>
              <h3>Escolha sua nota: {value}</h3>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={newRate}>Escolher</Button>
            </>
          )}
        </Wrappler>
      ) : (
        <></>
      )}
    </>
  );
}

const Wrappler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 70px;

  h3 {
    width: 100%;
    text-align: start;
  }

  input {
    width: 200px;
    height: 10px;
    margin: 10px 0 10px 0;
    background: #e0e0de;
    border-radius: 50px;
    outline: none;
    transition: 0.3s;
    -webkit-appearance: none;

    ::-webkit-slider-thumb {
      appearance: none;
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      background: #f7c50c;
      cursor: pointer;
    }

    ::-moz-range-thumb {
      width: 30px;
      height: 10px;
      background: #4caf50;
      cursor: pointer;
    }
  }
`;

const Button = styled.div`
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 153, 0);
  border-radius: 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;
