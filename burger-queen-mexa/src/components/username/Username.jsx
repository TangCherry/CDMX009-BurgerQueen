import React from 'react';
import { auth, db } from "../firebase/firebase";
import { withRouter } from "react-router-dom";

function Username(props) {

  const [userName, setUserName] = React.useState([]);
  // console.log('yo',userName.user)

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
    <div>
        {/* {console.log('holi, vamos a morir todos')} */}
        <p> {userName.user}</p>
    </div>
)
}

export default withRouter(Username);