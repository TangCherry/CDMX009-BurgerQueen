import React from 'react';
import title from '../images/title.svg';
import MenuNavbar from '../components/MenuNavbar';
import CounterInput from 'react-bootstrap-counter';
import {auth, db} from './firebase';


const Meal = () => {

    const [mealItem, setMealItem] = React.useState([])

    React.useEffect(() => {
  
      const getData = async () => {
        try {
          // const res = auth.currentUser.uid;
          // console.log(res)
          const data = await db.collection("meal").orderBy("uid", "asc").get()
          console.log(data)
          const arrayData = data.docs.map(doc =>  ({ uid: doc.uid, ...doc.data() }))
          setMealItem(arrayData)
          console.log(arrayData)
          
          // if (uid === arrayData.uid ){
          //   console.log(arrayData.uid)
          //   return arrayData.user
          //}
        } catch(error) {
          console.log(error)
        }
      }
      getData()
    }, [])

    return (
        <div className="container mt-5">
            <div className="box1">
            <div className="text-center">
                <img 
                src={title} 
                className="images"
                ></img>
            </div>
              <div className="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mesa
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">1</a>
                </div>
            </div>
            </div>
            <MenuNavbar/>
          </div>    
    )
}
  
  export default Meal  