import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
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
    document.title = 'Sign Up';

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((msg,idx) => <li key={idx}>{msg}</li>)
    }

    return (
      <div className="form-container">
        <div className="form-header">
          <div className="gutter-container">
            <h1 className="logo">
              <Link onClick={this.props.clearErrors} to="/">Spoodify</Link>
            </h1>
          </div>
        </div>

        <ul className="errors">{errors}</ul>

        <div className="gutter-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={this.handleChange('email')}
              value={this.state.email} />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <input
              type="text"
              placeholder="What should we call you?"
              onChange={this.handleChange('username')}
              value={this.state.username} />

            <div className="form-buttons-container">
              <button className="rela-inline button">Sign Up</button>
            </div>
          </form>

          <p>Already have an account? <Link onClick={this.props.clearErrors} to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
