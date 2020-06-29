import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Personal from "./components/Personal";
import Menu from "./components/Menu";
import Breakfast from "./components/Breakfast";
import Meal from "./components/Meal";
import Floor from "./components/Floor";

import { auth } from "./components/firebase";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Personal">
          <Personal />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
        <Route path="/Breakfast">
          <Breakfast />
        </Route>
        <Route path="/Meal">
          <Meal />
        </Route>
        <Route path="/Floor">
          <Floor />
        </Route>
      </Switch>
    </Router>
  ) : (
    <p>Cargando... :D</p>
  );
}

export default App;
