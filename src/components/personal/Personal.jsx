import React from "react";
import "../../assets/styles/Personal.css";
import title from "../../assets/images/title.svg";
import waiter from "../../assets/images/waiter.svg";
import chef from "../../assets/images/chef.svg";
import logout from "../../assets/images/logout.svg";
import { auth, db } from "../firebase/firebase";
import { withRouter } from "react-router-dom";

const Personal = (props) => {
  const logOut = () => {
    auth.signOut().then(() => {
      props.history.push("/");
    });
  };
  const menu = () => {
    props.history.push("/Menu");
  };
  const kitchen = () => {
    props.history.push("/Kitchen");
  };

  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="welcome">
            Bienvenida
            <div>{props.user.user}</div>
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
