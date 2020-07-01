import React, {useState} from 'react';
import title from "../images/title.svg";
import "./styles/DetailFloor.css";
import rec from "../images/yellowrec.svg";

const DetailFloor = ({firebaseUser, setFirebaseUser}) => {
    const [userNameTemp, setUserNameTemp] = useState(firebaseUser);
    return (
        <div className="container mt-5">
            <div className="box1">
                <div className="text-center">
                    <img src={title} className="images"></img>
                </div>
            <div className="mt-5 text-center">
                <div className="menuTitle">Pedido</div>
                <br></br>
                <br></br>
            </div>
            <div className="numbertable">
            <p id="paragraph">No. Mesa 
                <img src={rec}></img>
            </p>
            </div>
            <div className="waiter">
            <p id="paragraph">Mesero:{setUserNameTemp.user}
            </p>
            </div>
            </div>
        </div>

    )
}

export default DetailFloor
