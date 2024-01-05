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
  deleteTask: async (taskId) => {
    try {
      console.log(taskId)

        
      const response = await axios.delete(`${baseURI}/task/deleteTask?id=${taskId}`); 
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
  addTask: async (newTask) => {
    try {
      const response = await axios.post(`${baseURI}/task/createTask`, newTask);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },
  
};
export default taskService;
