import axios from "axios";

export default {
  getAll: async () => {
    return await axios
      .get(`http://localhost:8081/api/get`)
      .then(({ data }) => data);
  },

  getUpdate: async (id, data) => {
    return await axios
      .put(`http://localhost:8081/api/update/${id}`, data)
      .then(({ data }) => data.done);
  },
  postTodo: async (data) => {
    return await axios
      .post(`http://localhost:8081/api/create/`, data)
      .then(({ data }) => data);
  },
  deleteID: async (id) => {
    return await axios
      .delete(`http://localhost:8081/api/delete/${id}`)
      .then(({ data }) => data);
  },
};
