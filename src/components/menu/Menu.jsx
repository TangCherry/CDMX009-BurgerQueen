import React from "react";
import { withRouter } from "react-router-dom";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import title from "../../assets/images/title.svg";
import breakfast from "../../assets/images/breakfast.svg";
import meal from "../../assets/images/meal.svg";
import table from "../../assets/images/table.svg";
import "../../assets/styles/Menu.css";

const Menu = ({ user, history }) => {
  const breakfastIcon = () => {
    history.push("/Breakfast");
  };
  const mealIcon = () => {
    history.push("/Meal");
  };
  const tableIcon = () => {
    history.push("/Floor");
  };

  return (
    <div className="container mt-5">
      <div className="main-container">
        <div className="text-center">
          <img alt="title" src={title} className="images" />
        </div>
        <div className="row ">
          <div className="mt-5 col-12 text-center">
            <img
              alt="breakfast"
              src={breakfast}
              className="breakfast float-xs-left "
              onClick={() => breakfastIcon()}
            />
            <img
              alt="meal"
              src={meal}
              className="meal float-xs-left "
              onClick={() => mealIcon()}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              alt=""
              src={table}
              className="guest float-xs-left"
              onClick={() => tableIcon()}
            />
            <PersonalNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
