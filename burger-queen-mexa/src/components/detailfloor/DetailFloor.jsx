import React, {useState} from 'react';
import title from "../../assets/images/title.svg";
import "../../assets/styles/DetailFloor.css";
import rec from "../../assets/images/yellowrec.svg";
import bill from "../../assets/images/bill.svg";
import Table from 'react-bootstrap/Table';
import Datauser from "../datauser/Datauser";
import { withRouter } from "react-router-dom";

const DetailFloor = (props) => {

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
                    <tbody>
                        <tr>
                            <td>Chilakillers</td>
                            <td>1</td>
                            <td>$95.00</td>
                        </tr>
                    </tbody>
                </div>
            </Table>
            <Table>
            <div className="">
                    <tr>
                        <th id="edit">Editar</th>
                        <th>Total: $</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td> </td>
                        </tr>
                    </tbody>
                </div>
            </Table>
            <div className="bill">
                <img src={bill}></img>
            </div>
            </div>
        </div>

    )
}

export default withRouter(DetailFloor);
