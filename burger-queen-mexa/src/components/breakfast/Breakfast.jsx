import React, { useState,useEffect } from "react";
import title from "../../assets/images/title.svg"
import "../../assets/styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { auth, db } from "../firebase/firebase";
import MenuNavbar from "../menunavbar/MenuNavbar.jsx";
import { withRouter } from "react-router-dom";
import TotalQuantity from './TotalQuantity.js';

const Breakfast = (props) => {
  let [totalQuantity, setTotalQuantity]=useState(0)
  const [payment, setPayment] = useState(0);
  const [product, setProduct] = useState([]);
  // let [order, setOrder] = useState([]);

  //console.log(product);

  const [user, setUser] = useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("vive");
      setUser(auth.currentUser);
    } else {
      console.log("no vive");
      props.history.push("/");
    }
  }, []);

  React.useEffect(() => {
  const addOrder = async (e) => {
    try { 
      const newOrder = {
        item: product.item,
        price: payment,
        quantity: totalQuantity,
        table: table,
        user: user,
        incomingHour: Date.now()
      }
      const order = await db.collection("order").add(addOrder)
    } catch (error) {
      console.log(error)
    }
  };
  addOrder();
}, []);

  const [table, setTable] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const dataOfTable = await db
          .collection("table")
          .orderBy("uid", "asc")
          .get();
        const arrayDataTable = dataOfTable.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setTable(arrayDataTable);
        console.log(arrayDataTable);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const [breakfastItem, setBreakfastItem] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        // const res = auth.currentUser.uid;
        // console.log(res)
        const data = await db
          .collection("breakfast")
          .orderBy("uid", "asc")
          .get();
        const arrayData = data.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setBreakfastItem(arrayData);
        console.log(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  //  console.log(payment)

  return (
    <div className="container mt-5">
      <div>
      </div>
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="textTable  ">
          No. Mesa
          <select className="select" onChange={(e) => {setTable()} }>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            {/* { console.log(table)} */}
          </select> 
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Menú</div>
          <br></br>
          <br></br>
          <li className="list-group">
            {breakfastItem.map((item) => (
              <div key={item.uid} className="">
                <div className="itemText ">{item.item}</div>
                <div className="priceText  ">$ {item.price}.00</div>
                <div>
                  <CounterInput
                    min={0}
                    max={100}
                    onChange={(total) => {
                      // console.log('total',total , 'de', item.item)
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
                </div>
                <div className="descriptionText"> ({item.description})</div>
              </div>
            ))}
          </li>
          <MenuNavbar 
          totalQuantity=  {totalQuantity} payment = {payment}
          />
        </div>
       </div>
   </div>
  );
};

export default withRouter(Breakfast);
