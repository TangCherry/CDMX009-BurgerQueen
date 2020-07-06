import React from "react";
import "../../assets/styles/MenuNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";
import addOrder from "../breakfast/Breakfast"

const MenuNavbar = (props,{setProduct}) => {

  const menu = () => {
    props.history.push("/Menu");
  };
  return (
    <div className="navbar" fixed="bottom" bg="dark" varian="dark">
      <div className="bill" fixed="bottom">
      <p id="item">
          Productos: {props.totalQuantity}  Total: ${props.payment}
        </p>
        <button 
        type="submit" 
        className="submit"
        // onChange={() => addOrder(), console.log("holi?")}
        //value={props.product}
        >
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
