import React, { useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Floor.css";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CheckNavbar from "../checknavbar/CheckNavbar";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import trash from "../../assets/images/trash.svg";
import sign from "../../assets/images/sign.svg";
import Table from "react-bootstrap/Table";
import DetailFloor from "../detailfloor/DetailFloor";
import Timer from "../timer/Timer";

const Floor = (props) => {
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
        props.setOrder(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const deleteOrder = async (item) => {
    if (window.confirm("Deseas eliminar esta orden?")) {
      const res = item.id;
      const data = await db
        .collection("order")
        .where("id", "==", res)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
      console.log("Borrado");
      const timer = setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    }
    
  };
  const detailfloor = (item) => {
    props.history.push("/DetailFloor");
    props.setIdOrder(item);
  };

  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img alt="" src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Piso</div>
          <br></br>
          <br></br>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>
                <img alt="" src={clock} />
              </th>
              <th>
                <img alt="" src={hourglass} />
              </th>
              <th>Status</th>
              <th>Cuenta</th>
              <th>Ver</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.order.map((item) => (
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
                    item.status === "En preparación" ? "notReady" : "ready"
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
                    className="Trash"
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
