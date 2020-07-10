import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Personal from "./components/personal/Personal";
import Menu from "./components/menu/Menu";
import Breakfast from "./components/breakfast/Breakfast";
import Meal from "./components/meal/Meal";
import Floor from "./components/floor/Floor";
import Kitchen from "./components/kitchen/Kitchen";
import DetailFloor from "./components/detailfloor/DetailFloor";
import useAuth from  './hooks/useAuth';
// import { auth, db} from "./components/firebase/firebase";

function App() {
  const { firebaseUser, user} = useAuth();
  let [order, setOrder] = useState([]);
  let [idOrder, setIdOrder] = useState([]);

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Personal">
          <Personal 
          user = {user}
          />
        </Route>
        <Route path="/Kitchen">
          <Kitchen />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
        <Route path="/Breakfast">
          <Breakfast 
          user = {user}
          />
        </Route>
        <Route path="/Meal">
          <Meal
          user = {user} 
          />
        </Route>
        <Route path="/Floor">
          <Floor 
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
      </Switch>
    </Router>
  ) : (
    <p>Cargando... :D</p>
  );
}

export default App;
