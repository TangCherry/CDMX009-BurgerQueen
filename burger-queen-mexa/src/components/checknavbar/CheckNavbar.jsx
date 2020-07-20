import React from 'react';
import back from "../../assets/images/back.svg";
import "../../assets/styles/CheckNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const CheckNavbar = (props) => {
  const menu = () => {
    props.history.push("/Menu");
  };
  const floor = () => {
    props.history.push("/Floor");
  };
  return (
    <div className="navbarCheck" fixed="bottom">
      <div className="house">
        <img
        src={house}
        onClick={() => menu()}
        />
      </div>
      <div className="back">
      <img
        src={back}
        onClick={() => floor()}
        />
      </div>
    </div>
  );
};

export default withRouter(CheckNavbar);
