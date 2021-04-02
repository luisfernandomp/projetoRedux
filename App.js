import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import 'react-native-gesture-handler';



const App = () => (
  <>
    <StatusBar barStyle='Light-content' backgroundColor="#312e38" />
    <Routes />
  </>
);

export default App;
