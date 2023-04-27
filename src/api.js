import axios from "axios";

axios.defaults.baseURL = "https://644a3dafa8370fb321487f9d.mockapi.io";

export const fetchUsers = async (page) => {
  try {
    const response =
      await axios.get(`/users?completed=false&page=${page}&limit=3
`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
