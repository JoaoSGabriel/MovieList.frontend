import api from "./api";

export async function getAllHistory(token) {
  const response = await api.get("/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
