import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Personal from "./components/personal/Personal";
import Menu from "./components/menu/Menu";
import Breakfast from "./components/breakfast/Breakfast";
import Meal from "./components/meal/Meal";
import Floor from "./components/floor/Floor";
import Kitchen from "./components/kitchen/Kitchen";
import DetailFloor from "./components/detailfloor/DetailFloor";

import { auth } from "./components/firebase/firebase";

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
        <Route path="/Kitchen">
          <Kitchen />
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
        <Route path="/DetailFloor">
          <DetailFloor />
        </Route>
      </Switch>
    </Router>
  ) : (
    <p>Cargando... :D</p>
  );
}

export default App;
