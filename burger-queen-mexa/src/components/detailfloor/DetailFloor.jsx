import React, {useState,useEffect} from 'react';
import title from "../../assets/images/title.svg";
import "../../assets/styles/DetailFloor.css";
import rec from "../../assets/images/yellowrec.svg";
import bill from "../../assets/images/bill.svg";
import Table from 'react-bootstrap/Table';
import Datauser from "../datauser/Datauser";
import CheckNavbar from "../checknavbar/CheckNavbar";
import { withRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";

const DetailFloor = (props) => {
    // {console.log('bye',props.idOrder)}
    // console.log('elid?',props.item);
    let [order, setOrder] = useState([]);
    React.useEffect(() => {
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
        console.log(arrayData);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, []);
    const floor = () => {
        //     {props.addOrder}
        props.history.push("/DetailFloor");
      };

    return (
        <div className="container mt-5">
            <Datauser/>
            <div className="box1">
                <div className="text-center">
                    <img src={title} className="images"></img>
                </div>
            <div className="mt-5 text-center">
                <div className="menuTitle">Pedido</div>
                <br></br>
                <br></br>
            </div>
            <div className="numbertable">
            <p id="paragraph">No. Mesa 
                <img src={rec}></img>
            </p>
            <p id="waiterUser">Mesero:
            </p>
            </div>
            <Table>
                <div className="">
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </div>
            </Table>
            <Table>

                {order.map((item) => ( 
              <tr key={item.id} className="">
                <td className="text-center">{item.table}</td>
                <td>{item.incomingHour.split(' ').pop()}</td>
                <td>{item.userName}</td>
                <td className="openStatus">{item.status}</td> 
                {/* <th {...item.status === 'Abierto' ? satus :  }></th> */}
              
                <td  className="detailfloor" onClick={() => floor()}>Ver</td>
              </tr>
            ))}
            </Table>
                <img className="check" src={bill}></img>
            <CheckNavbar/>
            </div>
        </div>

    )
}

export default withRouter(DetailFloor);
