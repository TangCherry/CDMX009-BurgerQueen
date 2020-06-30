import React, {useState} from "react";
import title from "../images/title.svg";
import "./styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { auth, db } from "./firebase";
import MenuNavbar from "../components/MenuNavbar";
import {withRouter} from 'react-router-dom';

const Breakfast = (props) => {

  const [total, setTotal] = useState(0);

  // React.useEffect(() =>{
  //   let tot;
  //    for(let i = 0; total.lenght; i++){
  //      tot += total[1]
  //      console.log(tot)
  //    }
  // },[])

  const [user, setUser] = useState(null)
  React.useEffect(() => {
    if(auth.currentUser){
      console.log('vive')
      setUser(auth.currentUser)
  }else {
    console.log('no vive')
    props.history.push('/')
  }
  }, [])

  const [breakfastItem, setBreakfastItem] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        // const res = auth.currentUser.uid;
        // console.log(res)
        const data = await db
          .collection("breakfast")
          .orderBy("uid", "asc")
          .get();
        const arrayData = data.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setBreakfastItem(arrayData);
        console.log(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  
// console.log(getD  ata)
  return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="textTable  ">
          No. Mesa
          <select className="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Menú</div><br></br><br></br>
          <li className="list-group">
          {breakfastItem.map((item) => (
              <div key={item.uid} className="">
                <div className="itemText ">{item.item}</div>                
                <div className="priceText  ">$ {item.price}.00</div> 
                <div>
                <CounterInput
                  min={0}
                  max={100}
                  onChange={(total) => {                   
                    setTotal(total);                    
                    console.log('total',total , 'de', item.item);                    
                  }}       
                />      
                 </div>         
                <div className="descriptionText"> ({item.description})</div>
              </div>
            ))}
          </li>
        </div>
        <MenuNavbar/>
      </div>
    </div>
  );
};

export default withRouter(Breakfast);
