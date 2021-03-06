import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import WithAuthRoute from "./WithAuthRoute";
import Login from "./components/login/Login";
import Personal from "./components/personal/Personal";
import Menu from "./components/menu/Menu";
import Breakfast from "./components/breakfast/Breakfast";
import Meal from "./components/meal/Meal";
import Floor from "./components/floor/Floor";
import Kitchen from "./components/kitchen/Kitchen";
import DetailFloor from "./components/detailfloor/DetailFloor";
import DetailKitchen from "./components/detailkitchen/DetailKitchen";

function App() {
  const { firebaseUser, user, loading } = useAuth();
  let [order, setOrder] = useState([]);
  let [idOrder, setIdOrder] = useState([]);

  if (firebaseUser === false) {
    return <div>Cargando...</div>; 
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <WithAuthRoute
          path="/Personal"
          component={Personal}
          user={user}
          loading={loading}
        />
        <WithAuthRoute
          path="/Menu"
          component={Menu}
          user={user}
          loading={loading}
        />
        <WithAuthRoute
          path="/Breakfast"
          component={Breakfast}
          user={user}
          loading={loading}
        />
        <WithAuthRoute
          path="/Meal"
          component={Meal}
          user={user}
          loading={loading}
        />
        <Route path="/Floor">
          <Floor
            order={order}
            setOrder={setOrder}
            idOrder={idOrder}
            setIdOrder={setIdOrder}
          />
        </Route>
        <Route path="/Kitchen">
          <Kitchen
            order={order}
            setOrder={setOrder}
            idOrder={idOrder}
            setIdOrder={setIdOrder}
          />
        </Route>
        <Route path="/DetailFloor">
          <DetailFloor
            order={order}
            setOrder={setOrder}
            idOrder={idOrder}
            setIdOrder={setIdOrder}
          />
        </Route>
        <Route path="/DetailKitchen">
          <DetailKitchen
            order={order}
            setOrder={setOrder}
            idOrder={idOrder}
            setIdOrder={setIdOrder}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
