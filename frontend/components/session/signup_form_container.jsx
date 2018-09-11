import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
    this.props.signup(this.state);
  }

  render () {
    return (
      <div className="form-container">
        <div className="form-header">
          <div className="gutter-container">
            <h1>Spoodify</h1>
          </div>
        </div>
        <div className="gutter-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleChange('username')}
              value={this.state.username} />
            <input
              type="text"
              placeholder="Email"
              onChange={this.handleChange('email')}
              value={this.state.email} />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />

            <div className="form-buttons-container">
              <button className="rela-inline button">Sign Up</button>
            </div>
          </form>

          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(null,mapDispatchToProps)(SignupForm);
