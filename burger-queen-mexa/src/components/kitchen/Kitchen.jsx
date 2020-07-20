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

const Kitchen = (props) => {
     // let [order, setOrder] = useState([]);
  // let [idOrder, setIdOrder] = useState([]);
  useEffect(() => {
    // let hour;
    const getData = async () => {
      try {
        // const res = auth.currentUser.uid;
        // console.log(res)
        const data = await db
          .collection("order")
          .orderBy("incomingHour", "desc")
          .get();
          // console.log('lanuevañonga',data);
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // hour.
        props.setOrder(arrayData);
        // console.log(arrayData);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, []);
  //  console.log(payment)
  const detailkitchen = (item) => {
    //     {props.addOrder}
    props.history.push("/DetailKitchen");
    props.setIdOrder(item)
    // console.log('hi',item)
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
              {/* {console.log("order", order)} */}
              {props.order.map((item) => (
              
                <tr key={item.id} className="">
                  <td className="text-center">{item.table}</td>
                  <td>{item.incomingHour.split(" ").pop()}</td>
                  <td><Timer inicio={item.inicio} status={item.status}/> min</td>
                  <td className="openStatus">{item.status}</td>
                 
                  {/* <th {...item.status === 'Abierto' ? satus :  }></th> */}

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
