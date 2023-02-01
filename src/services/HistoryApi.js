import api from "./api";

export async function getAllHistory(username) {
  const response = await api.get(`/history?username=${username}`);

  return response.data;
}

export async function getHistoryInfo(historyId) {
  const response = await api.get(`/history/info?historyId=${historyId}`);

  return response.data;
}
