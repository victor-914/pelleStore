import axios from "axios";

const api = axios.create({
  baseURL: "https://pellestore-new-strapi.onrender.com",
});

export default api;

export async function fetcher(url, options = {}) {
  let response;

  try {
    if (!options) {
      response = await api.get(url);
    } else {
      response = await api.get(url, options);
    }
  } catch (err) {
    throw err;
  }

  return response?.data;
}
