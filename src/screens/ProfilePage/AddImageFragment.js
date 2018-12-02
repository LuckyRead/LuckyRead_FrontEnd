import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-spinkit";
import { ChangeAvatarContainer } from "./Styled";

class AddImageFragment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      showImage:
        "https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png",
      loaded: false,
      finishloaded: false,
      id: null
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
        this.setState({
              loaded: false,
              finishloaded: true,
              id: response["data"]["id"]
          });
        // axios({
        //   method: "patch",
        //   url:
        //     "https://luckyread-backend.herokuapp.com/api/photo/set_profile_photo",
        //   data: {
        //     id_photo: response["data"]["id"]
        //   },
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("jwtToken")
        //   }
        // })
        //   .then(response => {
        //     console.log(response);
        //     this.setState({
        //       loaded: false,
        //       finishloaded: true
        //     });
        //   })
        //   .catch(function(error) {
        //     console.log("el error es vinculando la foto con un usuario");
        //   });
      })
      .catch(function(error) {
        console.log("el error es cargando la foto");
        console.log(error);
      });
  };

  render() {
    return (
      <ChangeAvatarContainer>
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
      </ChangeAvatarContainer>
    );
  }
}

export default AddImageFragment;
