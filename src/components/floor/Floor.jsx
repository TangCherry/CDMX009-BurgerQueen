import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { db } from "../firebase/firebase";
import Swal from 'sweetalert2';
import Table from "react-bootstrap/Table";
import CheckNavbar from "../checknavbar/CheckNavbar";
import Timer from "../timer/Timer";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import trash from "../../assets/images/trash.svg";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Floor.css";

const Floor = ({ setOrder, history, setIdOrder, order }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await db
          .collection("order")
          .orderBy("incomingHour", "desc")
          .get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrder(arrayData);
      } catch (error) {
        console.log(error);
      }
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
  const deleteOrder = async (item) => {
    swalWithBootstrapButtons.fire({
      title: '¿Deseas eliminar la orden?',
      text: "La orden no se mostrará más",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminala',
      cancelButtonText: 'No, cancelalo',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Orden eliminada',
        )
        const res = item.id;
        db.collection("order")
          .where("id", "==", res)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          });
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'La orden está segura',
        )
      }
    // if (window.confirm("Deseas eliminar esta orden?")) {
    })
    // }
  };
  const detailfloor = (item) => {
    history.push("/DetailFloor");
    setIdOrder(item);
  };

  return (
    <div className="container mt-5">
      <div className="main-container">
        <div className="text-center">
          <img alt="" src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menu-title">Piso</div>
          <br></br>
          <br></br>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>
                <img alt="clock" src={clock} />
              </th>
              <th>
                <img alt="hourglass" src={hourglass} />
              </th>
              <th>Status</th>
              <th>Cuenta</th>
              <th>Ver</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.id} className="">
                <td className="text-center">{item.table}</td>
                <td>{item.incomingHour.split(" ").pop()}</td>
                <td>
                  {item.status === "En preparación" ? (
                    <Timer inicio={item.inicio} status={item.status} />
                  ) : (
                    item.readyAt - item.startAt
                  )}
                  min
                </td>
                <td
                  className={`${
                    item.status === "En preparación" ? "not-ready" : "ready"
                  }`}
                >
                  {item.status}
                </td>
                <td
                  className={`${
                    item.openClose === "Abierta" ? "open" : "Close"
                  }`}
                >
                  {item.openClose}
                </td>
                <td className="detailfloor" onClick={() => detailfloor(item)}>
                  Ver
                </td>
                <td>
                  <img
                    className="trash"
                    alt=""
                    src={trash}
                    onClick={() => deleteOrder(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <CheckNavbar />
      </div>
    </div>
  );
};

export default withRouter(Floor);
