import React from 'react';
import back from "../../assets/images/back.svg";
import "../../assets/styles/CheckNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";

const PersonalNavbar = (props) => {
  const personal = () => {
    props.history.push("/Personal");
  };
  return (
    <div className="navbarMenu" fixed="bottom">
      <img
        className="inline"
        src={house}
        onClick={() => personal()}
      ></img>
      <img 
      className="inline"
      src={back}
      ></img>
    </div>
  );
};

export default withRouter(PersonalNavbar);
