import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import BrowseContainer from './browse/browse_container';

const App = (props) => {

  return (
    <div className="page-container">
      <AuthRoute exact path="/" component={ Splash } />
      <AuthRoute path="/login" component={ LoginFormContainer } />
      <AuthRoute path="/signup" component={ SignupFormContainer } />

      <ProtectedRoute path="/browse" component={ BrowseContainer } />
    </div>
  )
}

export default App;
