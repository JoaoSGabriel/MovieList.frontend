import api from "./api";

export async function getAllHistory(token, username) {
  const response = await api.get(`/history?username=${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
