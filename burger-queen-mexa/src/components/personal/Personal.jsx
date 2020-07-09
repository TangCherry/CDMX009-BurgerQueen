import React, { useAuth } from "react";
import "../../assets/styles/Personal.css";
import title from "../../assets/images/title.svg";
import waiter from "../../assets/images/waiter.svg";
import chef from "../../assets/images/chef.svg";
import logout from "../../assets/images/logout.svg";
import { auth, db } from "../firebase/firebase";
import { withRouter } from "react-router-dom";
import Datauser from "../datauser/Datauser";
// import Username from "../usern/Username";

const Personal = (props) => {


  
  const logOut = () => {
    auth.signOut().then(() => {
      props.history.push("/");
    });
  };
    
  // console.log('danaee apesta', props.userAuth)
  const menu = () => {
    props.history.push("/Menu");
  };
  const kitchen = () => {
    props.history.push("/Kitchen");
  };

  // const [userName, setUserName] = React.useState([]);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const uid = auth.currentUser.uid;
  //       // console.log(uid)
  //       const data = await db.collection("user").doc(uid).get();
  //       console.log(data);
  //       const arrayData = { user: data.user, ...data.data() };
  //       setUserName(arrayData);
  //       console.log(arrayData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);


    // console.log('yo',props.user);
    // console.log('yo',props.user.user);
  
  
  return (
    <div className="container mt-5">
      <div className="box1">
        <Datauser/>
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="mt-5 text-center">
          <div className="welcome">
            Bienvenida
            
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
