import React, { Component } from "react";
import axios from "axios";
import "./myprofile.css";
import "./loader.css";
import Spinner from "react-spinkit";

class ChangeAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      showImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZS_mBVAw53O1RrjB5RdofzPaziI2UKw7UHJXlFubx327yJMU",
      loaded: false,
      finishloaded: false
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      showImage: URL.createObjectURL(event.target.files[0])
    });
  };

  fileUploadHandler = () => {
    console.log(this.state.selectedFile);
    this.setState({
      loaded: true
    });
    const formData = new FormData();
    formData.append("image", this.state.selectedFile);
    //subir imagen
    axios
      .post(
        "https://luckyread-backend.herokuapp.com/api/photo/upload",
        formData,
        {
          onUploadProgress: progressEvent => {
            console.log(
              "Upload Progress: " +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                "%"
            );
          }
        }
      )
      .then(response => {
        console.log("upload photo");
        console.log(response);
        console.log("el id de la foto es: " + response["data"]["id"]);
        axios({
          method: "patch",
          url:
            "https://luckyread-backend.herokuapp.com/api/photo/set_profile_photo",
          data: {
            id_photo: response["data"]["id"]
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken")
          }
        })
          .then(response => {
            console.log(response);
            this.setState({
              loaded: false,
              finishloaded: true
            });
          })
          .catch(function(error) {
            console.log("el error es vinculando la foto con un usuario");
          });
      })
      .catch(function(error) {
        console.log("el error es cargando la foto");
      });
  };

  render() {
    return (
      <div className="Avatar">
        <div className="row justify-content-center">
          <input
            style={{ display: "none" }}
            type="file"
            className="form-control-file"
            id="exampleFormControlFile"
            onChange={this.fileSelectedHandler}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => this.fileInput.click()}
          >
            Escoger imagen
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.fileUploadHandler}
          >
            {this.state.loaded ? (
              <Spinner name="circle" fadein="none" color="white" />
            ) : (
              "Cargar"
            )}
          </button>
        </div>
        <div className="row justify-content-center" id="crop-img">
          <img src={this.state.showImage} alt="profile" />
        </div>
        {this.state.finishloaded ? (
          <p className="text-success text-center">
            <strong>La foto ha sido cargada exitosamente</strong>
          </p>
        ) : null}
      </div>
    );
  }
}

export default ChangeAvatar;
