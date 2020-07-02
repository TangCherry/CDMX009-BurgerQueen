import React from 'react';
import '../../assets/styles/Meal.css';
import title from '../../assets/images/title.svg';
import MenuNavbar from '../menunavbar/MenuNavbar';
import CounterInput from 'react-bootstrap-counter';
import {auth, db} from '../firebase/firebase';
import {withRouter} from 'react-router-dom';


const Meal = (props) => {
    const [mealItem, setMealItem] = React.useState([])

    React.useEffect(() => {
      const getData = async () => {
        try {
          // const res = auth.currentUser.uid;
          // console.log(res)
          const data = await db
            .collection("meal")
            .orderBy("uid", "asc")
            .get();
          console.log(data);
          const arrayData = data.docs.map((doc) => ({
            uid: doc.uid,
            ...doc.data(),
          }));
          setMealItem(arrayData);
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
          <div className="textTable">
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
            <li className="list-group">
              {mealItem.map((item) => (
                <div key={item.uid} className="">
                  <div className="itemTextMeal">{item.item}</div>                
                  <div className="priceTextMeal">$ {item.price}.00</div> 
                  
                  <CounterInput
                    min={0}
                    max={100}
                    onChange={(value) => {
                      console.log(value);
                      console.log('uid',item.uid);
                    }}
                    value={0}
                  />                
                  <div className="descriptionTextMeal">{item.description}</div>  <br></br>              
                </div>
              ))}
            </li>
          </div>
          <MenuNavbar />
        </div>
      </div>
    );
}
  
  export default withRouter(Meal)  