import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Home from '../pages/Home';
// import seila from '../pages/seila';
import {NavigationContainer} from '@react-navigation/native';
import Favorites from '../pages/Favorites';
import User from '../pages/user';
import Recets from '../pages/Recents';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#C72828',
        labelStyle: {
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
          fontWeight: '600',
        },
        inactiveTintColor: '#B7B7CC',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon size={25} name="home" color={color} />,
          title: 'Home',
        }}
        name="none"
        component={Home}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={25} name="heart" color={color} />
          ),
          title: 'Favorites',
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarIcon: ({color}) => <Icon size={25} name="user" color={color} />,
          title: 'User',
        }}
        component={User}
      />
      <Tab.Screen
        name="Recents"
        options={{
          tabBarIcon: ({color}) => (
            <Icon size={25} name="clock" color={color} />
          ),
          title: 'Recents',
        }}
        component={Recets}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabRoutes;
