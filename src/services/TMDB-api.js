import api from "./api";

export async function getTrendingList() {
  const response = await api.get("/movies/toptrendig");

  return response.data;
}

export async function getRatedList() {
  const response = await api.get("/movies/toprated");

  return response.data;
}

export async function getUpcomingList() {
  const response = await api.get("/movies/upcoming");

  return response.data;
}

export async function getSearchList(text) {
  const response = await api.get(`/movies/search/${text}`);

  return response.data;
}
