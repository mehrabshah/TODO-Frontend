import React from "react";
import "./Home.css";
import Avatar from "../../components/Avatar/Avatar";
import { AddTask } from "../../components/addTask/AddTask";
import { TaskList } from "../../components/taskList/TaskList";
export const Home = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-10  m-auto">
              <div className="banner-content text-center">
                <Avatar />
                <AddTask />
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
