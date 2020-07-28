import React from 'react';
import { auth } from "../firebase/firebase";
import { withRouter } from "react-router-dom";

function DataUser (props) {
const [user, setUser] = React.useState(null);
React.useEffect(() => {
  if (auth.currentUser) {
    setUser(auth.currentUser);
  } else {
    props.history.push("/");
  }
}, []);
return (
    <div>
    </div>
)
}
export default withRouter(DataUser);