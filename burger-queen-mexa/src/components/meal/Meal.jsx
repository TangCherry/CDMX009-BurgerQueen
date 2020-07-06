import React, { useState,useEffect }from 'react';
import '../../assets/styles/Meal.css';
import title from '../../assets/images/title.svg';
import MenuNavbar from '../menunavbar/MenuNavbar';
import CounterInput from 'react-bootstrap-counter';
import {auth, db} from '../firebase/firebase';
import {withRouter} from 'react-router-dom';
import Datauser from "../datauser/Datauser";
import Username from "../username/Username";

const Meal = (props) => {
    let [totalQuantity, setTotalQuantity]=useState(0)
    const [mealItem, setMealItem] = React.useState([])
    const [payment, setPayment] = useState(0);
    const [product, setProduct] = useState([]);

    return (
      <div className="container mt-5">
        <Datauser/>
        <div className="box1">
          <div className="text-center">
            <img src={title} className="images"></img>
          </div>
          <div className="textTable">
            No. Mesa
            <select className="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="mt-5 text-center">
            <div className="menuTitle">Menú</div>
            <li className="list-group">
              {mealItem.map((item) => (
                <div key={item.uid} className="">
                  <div className="itemTextMeal">{item.item}</div>                
                  <div className="priceTextMeal">$ {item.price}.00</div> 
                  
                  <CounterInput
                    min={0}
                    max={100}
                    onChange={(total) => {
                      let newProduct;
                      let add;
                      let totalPay;
                      if (product.find((p) => p.productId === item.uid)) {
                        newProduct = product.map((p) => {
                          if (p.productId !== item.uid) {
                            return p;
                          }
                          return {
                            ...p,
                            quant: total,                            
                            payment: total * item.price,        
                          }; 
                        });
                      } else {
                        newProduct = [
                          ...product,
                          {
                            productId: item.uid,
                            unitaryPrice: item.price,
                            quant: total,
                            payment: total * item.price,     
                          },
                        ];
                    }
                    setProduct(newProduct);
                    add = newProduct.reduce((sum, value) => ( sum + value.quant ), 0);                                    
                    setTotalQuantity(add); {console.log(add)}
                    totalPay = newProduct.reduce((sum, value) => ( sum + value.payment), 0);  
                    setPayment(totalPay); {console.log(totalPay)}                         
                  }}
                  />                
                  <div className="descriptionTextMeal">{item.description}</div>  <br></br>              
                </div>
              ))}
            </li>
          </div>
          <MenuNavbar
          totalQuantity=  {totalQuantity} payment = {payment}
          />
        </div>
      </div>
    );
}
  
  export default withRouter(Meal)  