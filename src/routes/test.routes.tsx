import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../pages/seila';

const App = createStackNavigator();

const Test: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default Test;
