import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/store/configureStore';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import React from 'react';

import RootStack from './src/navigation/rootStack';

const { persistor, store } = configureStore();
const AppContainer = createAppContainer(RootStack);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
