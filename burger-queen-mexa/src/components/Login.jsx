import React from "react";
import "./styles/Login.css";
import burger from "../images/burger.svg";
import title from "../images/title.svg";
import whiteRectangle from "../images/whiterectangle.svg";
import user from "../images/user.svg";
import padlock from "../images/padlock.svg";
import { db, auth } from './firebase';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const processData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // console.log("Ingrese Email");
      setError("Ingrese Email");
      return;
    }
    if (!pass.trim()) {
      // console.log("Ingrese Password");
      setError("Ingrese Password");
      return;
    }
    if (pass.length < 6) {
      // console.log("Ingrese Password de mínimo 6 carácteres");
      setError("Ingrese Password de mínimo 6 carácteres");
      return;
    }
    setError(null)
    console.log("Pasando todas las validaciones");
  };
  //Aquí va la pinche perra función pa iniciar sesión
  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass)
      setEmail('')
      setPass('')
      setError(null)
      console.log(res.user)
      props.history.push('/Personal')
    } catch (error) {
      console.log(error)
      if (error.code === 'auth/invalid-email') {
        setError('Email no registrado')
      }
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no encontrado')
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta')
      }
    }
  }, [email, pass, props.history])

  return (
    <div className="container mt-5">
      <img className="burger" src={burger} alt="burger" />
      <img
        className="img-fluid__white "
        src={whiteRectangle}
        alt="loginRectangle"
      />
      <img className="logo" src={title} alt="title" />
      <form className="form" onSubmit={processData}>
        <div>

          {error && <div className="alert alert-danger">{error}</div>}
          <img className="user" src={user} alt="user" />
          <input
            type="email"
            className="input form-rounded"
            id="email"
            placeholder="   Correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="">
          <img className="user" src={padlock} alt="padlock" />
          <input
            type="password"
            className="input form-rounded"
            id="password"
            placeholder="  Contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />

        </div>
        <div>
          <button
            id="submit"
            type="submit"
            className="btn form-rounded"
            onClick={login}
          >
            Iniciar Sesión
              </button>
        </div>
        <div>
          <h5 className="names">Nallely Flores y Danaee Partida</h5>
        </div>
      </form>


    </div>
  );
};

export default withRouter(Login);
