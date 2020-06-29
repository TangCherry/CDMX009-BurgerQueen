import React from "react";
import title from "../images/title.svg";
import "./styles/Floor.css";
import { withRouter } from "react-router-dom";
import { auth, db } from "./firebase";
import PersonalNavbar from "../components/PersonalNavbar";
import clock from "../images/clock.svg";
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
          <tr>
            <th>Mesa</th>
            <th>Clock</th>
          </tr>
        </Table>
      </div>
    </div>
  );
};

export default withRouter(Floor);
