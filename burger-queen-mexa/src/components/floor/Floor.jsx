import React, {useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Floor.css";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import CheckNavbar from "../checknavbar/CheckNavbar";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import sign from "../../assets/images/sign.svg";
import Table from "react-bootstrap/Table";
import GetDetailFloor from "../get/GetDetailFloor";
import DetailFloor from "../detailfloor/DetailFloor";
import Timer from '../timer/Timer';

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
        // console.log(arrayData)
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const detailfloor = (item) => {
    props.history.push("/DetailFloor");
    props.setIdOrder(item)
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
              <th>
                Status
              </th>
              <th>
                Cuenta
              </th>
              <th>Ver</th>
            </tr>
            </thead>
            <tbody>
              {props.order.map((item) => (    
                <tr key={item.id} className="">
                  <td className="text-center">{item.table}</td>
                  <td>{item.incomingHour.split(" ").pop()}</td>
                  <td><Timer inicio={item.inicio} status={item.status}/> min</td>
                  <td className="openStatus">{item.status}</td>
                  <td className="openClose">{item.openClose}</td>
                  <td className="detailfloor" onClick={() => detailfloor(item)}>
                    Ver
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
        <CheckNavbar/>
      </div>
    </div>
  );
};

export default withRouter(Floor);
