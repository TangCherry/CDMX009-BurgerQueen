import React from 'react';
import back from "../../assets/images/back.svg";
import "../../assets/styles/CheckNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Kitchen from "../kitchen/Kitchen";

const NavbarKitchen = (props) => {
  const personal = () => {
    props.history.push("/Personal");
  };
  const kitchen = () => {
    props.history.push("/Kitchen");
  };
  return (
    <div className="navbarCheck" fixed="bottom">
      <div className="house">
        <img
        src={house}
        onClick={() => personal()}
        />
      </div>
      <div className="back">
      <img
        src={back}
        onClick={() => kitchen()}
        />
      </div>
    </div>
  );
};

export default withRouter(NavbarKitchen);