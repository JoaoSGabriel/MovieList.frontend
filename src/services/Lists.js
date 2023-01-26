import api from "./api";

export async function postMovieFavorit(token, body) {
  const response = await api.post("/action/favorits/new", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
