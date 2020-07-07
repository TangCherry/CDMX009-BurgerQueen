import React from "react";
import "../../assets/styles/MenuNavbar.css";
import house from "../../assets/images/house.svg";
import { withRouter } from "react-router-dom";
import {agregar} from "../breakfast/Breakfast"
import { auth, db } from "../firebase/firebase";
const MenuNavbar = (props,{order, setOrder, agregar}) => {
  // console.log('otro',newOrder)

  let handleAdd=()=>{
    // const conection = db.collection("order").add(newOrder)
    // console.log('funciono',conection)
}


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
            className="submit"
                    onClick={props.addOrder}
                  >Enviar</button>
      </div>
      <div className="houseMenu">
        <img src={house} onClick={() => menu()}></img>
      </div>
    </div>
  );
};

export default withRouter(MenuNavbar);
