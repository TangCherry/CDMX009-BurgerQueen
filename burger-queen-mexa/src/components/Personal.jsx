import React from "react";
import "./styles/Personal.css";
import title from "../images/title.svg";
import waiter from "../images/waiter.svg";
import chef from "../images/chef.svg";
import logout from "../images/logout.svg";
import { auth, db } from "./firebase";
import { withRouter } from "react-router-dom";

const Personal = (props) => {
  const logOut = () => {
    auth.signOut().then(() => {
      props.history.push("/");
    });
  };
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

  const menu = () => {
    props.history.push("/Menu");
  };
  const kitchen = () => {
    props.history.push("/Kitchen");
  };

  const [userName, setUserName] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const uid = auth.currentUser.uid;
        // console.log(uid)
        const data = await db.collection("user").doc(uid).get();
        console.log(data);
        const arrayData = { user: data.user, ...data.data() };
        setUserName(arrayData);
        console.log(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="welcome">
            Bienvenida
            <p> {userName.user}</p>
          </div>
        </div>
        <div className="row ">
          <div className="mt-5 col-12 text-center">
            <img
              src={waiter}
              className="waiter float-xs-left "
              onClick={() => menu()}
            ></img>
            <img 
            src={chef} 
            className="chef float-xs-right"
            onClick={() => kitchen()}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={logout}
              className="logout float-xs-left"
              onClick={() => logOut()}
            ></img>
            <h3>Cerrar Sesión</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Personal);
