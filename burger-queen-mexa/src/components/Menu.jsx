import React from 'react';
import './styles/Menu.css';
import title from '../images/title.svg';
import breakfast from '../images/breakfast.svg';
import meal from '../images/meal.svg';
import table from '../images/table.svg';
import {auth} from './firebase';
import {withRouter} from 'react-router-dom';
import PersonalNavbar from './PersonalNavbar';

const Menu = (props) => {

    const [user, setUser] = React.useState(null)
    React.useEffect(() => {
      if(auth.currentUser){
        console.log('vive')
        setUser(auth.currentUser)
    }else {
      console.log('no vive')
      props.history.push('/')
    }
    }, [])

    const breakfastIcon = () => {
            props.history.push('/Breakfast')
          }
    const mealIcon = () => {
            props.history.push('/Meal')
          }
    const tableIcon = () => {
            props.history.push('/Floor')
          }

    return (
    <div className="container mt-5">
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
          <div className="row ">
            <div className="mt-5 col-12 text-center">
              <img 
              src={breakfast} 
              className="breakfast float-xs-left "
              onClick={() => breakfastIcon()}
              />
              <img 
              src={meal} 
              className="meal float-xs-left "
              onClick={() => mealIcon()}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <img 
              src={table} 
              className="table float-xs-left"
              onClick={() => tableIcon()}
              ></img>            
            </div> 
            <PersonalNavbar/>    
          </div> 
      </div>
    </div>
    )
}

export default withRouter(Menu)
