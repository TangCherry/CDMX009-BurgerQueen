import React from 'react';
import title from "../../assets/images/title.svg";
import "../../assets/styles/Kitchen.css";
import PersonalNavbar from "../personalnavbar/PersonalNavbar";
import { withRouter } from "react-router-dom";
import clock from "../../assets/images/clock1.svg";
import hourglass from "../../assets/images/hourglass.svg";
import Table from 'react-bootstrap/Table';
import Datauser from "../datauser/Datauser";

const Kitchen = (props) => {
    return (
        <div className="container mt-5">
        <Datauser/>
        <div className="box1">
          <div className="text-center">
            <img src={title} className="images"></img>
          </div>
          <div className="mt-5 text-center">
            <div className="menuTitle">Cocina</div>
                <br></br>
                <br></br>
            </div>
            <Table responsive>
                <div className="table">
                    <tr>
                        <th>Mesa</th>
                        <th> <img src={clock}/></th>
                        <th><img src={hourglass}/></th>
                        <th>Status</th>
                        <th>Ver</th>
                    </tr>
                <tbody>
                    <tr>
                        <td>Mesa 2</td>
                        <td>11:45</td>
                        <td>00:10</td>
                        <td>Ver</td>
                    </tr>   
                </tbody>
                </div>
            </Table>
            <PersonalNavbar/>
        </div>
        </div>
    )
}

export default withRouter(Kitchen);
