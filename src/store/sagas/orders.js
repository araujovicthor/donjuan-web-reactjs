import { call, put } from 'redux-saga/effects';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import api from '../../services/api';

import OrdersActions from '../ducks/orders';

export function* getOrders() {
  try {
    const { data: orders } = yield call(api.get, '/orders');

    orders.map(
      order => (order.lastChange = moment(order.updatedAt)
        .locale('pt-br')
        .fromNow()),
    );

    yield put(OrdersActions.getOrdersSuccess(orders));
  } catch (error) {
    console.log(error);
  }
}
