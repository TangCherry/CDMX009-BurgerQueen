import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import Table from "react-bootstrap/Table";
import { db } from "../firebase/firebase";
import CheckNavbar from "../checknavbar/CheckNavbar";
import title from "../../assets/images/title.svg";
import bill from "../../assets/images/bill.svg";
import "../../assets/styles/DetailFloor.css";

const DetailFloor = ({ idOrder, history }) => {
  let [order, setOrder] = useState([]);
  let [arrayItem, setArrayItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = idOrder.id;
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
      } catch (error) {}
    };
    getData();
  }, []);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn-success',
      cancelButton: 'btn-danger'
    },
    buttonsStyling: false
  })
  const closeOrder = async () => {
    swalWithBootstrapButtons.fire({
      title: '¿Deseas cerrar la orden?',
      text: "La orden se cerrará",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, cierrala',
      cancelButtonText: 'No, cancelalo',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Orden cerrada',
        )
    const res = idOrder.id;
    db.collection("order")
      .where("id", "==", res)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({ openClose: "Cerrada" });
        });
      });
    setTimeout(() => {
      history.push("/Floor");
    }, 1000);
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'La orden sigue abierta',
      )
    }
  })
  };
  const msjError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La orden no está lista todavía',
    })
    // alert("La orden no está lista todavía");
  };

  return (
    <div className="container mt-5">
      <div className="main-container">
        <div className="text-center">
          <img alt="" src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menu-title">Orden</div>
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
            <tr className="edit"></tr>
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        {order.map((item) => (
          <div key={item.id} className="text-center">
            <img
              alt=""
              className="check"
              onClick={
                item.status === "Listo" ? () => closeOrder() : () => msjError()
              }
              src={bill}
            ></img>
          </div>
        ))}
        <CheckNavbar />
      </div>
    </div>
  );
};

export default withRouter(DetailFloor);
