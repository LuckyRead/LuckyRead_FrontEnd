import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
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
import Categories_List from "../screens/CategoriesPage/Categories_List";

// Styles
import "./App.css";
import { Alerts } from "./Styled";

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
      <div className="container-fluid">
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
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/RegisterPage" component={RegisterPage} />
            <PrivateRoute
              exact
              path="/RandomFragmentPage"
              component={RandomFragmentPage}
            />
            <PrivateRoute exact path="/:fragment_id" component={FragmentPage} />
            <PrivateRoute exact path="/ProfilePage" component={ProfilePage} />
            <PrivateRoute
              exact
              path="/CategoriesPage"
              component={Categories_List}
            />
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
