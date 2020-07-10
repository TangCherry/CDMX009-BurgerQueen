import React from "react";
import "../../assets/styles/PersonalNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";

const PersonalNavbar = (props) => {
  const personal = () => {
    props.history.push("/Personal");
  };
  return (
    <div className="navbarMenu" fixed="bottom">
      <img
        alt=""
        className="house"
        src={house}        
        onClick={() => personal()}
      ></img>
    </div>
  );
};

export default withRouter(PersonalNavbar);
