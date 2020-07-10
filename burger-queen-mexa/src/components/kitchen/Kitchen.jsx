import React, {useState, useEffect}from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Kitchen.css";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import { withRouter } from "react-router-dom";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import Table from 'react-bootstrap/Table';
import Datauser from "../datauser/Datauser";
import { db } from "../firebase/firebase";
import sign from "../../assets/images/sign.svg";

const Kitchen = (props) => {
    let [order, setOrder] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          // const res = auth.currentUser.uid;
          // console.log(res)
          const data = await db
          .collection("order")
          .orderBy("incomingHour", "desc")
            .get();
          const arrayData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // hour.
          setOrder(arrayData);
          // console.log(arrayData);
        } catch (error) {
          // console.log(error);
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
              <th> <img alt="" src={clock}/></th>
              <th><img alt="" src={hourglass}/></th>
              <th><img alt="" src={sign}/></th>
              <th>Ver</th>
            </tr>
            </thead>
            <tbody>
           
                {/* {console.log('order',order)} */}
              {order.map((item) => (
                <tr key={item.id} className="">
                  <td className="text-center">{item.table}</td>
                  <td>{item.incomingHour.split(' ').pop()}</td>
                  <td>{item.userName}</td>
                  <td className="openStatus">{item.status}</td>
                  {/* <th {...item.status === 'Abierto' ? satus :  }></th> */}
                
                  <td className="detailKitchen">Ver</td>
                </tr>
              ))}
             
              </tbody>
           
          </Table>       
  
          <PersonalNavbar/>
        </div>
      </div>
    );
  };
  

export default withRouter(Kitchen);
