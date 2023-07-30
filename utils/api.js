import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

export default api;

export const getData = async () => {
  const data = await axios.get("http://localhost:8000/specimens");

  // console.log(data.data, "data000000000000");

  return data?.data;
};
