import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '../../store/ducks/orders';

import Header from '../../components/Header';
import {
  Body, Collumn, Box, Title, Order, Divider, Notes, Items, Item,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    getOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        totalPrice: PropTypes.number,
        note: PropTypes.string,
        lastChange: PropTypes.date,
        User: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { getOrdersRequest } = this.props;

    getOrdersRequest();
  }

  render() {
    const { orders } = this.props;

    return (
      <Fragment>
        <Header />
        <Body>
          <Collumn>
            <Title>Últimos Pedidos</Title>

            {orders.data.map(order => (
              <Box key={order.id}>
                <Order>
                  <client>
                    Pedido <id>#{order.id}</id> - {order.User.name}
                  </client>
                  <hour>{order.lastChange}</hour>
                  <price>R${order.totalPrice}</price>
                </Order>
                <Divider />
                <Items>
                  {order.Items.map(item => (
                    <Item key={item.id}>
                      <img
                        src={`http://localhost:5000/files/${item.Type.avatar}`}
                        alt={item.Type.type}
                      />
                      <text>
                        <product>
                          {item.Type.Product.product} {item.Type.type}
                        </product>
                        <size>Tamanho: {item.Size.size}</size>
                      </text>
                    </Item>
                  ))}
                </Items>
                <Divider />
                <Notes>
                  <rge>Observações: </rge>
                  <obs>{order.note}</obs>
                </Notes>
              </Box>
            ))}
          </Collumn>
        </Body>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
