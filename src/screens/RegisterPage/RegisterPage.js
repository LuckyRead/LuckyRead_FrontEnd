import React from "react";
import { RegisterForm } from "./RegisterForm";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="row" id="Init-SignUp">
        <div className="col-md-4" id="RegistrationForm">
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default RegisterPage;
