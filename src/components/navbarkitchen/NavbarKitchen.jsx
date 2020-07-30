import React from "react";
import { withRouter } from "react-router-dom";
import back from "../../assets/images/back.svg";
import house from "../../assets/images/house.svg";
import "../../assets/styles/CheckNavbar.css";

const NavbarKitchen = ({ history }) => {
  const personal = () => {
    history.push("/Personal");
  };
  const kitchen = () => {
    history.push("/Kitchen");
  };
  return (
    <div className="navbar-check" fixed="bottom">
      <div className="house">
        <img alt='' src={house} onClick={() => personal()} />
      </div>
      <div className="back">
        <img alt='' src={back} onClick={() => kitchen()} />
      </div>
    </div>
  );
};

export default withRouter(NavbarKitchen);
