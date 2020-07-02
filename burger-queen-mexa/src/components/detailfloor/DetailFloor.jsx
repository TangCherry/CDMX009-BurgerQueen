import React, {useState} from 'react';
import title from "../../assets/images/title.svg";
import "../../assets/styles/DetailFloor.css";
import rec from "../../assets/images/yellowrec.svg";
import Table from 'react-bootstrap/Table';

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
            <p id="waiterUser">Mesero:{setUserNameTemp.user}
            </p>
            </div>
            <Table responsive>
                <div className="table">
                    <tr>
                        <th>Mesa</th>
                        <th>Mesa</th>
                        <th>Mesa</th>
                    </tr>
                </div>
            </Table>
            </div>
        </div>

    )
}

export default DetailFloor
