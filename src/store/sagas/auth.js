import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });

    localStorage.setItem('@DonJuan:token', response.data.token);
    localStorage.setItem('@DonJuan:userName', response.data.userName);

    yield put(AuthActions.signInSuccess(response.data.token, response.data.userName));
    yield put(push('/orders'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha de login',
        message: error.response.data.error,
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@DonJuan:token');
  localStorage.removeItem('@DonJuan:userName');
  yield put(push('/'));
}
