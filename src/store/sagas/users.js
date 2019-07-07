import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';

export function* getUsers() {
  try {
    const response = yield call(api.post, '/sessions');

    yield put(UsersActions.getUsersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
