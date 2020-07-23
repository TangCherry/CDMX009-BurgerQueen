import React, { useState, useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/DetailFloor.css";
import rec from "../../assets/images/yellowrec.svg";
import bill from "../../assets/images/bill.svg";
import Table from "react-bootstrap/Table";
import CheckNavbar from "../checknavbar/CheckNavbar";
import { withRouter } from "react-router-dom";
import { db } from "../firebase/firebase";
import MsjError from "../modal/MsjError";

const DetailFloor = (props) => {
  // {console.log('bye',props.idOrder)}
  // console.log('elid?',props.item);
  let [order, setOrder] = useState([]);
  let [arrayItem, setArrayItem] = useState([]);
  useEffect(() => {
    //   let hour;
    const getData = async () => {
      try {
        const res = props.idOrder.id;
        //   console.log('lañonga',res)
        //   const uid = auth.currentUser.uid;
        //       // console.log(uid)
        const data = await db.collection("order").where("id", "==", res).get();
        // console.log('lagata',data);
        // const arrayData = { id: data.id, ...data.data() };
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrder(arrayData);
        arrayData.forEach((product) => {
          let bb = product.item;
          // console.log(bb);
          setArrayItem(bb);
        });
        // console.log(arrayData);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, []);
  const floor = () => {
    //     {props.addOrder}
    props.history.push("/DetailFloor");
  };
  const closeOrder = async () => {
    const res = props.idOrder.id;
    const data = await db
      .collection("order")
      .where("id", "==", res)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({ openClose: "Cerrada" });
        });
      });
    const timer = setTimeout(() => {
      props.history.push("/Floor");
    }, 1000);

    // console.log("Cerrada como la virgen");
  };
  const msjError = () => {
    // MsjError();
    alert('La orden todavía no esta lista.')
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
              <th className="text-center">Precio</th>
              <th className="text-center">Subtotal</th>
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
                <td id="paragraph" key={e.qua}>
                  $ {e.unitaryPrice}
                </td>
                <td id="paragraph" key={e.qua}>
                  $ {e.payment}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Table>
          <thead>
            {order.map((item) => (
              <tr key={item.id} className="text-center"> 
                  
                <td className="check">Total: $ {item.check}</td>
              </tr>
            ))}
          </thead>
          <tbody>
          <tr className="edit">
            </tr> 
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        {order.map((item) => (
              <div key={item.id} className="text-center"> 
                   <img alt="" 
        className="check"
        onClick={item.status === 'Listo' ? () => closeOrder():  () => msjError()}
        src={bill}
        ></img>
        {/* <MsjError /> */}
              </div>
            ))}
       
        <CheckNavbar />
      </div>
    </div>
  );
};

export default withRouter(DetailFloor);
