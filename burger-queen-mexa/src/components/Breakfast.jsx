import React, { useState } from "react";
import title from "../images/title.svg";
import "./styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { auth, db } from "./firebase";
import MenuNavbar from "../components/MenuNavbar";
import { withRouter } from "react-router-dom";

const Breakfast = (props) => {
  const [total, setTotal] = useState(null );
  const [productos, setProductos] = useState([]);

  console.log(productos);

  // React.useEffect(() =>{
  //   let tot;
  //    for(let i = 0; total.lenght; i++){
  //      tot += total[1]
  //      console.log(tot)
  //    }
  // },[])

  // {
  //   productos: [
  //     { productoId: '', precioUnitario: 0, cantidad: 0 }
  //   ],
  //   nroMesa: 0,
  //   nombreMesero: ''
  // }

  const [user, setUser] = useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("vive");
      setUser(auth.currentUser);
    } else {
      console.log("no vive");
      props.history.push("/");
    }
  }, []);

  const [table, setTable] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const dataOfTable = await db
          .collection("table")
          .orderBy("uid", "asc")
          .get();
        const arrayDataTable = dataOfTable.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setTable(arrayDataTable);
        console.log(arrayDataTable);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
          <select className="select" onChange={(e) => {setTable()} }>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            {/* { console.log(table)} */}
          </select> 

          {/* {table.map((item) => (
              <select key={item.uid} className="">
                <option value={item.uid}>{item.uid}</option>
                </select>
                
                ))
          } */}
                
         
        </div>
        <div className="mt-5 text-center">
          <div className="menuTitle">Menú</div>
          <br></br>
          <br></br>
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
                      // setTotal(total);
                      // console.log('total',total , 'de', item.item)

                      let productosNew;
                      if (productos.find((p) => p.productoId === item.uid)) {
                        productosNew = productos.map((p) => {
                          if (p.productoId !== item.uid) {
                            return p;
                          }
                          return {
                            ...p,
                            cant: total,
                          };
                        });
                      } else {
                        productosNew = [
                          ...productos,
                          {
                            productoId: item.uid,
                            precioUnitario: item.price,
                            cant: total,
                          },
                        ];
                      }
                      setProductos(productosNew);
                    }}
                  />
                </div>
                <div className="descriptionText"> ({item.description})</div>
              </div>
            ))}
          </li>
        </div>
        <MenuNavbar />
      </div>
    </div>
  );
};

export default withRouter(Breakfast);
