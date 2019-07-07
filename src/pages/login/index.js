import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import { Background, Content, Form } from './styles';
import Logo from '../../assets/images/logo.svg';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Background>
        <Content>
          <img src={Logo} alt="Logo" />
          <Form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Seu e-mail"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Senha secreta"
            />
            <button type="submit">Entrar</button>
          </Form>
        </Content>
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
