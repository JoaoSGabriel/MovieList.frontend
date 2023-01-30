import api from "./api";

export async function getProfile(username) {
  const response = await api.get(`/users/profile?username=${username}`);

  return response.data;
}
