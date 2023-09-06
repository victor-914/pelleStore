import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:1337/api",
// });

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
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
  throw new Error(err)
  }
  

  return response?.data;
}
