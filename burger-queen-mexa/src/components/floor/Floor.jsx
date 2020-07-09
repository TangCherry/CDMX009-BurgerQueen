import React, {useState, useEffect}from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Floor.css";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import sign from "../../assets/images/sign.svg";
import Table from 'react-bootstrap/Table';
import Datauser from "../datauser/Datauser";

const Floor = (props) => {

  let [order, setOrder] = useState([]);
  React.useEffect(() => {
    let hour;
    const getData = async () => {
      try {
        // const res = auth.currentUser.uid;
        // console.log(res)
        const data = await db
          .collection("order")
          .orderBy("id", "asc")
          .get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // hour.
        setOrder(arrayData);
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
      <Datauser/>
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Piso</div>
          <br></br>
          <br></br>
        </div>
        <Table>
          <div className="">
          <tr>
            <th>Mesa</th>
            <th> <img src={clock}/></th>
            <th><img src={hourglass}/></th>
            <th><img src={sign}/></th>
            <th>Status</th>
            <th>Ver</th>
          </tr>
          <tbody>
            <tr>
              {console.log('order',order)}
            {order.map((item) => (
              <td key={item.id} className="">
                <td>{item.table}</td>
                <td></td>
                {/* <td >{item.incomingHour}</td> */}
                {/* <td>{item.check}</td> */}
              </td>
            ))}
            </tr>
            </tbody>
          </div>
        </Table>
        <PersonalNavbar/>
      </div>
    </div>
  );
};

export default withRouter(Floor);
