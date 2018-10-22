import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest} from '../../actions/signupActions.js';
import { login } from '../../actions/authActions.js';
import PropTypes from 'prop-types';
// import { userSignupRequest, isUserExists } from '../../actions/signupActions';

class SignUpPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    const { login } = this.props;
    return (
      <div className="row" className="Init-SignUp">
        <div className="col-md-4" id="RegistrationForm">
          <SignUpForm
            // isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            login={login}/>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  login:PropTypes.func.isRequired
  // isUserExists: React.PropTypes.func.isRequired
}


export default connect(null, { userSignupRequest, login})(SignUpPage);
