import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import './config/reactotron';

import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ReduxToastr />
    <Routes />
  </Provider>
);

export default App;
