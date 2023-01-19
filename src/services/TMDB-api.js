import api from "./api";

export async function getTrendingList() {
  const response = await api.get("/movies/toptrendig");

  return response.data;
}
