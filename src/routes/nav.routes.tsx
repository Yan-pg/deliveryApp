import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabRoutes from './Tab.routes';
import Orders from '../pages/Orders';
import Home from '../pages/Home';
import CreatedOrder from '../pages/CreatedOrder';

const App = createStackNavigator();

const Nav: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />

      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Orders"
        component={Orders}
      />

      <App.Screen
        options={{
          headerShown: false,
        }}
        name="CreatedOrder"
        component={CreatedOrder}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default Nav;
