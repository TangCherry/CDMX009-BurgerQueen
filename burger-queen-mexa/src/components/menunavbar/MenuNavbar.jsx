import React from "react";
import "../../assets/styles/MenuNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";
import {agregar} from "../breakfast/Breakfast"
import { auth, db } from "../firebase/firebase";
import Timer from '../timer/Timer.jsx';

const MenuNavbar = (props) => {
  console.log('segunditos',props.Timer)

  const menu = () => {
    props.history.push("/Menu");
  }
  
  return (
    <div className="navbar" fixed="bottom" bg="dark" varian="dark">
      <div className="bill" fixed="bottom">
      <p id="item">
          Productos: {props.totalQuantity}  Total: ${props.payment}
        </p>
        <button   
            className="submit"
            //onClick={ props.addOrder} 
            onClick = {(e)=>{props.addOrder(); props.floor();}}
            // props.isActive = true
            >Enviar</button>
      </div>
      <div className="houseMenu">
        <img src={house} onClick={() => menu()} ></img>
      </div>
    </div>
  );
};

export default withRouter(MenuNavbar);

