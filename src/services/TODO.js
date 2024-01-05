import axios from "axios"
const baseURI = 'http://localhost:3000'
const taskService = {
  fetchTasks: async () => {
    try {
       const response= await axios.get(`${baseURI}/task/getAllTask`)
       return response.data;

    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },
};
export default taskService;
