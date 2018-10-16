import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest} from '../../actions/signupActions.js';
import { addFlashMessage } from '../../actions/flashMessages.js';
import PropTypes from 'prop-types';
// import { userSignupRequest, isUserExists } from '../../actions/signupActions';

class SignUpPage extends React.Component {
  render() {
    // const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    const { userSignupRequest } = this.props;
    return (
      <div className="row" className="Init-SignUp">
        <div className="col-md-4 col-md-offset-4" id="RegistrationForm">
          <SignUpForm
            // isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired﻿

}

// export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignUpPage);
export default connect(null, { userSignupRequest})(SignUpPage);
