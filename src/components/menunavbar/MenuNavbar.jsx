import React from "react";
import { withRouter } from "react-router-dom";
import house from "../../assets/images/house.svg";
import "../../assets/styles/MenuNavbar.css";

const MenuNavbar = ({ history, totalQuantity, payment, addOrder, floor }) => {
  const menu = () => {
    history.push("/Menu");
  };

  return (
    <div className="navbar" fixed="bottom" bg="dark" varian="dark">
      <div className="bill" fixed="bottom">
        <p id="item">
          Productos: {totalQuantity} Total: ${payment}
        </p>
        <button
          type="submit"
          className="submit"
          onClick={(e) => {
            addOrder();
            floor();
          }}
        >
          Enviar
        </button>
      </div>
      <div className="houseMenu">
        <img alt='' src={house} onClick={() => menu()}></img>
      </div>
    </div>
  );
};

export default withRouter(MenuNavbar);
