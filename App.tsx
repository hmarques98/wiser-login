import * as React from 'react';
import {Provider} from 'react-redux';
import Home from './src';
import store from './src/store';

interface AppProps {}

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
