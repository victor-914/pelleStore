import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export default api;

export const getData = async () => {
  const data = await axios.get("http://localhost:8000/specimens");

  // console.log(data.data, "data000000000000");

  return data?.data;
};
