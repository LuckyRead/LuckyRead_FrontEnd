import React from "react";
import spinner from '../resources/Spinner.gif'
import '../styles/loading_popup.css';

const Loading_Popup =  () => (

  <div >

  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content" id="loading_popup">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Cargando</h5>
        </div>
        <div className="modal-body">
          <img src={spinner} alt="loading..." />
        </div>
      </div>
    </div>
  </div>
  </div>
)


export default Loading_Popup
