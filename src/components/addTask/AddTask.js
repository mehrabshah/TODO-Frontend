// AddTask.js
import React, { useEffect, useState } from "react";
import "./AddTask.css";
import { Input } from "../input/Input";
import PlusIcon from "../../icons/PlusIcon";
import { getCurrentDateTime } from "../../utils/Date";
import taskService from "../../services/TODO";
import { SingleTask } from "../singleTask/SingleTask";
import ListIcon from "../../icons/ListIcon";
import ChevronIcon from "../../icons/ChevronIcon";
export const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  useEffect(() => {
    fetchTask();
  }, []);

  const [taskValue, setTaskValue] = useState({
    name: "",
    status: "Not Completed",
    date: "",
  });
   
  const [updateTaskValue,setUpdateTaskValue]=useState(
        {

          status: "Not Completed",
        }


  )



  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTaskValue((prevTaskValue) => ({
      ...prevTaskValue,
      [name]: value,
    }));
  };
  const onChevron = () => {
    setDisplayList((prev) => !prev);
  };

  const addTask = async () => {
    try {
      const currentDateTime = getCurrentDateTime();
      const newTask = { ...taskValue, date: currentDateTime };
      await taskService.addTask(newTask);
      fetchTask();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const fetchTask = async () => {
    try {
      const tasksData = await taskService.fetchTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchTask();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask=async(id,data)=>{
    try {
      const status = data ? 'Completed' : 'Not Completed';
  
      
     
  
      setUpdateTaskValue((prevTaskValue) => ({
        ...prevTaskValue,
        status: status,
      }));

       
    
      await taskService.updateTaskStatus(id, updateTaskValue);
      fetchTask();
    } catch (error) {
      console.error('Error updating task:', error);
    }

  }


  return (
    <>
      {" "}
      <div className="add-task">
        <div className="mb-2 input-group">
          <Input
            type="text"
            name="name"
            placeholder="Add new task"
            onChange={handleInputChange}
            value={taskValue.name}
          />
          <div className="input-icon-wrapper" onClick={addTask}>
            <PlusIcon className="input-icon" />
          </div>
        </div>
      </div>
      <div className="select">
        <div className="select-wrapper">
          <div className="left">
            <div className="select-icon-wrapper">
              <ListIcon />
            </div>
            <span className="left-heading ms-2">Your todos</span>
          </div>
          <div className="chevron-wrapper" onClick={onChevron}>
            <ChevronIcon />
          </div>
        </div>
      </div>
      {displayList ? (
        <ul className="task-list mt-2 ps-0 pb-3">
          {tasks.map((item, index) => (
            <SingleTask key={index} item={item} deleteTask={deleteTask}   updateTask={updateTask} />
          ))}
        </ul>
      ) : null}
    </>
  );
};
