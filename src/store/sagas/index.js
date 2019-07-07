import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';

import { signIn, signOut } from './auth';

import { getOrders } from './orders';
import { OrdersTypes } from '../ducks/orders';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(OrdersTypes.GET_ORDERS_REQUEST, getOrders),
  ]);
}
