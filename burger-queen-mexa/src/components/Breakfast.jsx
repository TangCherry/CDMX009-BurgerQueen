import React from "react";
import title from "../images/title.svg";
import "./styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { auth, db } from "./firebase";
import MenuNavbar from "../components/MenuNavbar";

const Breakfast = () => {
  const [userName, setUserName] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        // const res = auth.currentUser.uid;
        // console.log(res)
        const data = await db
          .collection("breakfast")
          .orderBy("uid", "asc")
          .get();
        console.log(data);
        const arrayData = data.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
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
        <div className="textTable  ">
          {" "}
          No. Mesa
          <select className="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Menú</div>
          <CounterInput
            min={0}
            max={100}
            onChange={(value) => {
              console.log(value);
            }}
            value={0}
          />
        </div>
        <div className=" ">
          <ul className="list-group">
            {userName.map((item) => (
              <div key={item.uid}>
                {item.item}
                {item.description}
                {item.price}
              </div>
            ))}
          </ul>
        </div>
        <MenuNavbar />
      </div>
    </div>
  );
};

export default Breakfast;
