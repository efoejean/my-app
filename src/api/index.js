import axios from "axios";

const url = "https://localhost:4000/api/";

export const fetchData = async (endpoint) => {
  const response = await axios.get(url + endpoint);
  return response.data;
}