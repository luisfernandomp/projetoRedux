import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Catalog from './pages/Catalog';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown : true,
          cardStyle : { backgroundColor : '#313746'},
        }}
        initialRouteName = "Catalog"
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown : true,
            headerTransparent : true,
            headerTitle : () => <Header />,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
