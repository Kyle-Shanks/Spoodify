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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <div className="form-header">
          <div className="gutter-container">
            <h1 className="logo">
              <Link to="/">Spoodify</Link>
            </h1>
          </div>
        </div>
        <div className="gutter-container">
          <form className="rela-block login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="rela-block"
              placeholder="Email address or username"
              onChange={this.handleChange('name_or_email')}
              value={this.state.name_or_email} />
            <input
              type="password"
              className="rela-block"
              placeholder="Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <div className="rela-block form-buttons-container">
              <button className="rela-inline button">Log In</button>
            </div>
          </form>

          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null,mapDispatchToProps)(LoginForm);
