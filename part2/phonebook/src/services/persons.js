import axios from "axios";
const baseUrl = "/api/persons";

const deletePerson = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const result = await request;
  return result.data
};

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject);
  const response = await request;
  return response.data;
};

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  const response = await request;
  return response.data;
};

export default { create, update, deletePerson };
