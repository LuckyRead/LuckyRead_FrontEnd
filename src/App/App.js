import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_utils";

import Navbar from "../common/NavBar/NavBar.js";

//Screens
import RegisterPage from "../screens/RegisterPage";
import LandingPage from "../screens/LandingPage";
import RandomFragmentPage from "../screens/RandomFragmentPage/RandomFragmentPage";
import FragmentPage from "../screens/FragmentPage/FragmentPage";
import ProfilePage from "../screens/ProfilePage/ProfilePage";
import CategoriesPage from "../screens/CategoriesPage/CategoriesPage";
import ChangePasswordPage from "../screens/ChangePassword/ChangePasswordPage";
import Email from "../screens/ChangePassword/Email";
import News from "../screens/News/NewsView";
import FragmentPDF from "../screens/PdfFragment/FragmentPDF";
import CommentTest from "../Test/CommentTest";
import PopUp from "../screens/PopUp/PopUpExample"
import Test from "../Test/Test";
import CategoriesInitPage from "../screens/CategoriesInitPage/CategoriesInitPage"
import FragmentsView from "../screens/CategoriesPage/FragmentsView"

// Styles
import "./App.css";
import { Alerts } from "./Styled";
import { isPrimitive } from "util";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Navbar />
        <Alerts>
          <div className="row">
            <div className="col-md-5">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
            </div>
          </div>
        </Alerts>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/RegisterPage" component={RegisterPage} />
              <PrivateRoute exact path="/ProfilePage" component={ProfilePage} />
              <PrivateRoute exact path="/PopUpExample" component={PopUp} />
              <Route path="/news" component={News} />
              <PrivateRoute
                exact
                path="/CategoriesPage"
                component={CategoriesPage}
              />
              <Route exact path="/Comments" component={CommentTest} />
              <Route exact path="/Test" component={Test} />
              <PrivateRoute
                exact
                path="/RandomFragmentPage"
                component={RandomFragmentPage}
              />

              <PrivateRoute exact path="/ProfilePage" component={ProfilePage} />
              <Route exact path="/news" component={News} />
              <Route exact path="/Email" component={Email} />
              <Route
                path="/reset_password/:token"
                component={ChangePasswordPage}
              />

              <Route path="/fragment/:fragment_id" component={FragmentPage} />
              <Route path="/pdf/:fragment_id" component={FragmentPDF} />
              <Route path="/fragmentsview/:topic_id" component={FragmentsView} />
              <Route path="/CategoriesInitPage" component={CategoriesInitPage} />


            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
