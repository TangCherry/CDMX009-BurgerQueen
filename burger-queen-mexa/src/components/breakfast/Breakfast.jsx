import React, { useState, useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { db } from "../firebase/firebase";
import MenuNavbar from "../menunavbar/MenuNavbar.jsx";
import { withRouter } from "react-router-dom";
// import TotalQuantity from "./TotalQuantity.js";
import Datauser from "../datauser/Datauser";
import shortid from "shortid";

const Breakfast = (props) => {
  let [totalQuantity, setTotalQuantity] = useState(0);
  const [payment, setPayment] = useState(0);
  const [product, setProduct] = useState([]);
  let [order] = useState([]);
  const [table, setTable] = useState([]);

  // console.log(product, props.user);

  const [breakfastItem, setBreakfastItem] = useState([]);

  useEffect(() => {
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
        // console.log(arrayData);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, []);
  //  console.log(payment)

  const addOrder = () => {
    // console.log("Guardados en Firebase");
    // const uid = auth.currentUser.uid;
    // // console.log(uid)
    // const userSnap = await db.collection("user").doc(uid).get();
    const newOrder = {
      id: shortid.generate(),
      item: product,
      check: payment,
      totQuantity: totalQuantity,
      table: table,
      userName: props.user.user,
      incomingHour: new Date().toLocaleString(),
      // incomingHour: Date.now(),
      status: 'Abierta',
    };
    const conection = db.collection("order").add(newOrder);
  };
  const floor = () => {
    //     {props.addOrder}
    props.history.push("/Floor");
  };
  return (
    <div className="container mt-5">
      <Datauser />
      <div></div>
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="textTable  ">
          No. Mesa
          <select className="select" onChange={(e) => setTable(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* { console.log(table)} */}
          </select>
        </div>
        <div className="">
          <div className="menuTitle text-center">Menú</div>
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
                            produItem: item.item,
                            unitaryPrice: item.price,
                            quant: total,
                            payment: total * item.price,
                          },
                        ];
                      }
                      setProduct(newProduct);
                      add = newProduct.reduce(
                        (sum, value) => sum + value.quant,
                        0
                      );
                      setTotalQuantity(add);
                      {
                        // console.log(add);
                      }
                      totalPay = newProduct.reduce(
                        (sum, value) => sum + value.payment,
                        0
                      );
                      setPayment(totalPay);
                      {
                        // console.log(totalPay);
                      }
                    }}
                  />
                </div>
                <div className="descriptionText"> ({item.description})</div>
              </div>
            ))}
          </li>
          <MenuNavbar
            totalQuantity={totalQuantity}
            payment={payment}
            order={order}
            addOrder={addOrder}
            floor={floor}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Breakfast);