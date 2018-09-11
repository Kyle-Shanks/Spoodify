import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_or_email: '',
      password: ''
    };
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render () {
    return (
      <div className="form-container">
        <form className="login-form">
          <input
            type="test"
            placeholder="Email Address or Username"
            onChange={this.handleChange('name_or_email')}
            value={this.state.name_or_email} />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleChange('password')}
            value={this.state.password} />
          <div className="form-buttons-container">
            <input type="submit" className="button" value="Log In"/>
          </div>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null,mapDispatchToProps)(LoginForm);
