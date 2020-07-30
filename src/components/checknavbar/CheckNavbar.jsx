import React from "react";
import { withRouter } from "react-router-dom";
import back from "../../assets/images/back.svg";
import house from "../../assets/images/house.svg";
import "../../assets/styles/CheckNavbar.css";

const CheckNavbar = ({ history }) => {
  const menu = () => {
    history.push("/Menu");
  };
  const floor = () => {
    history.push("/Floor");
  };
  return (
    <div className="navbar-check" fixed="bottom">
      <div className="house">
        <img alt='' src={house} onClick={() => menu()} />
      </div>
      <div className="back">
        <img alt='' src={back} onClick={() => floor()} />
      </div>
    </div>
  );
};

export default withRouter(CheckNavbar);
