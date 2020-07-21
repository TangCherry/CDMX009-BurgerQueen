import React from "react";
import { withRouter } from "react-router-dom";
const MsjError = (props) => {
  console.log('estoy aqui')
return (
  <div className="modal">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <h5> Oh ño</h5>
      </div>
    </div>
    <div className="modal-body">
      <p> La orden no esta lista todavía</p>
    </div>
    <div className="modal-footer">
      <button>Cerrar </button>
    </div>
  </div>
)
}
export default withRouter(MsjError);
