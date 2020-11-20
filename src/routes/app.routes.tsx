import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Landding from '../pages/Landding';
import Session from '../pages/session';
import SignUp from '../pages/SignUp';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="landding"
        component={Landding}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="session"
        component={Session}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
