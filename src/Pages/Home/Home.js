import React, { useEffect } from "react";
import "./Home.css";
import Avatar from "../../components/Avatar/Avatar";


import { getCurrentDateTime } from "../../utils/Date";
import { Todo } from "../../components/Todo/Todo";

export const Home = () => {
 
  return (
    <>
      <div className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-10  m-auto">
              <div className="banner-content text-center">
                <Avatar />
                <Todo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
