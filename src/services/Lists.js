import api from "./api";

export async function postMovieFavorit(token, body) {
  const response = await api.post("/action/favorits/new", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function searchMovieFavorit(token, tmdbMovieId) {
  const response = await api.get(
    `/action/favorits?tmdbMovieId=${tmdbMovieId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
