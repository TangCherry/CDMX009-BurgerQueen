import React from 'react';
import './styles/MenuNavbar.css';
import house from '../images/house.svg';
import {withRouter} from 'react-router-dom';

const MenuNavbar = (props) => {

    const menu = () => {
        props.history.push('/Menu')
      }
      return (
        <div className="navbar" fixed="bottom" bg="dark" varian="dark">
            <div className="bill" fixed="bottom">
                <p id="item">Productos: 2</p>
                <p id="total">Total: $125.00</p>
            </div>
            <img className="house"
            src={house} 
            className="houseMenu"
            onClick={() => menu()}
            ></img>
        </div>
      )

}

    export default withRouter(MenuNavbar)