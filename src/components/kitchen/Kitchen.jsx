import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { db } from "../firebase/firebase";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import Table from "react-bootstrap/Table";
import Timer from "../timer/Timer";
import title from "../../assets/images/title.svg";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import "../../assets/styles/Kitchen.css";

const Kitchen = ({ setOrder, history, setIdOrder, order }) => {
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
      } catch (error) {}
    };
    getData();
  }, []);
  const detailkitchen = (item) => {
    history.push("/DetailKitchen");
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
              <th>Ver</th>
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
                  )}{" "}
                  min
                </td>
                <td
                  className={`${
                    item.status === "En preparación" ? "not-ready-kitchen" : "ready-kitchen"
                  }`}
                >
                  {item.status}
                </td>
                <td className="detailfloor" onClick={() => detailkitchen(item)}>
                  Ver
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <PersonalNavbar />
      </div>
    </div>
  );
};

export default withRouter(Kitchen);
