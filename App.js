/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import EntryPoint from './src/EntryPoint';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/store/configureStore';
const { persistor, store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="large" color="#00ff00" />}
        persistor={persistor}>
        <EntryPoint></EntryPoint>
      </PersistGate>
    </Provider>
  );
};

export default App;
