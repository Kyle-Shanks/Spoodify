import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash/splash';
import WebPlayerContainer from './web_player/web_player_container';

const App = (props) => {
  return (
    <div className="page-container">
      <Switch>
        <AuthRoute exact path="/" component={ Splash } />
        <AuthRoute path="/login" component={ LoginFormContainer } />
        <AuthRoute path="/signup" component={ SignupFormContainer } />

        <ProtectedRoute path="/:section" component={WebPlayerContainer}/>
      </Switch>
    </div>
  )
}

export default App;
