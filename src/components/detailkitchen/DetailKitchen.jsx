import React, { useState, useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/DetailKitchen.css";
import rec from "../../assets/images/yellowrec.svg";
import Ready from "../../assets/images/orderReady.svg";
import Table from "react-bootstrap/Table";
import NavbarKitchen from "../navbarkitchen/NavbarKitchen";
import { withRouter } from "react-router-dom";
import { db } from "../firebase/firebase";
import Timer from "../timer/Timer";
const moment = require("moment");

const DetailKitchen = (props) => {
  let [order, setOrder] = useState([]);
  let [arrayItem, setArrayItem] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = props.idOrder.id;
        const data = await db.collection("order").where("id", "==", res).get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrder(arrayData);
        arrayData.forEach((product) => {
          let orderHistory = product.item;
          setArrayItem(orderHistory);
        });
      } catch (error) {
      }
    };
    getData();
  }, []);
  let [close, setClose] = useState();
  const orderReady = async () => {
    let newDate = moment(new Date());
    let readyAt = newDate.hour() * 60 + newDate.minute();
    const res = props.idOrder.id;
    const data = await db
      .collection("order")
      .where("id", "==", res)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({ status: "Listo", readyAt: readyAt });
        });
      });
    const timer = setTimeout(() => {
      props.history.push("/Kitchen");
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img alt="" src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Orden</div>
          <br></br>
          <br></br>
        </div>
        <Table>
          <thead>
            {order.map((item) => (
              <tr key={item.id} className="text-center">
                <td id="paragraph">No. Mesa: {item.table}</td>
                <td id="paragraph">Cliente: {item.nameCus}</td>
                <td id="paragraph">Meserx: {item.userName}</td>
              </tr>
            ))}
          </thead>
        </Table>

        <Table>
          <thead>
            <tr>
              <th id="text-center">Producto</th>
              <th className="text-center">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {arrayItem.map((e, i) => (
              <tr key={i} className="text-center">
                <td id="paragraph" key={e.pro}>
                  {" "}
                  {e.produItem}
                </td>
                <td id="paragraph" key={e.qua}>
                  {" "}
                  {e.quant}
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <td>
                <br></br>
                <br></br>
                <br></br>
                <img
                  alt=""
                  className="ready"
                  src={Ready}
                  onClick={() => orderReady()}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        <NavbarKitchen />
      </div>
    </div>
  );
};

export default withRouter(DetailKitchen);
