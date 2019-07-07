import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';
import store from '../../store';

import {
  Container, Brand, Databox, Avatar, Datatext, Divider, Logout,
} from './styles';

import Logo from '../../assets/images/logo.svg';
import Bag from '../../assets/images/bag-icon.png';

class Header extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  state = {
    userName: store.getState().auth.userName,
  };

  render() {
    const { signOut } = this.props;
    const { userName } = this.state;

    return (
      <Container>
        <Brand>
          <img src={Logo} alt="Logo" />
          <name>Pizzaria Don Juan</name>
        </Brand>

        <Databox>
          <Datatext>
            <user>{userName}</user>
            <Logout onClick={signOut}>Sair do app</Logout>
          </Datatext>
          <Divider />
          <Avatar>
            <img src={Bag} alt="Avatar" />
          </Avatar>
        </Databox>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
