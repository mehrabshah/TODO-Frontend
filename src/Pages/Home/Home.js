import React, { useEffect } from "react";
import "./Home.css";
import Avatar from "../../components/Avatar/Avatar";
import { AddTask } from "../../components/addTask/AddTask";

import { getCurrentDateTime } from "../../utils/Date";

export const Home = () => {
 
  return (
    <>
      <div className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-10  m-auto">
              <div className="banner-content text-center">
                <Avatar />
                <AddTask  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
