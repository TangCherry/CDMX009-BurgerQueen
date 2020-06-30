import React from "react";
import title from "../images/title.svg";
import "./styles/Floor.css";
import { withRouter } from "react-router-dom";
import { auth, db } from "./firebase";
import PersonalNavbar from "../components/PersonalNavbar";
import clock from "../images/clock1.svg";
import hourglass from "../images/hourglass.svg";
import sign from "../images/sign.svg";
import Table from 'react-bootstrap/Table';

const Floor = (props) => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("vive");
      setUser(auth.currentUser);
    } else {
      console.log("no vive");
      props.history.push("/");
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Piso</div>
          <br></br>
          <br></br>
        </div>
        <Table responsive>
          <div className="table">
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
              <td>Mesa 2</td>
              <td>11:45</td>
              <td>00:10</td>
              <td>Abierta</td>
              <td>Lista</td>
              <td>Ver</td>
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
