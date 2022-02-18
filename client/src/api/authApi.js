import axiosClient from "./axiosClient";

const authApi = {
  login: async (usernameOrEmail, password) =>
    await axiosClient.post("/auth/login", {
      usernameOrEmail,
      password,
    }),
  register: async (body) =>
    await axiosClient.post("/auth/register", {
      ...body,
    }),
  getUser: async (token) =>
    await axiosClient.get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
  updateUser: async (token, body) =>
    await axiosClient.put("/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      ...body,
    }),
};

export default authApi;
