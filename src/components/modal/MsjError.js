import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-modal';

const MsjError = (props) => {
  const [show, setShow] = useState(false);

  // const closeModal = () => setShow();
  // const launchModal = () => setShow();
  
  
return (
  <>
  <Button onClick={() => setShow(true)}> </Button>
   {
     (show) && (<Modal.Dialog >
      <Modal.Header closeButton>
        <Modal.Title>Ha ocurrido un error</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>La orden no está lista todavía</p>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)} >Cerrar</Button>
      </Modal.Footer>
      </Modal.Dialog>
    )
   }
  
</>
)
}
export default withRouter(MsjError);
