import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase";
import title from "../../assets/images/title.svg";
import waiter from "../../assets/images/waiter.svg";
import chef from "../../assets/images/chef.svg";
import logout from "../../assets/images/logout.svg";
import "../../assets/styles/Personal.css";

const Personal = ({ history, user }) => {
  const logOut = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  const menu = () => {
    history.push("/Menu");
  };
  const kitchen = () => {
    history.push("/Kitchen");
  };

  return (
    <div className="container mt-5">
      <div className="main-container">
        <div className="text-center">
          <img alt='' src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="welcome">
            Bienvenida
            <div>{user.user}</div>
          </div>
        </div>
        <div className="row ">
          <div className="mt-5 col-12 text-center">
            <img
              alt="waiter"
              src={waiter}
              className="waiter float-xs-left "
              onClick={() => menu()}
            ></img>
            <img
              alt="chef"
              src={chef}
              className="chef float-xs-right"
              onClick={() => kitchen()}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              alt=''
              src={logout}
              className="logout float-xs-left"
              onClick={() => logOut()}
            ></img>
            <h3>Cerrar Sesión</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Personal);
