import axios from "axios";

axios.defaults.baseURL = "https://644a3dafa8370fb321487f9d.mockapi.io/";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
