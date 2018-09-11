import React from 'react';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';

const App = (props) => {
  return (
    <div className="page-container">
      <h1>Spoodify</h1>
      <p>testing out the font</p>

      <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
  )
}

export default App;
