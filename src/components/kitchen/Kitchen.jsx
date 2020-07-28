import React, {useState, useEffect}from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Kitchen.css";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import { withRouter } from "react-router-dom";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import Table from 'react-bootstrap/Table';
import { db } from "../firebase/firebase";
import sign from "../../assets/images/sign.svg";
import Timer from '../timer/Timer';
const moment = require('moment');

const Kitchen = (props) => {
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
      }
    };
    getData();
  }, []);
  const detailkitchen = (item) => {
    props.history.push("/DetailKitchen");
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
              <th>Ver</th>
            </tr>
            </thead>
            <tbody>
              {props.order.map((item) => (
                <tr key={item.id} className="">
                  <td className="text-center">{item.table}</td>
                  <td>{item.incomingHour.split(" ").pop()}</td>
                  <td>{item.status === 'En preparación' ? <Timer inicio={item.inicio} status={item.status}/> : item.readyAt - item.startAt} min</td>
                  <td className={`${item.status === 'En preparación' ? 'notReady' : 'ready'}`}>{item.status}</td>
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