import React, { useState, useEffect } from "react";
import "../../assets/styles/Meal.css";
import title from "../../assets/images/title.svg";
import MenuNavbar from "../menunavbar/MenuNavbar";
import CounterInput from "react-bootstrap-counter";
import { auth, db } from "../firebase/firebase";
import { withRouter } from "react-router-dom";
import shortid from "shortid";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timer from '../timer/Timer';

const Meal = (props) => {
  let [totalQuantity, setTotalQuantity] = useState(0);
  const [mealItem, setMealItem] = React.useState([]);
  const [payment, setPayment] = useState(0);
  const [product, setProduct] = useState([]);
  let [order, setOrder] = useState([]);
  const [table, setTable] = useState([]);
  let [customerName, setCustomerName] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await db.collection("meal").orderBy("uid", "asc").get();
        const arrayData = data.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setMealItem(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  const addOrder = () => {
    const newOrder = {
      id: shortid.generate(),
      item: product,
      check: payment,
      totQuantity: totalQuantity,
      table: table,
      userName: props.user.user,
      incomingHour: new Date().toLocaleString(),
      inicio: +(new Date()),
      status: "En preparación",
      nameCus: customerName,
      openClose: "Abierta",
      
    };
    const conection = db.collection("order").add(newOrder);
  };
  const floor = () => {
    props.history.push("/Floor");
  };

  return (
    <div className="container mt-5">
      <div></div>
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="textTable  ">
          No. Mesa
          <select className="select" onChange={(e) => setTable(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="">
          <Form>
            <Row>
              <Col>
                <Form.Control
                  className="customer"
                  placeholder="Cliente"
                  id="name"
                  onChange={(e) => setCustomerName(e.target.value)}
                  value={customerName}
                />
              </Col>
            </Row>
          </Form>
          <div className="menuTitle text-center">Menú</div>
          <br></br>
          <br></br>
          <li className="list-group">
            {mealItem.map((item) => (
              <div key={item.uid} className="">
                <div className="itemText ">{item.item}</div>
                <div className="priceText  ">$ {item.price}.00</div>
                  <CounterInput
                    min={0}
                    max={100}
                    onChange={(total) => {
                      let newProduct;
                      let add;
                      let totalPay;
                      if (product.find((p) => p.productId === item.uid)) {
                        newProduct = product.map((p) => {
                          if (p.productId !== item.uid) {
                            return p;
                          }
                          return {
                            ...p,
                            quant: total,
                            payment: total * item.price,
                          };
                        });
                      } else {
                        newProduct = [
                          ...product,
                          {
                            productId: item.uid,
                            produItem: item.item,
                            unitaryPrice: item.price,
                            quant: total,
                            payment: total * item.price,
                          },
                        ];
                      }
                      setProduct(newProduct);
                      add = newProduct.reduce(
                        (sum, value) => sum + value.quant,
                        0
                      );
                      setTotalQuantity(add);
                      {
                      }
                      totalPay = newProduct.reduce(
                        (sum, value) => sum + value.payment,
                        0
                      );
                      setPayment(totalPay);
                      {
                        // console.log(totalPay);
                      }
                    }}
                  />
                
                <div className="descriptionText"> ({item.description})</div>
                <br></br>
                
                </div>
            ))}
          </li>

          <MenuNavbar
            totalQuantity={totalQuantity}
            payment={payment}
            order={order}
            addOrder={addOrder}
            floor={floor}
          />
        </div>
      </div>
    </div>
    
  );
};

export default withRouter(Meal);
