import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
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
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      name_or_email: 'Guest User',
      password: 'guestuser'
    },() => { this.props.login(this.state); });
  }

  render () {
    document.title = 'Log In';
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
              <button className="rela-inline button blue" onClick={this.handleDemo}>Demo User</button>
            </div>
          </form>

          <p>Don't have an account? <Link onClick={this.props.clearErrors} to="/signup">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
