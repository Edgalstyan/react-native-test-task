/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import HomeScreen from "./src/components/HomeScreen";

import { Provider } from 'mobx-react';
import RootStore from './src/stores/RootStore';

const App: () => React$Node = () => {
  return (
    <Provider rootStore={RootStore}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
