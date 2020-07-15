import React from 'react';
import back from "../../assets/images/back.svg";
import "../../assets/styles/CheckNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";

const PersonalNavbar = (props) => {
  const personal = () => {
    props.history.push("/Personal");
  };
  const floor = () => {
    props.history.push("/Floor");
  };
  return (
    <div className="navbarCheck" fixed="bottom">
      <img
        alt=""
        className="house"
        src={house}
        onClick={() => personal()}
      ></img>
      <img 
      alt=""
      className="back"
      src={back}
      onClick={() => floor()}
      ></img>
    </div>
  );
};

export default withRouter(PersonalNavbar);
