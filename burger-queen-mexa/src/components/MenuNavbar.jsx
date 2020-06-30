import React from "react";
import "./styles/MenuNavbar.css";
import house from "../images/house.svg";
import { withRouter } from "react-router-dom";

const MenuNavbar = (props, {setTotal}) => {
  const menu = () => {
    props.history.push("/Menu");
  };
  return (
    <div className="navbar" fixed="bottom" bg="dark" varian="dark">
      <div className="bill" fixed="bottom">
        <p id="item">
          {/* Productos: No.{setTotal, console.log(setTotal)} Total: ${} */}
        </p>
        <button type="submit" className="submit">
          Enviar
        </button>
      </div>
      <div className="houseMenu">
        <img src={house} onClick={() => menu()}></img>
      </div>
    </div>
  );
};

export default withRouter(MenuNavbar);
