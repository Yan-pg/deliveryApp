import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import Test from './test.routes';
import AppRoutes from './app.routes';

import {useAuth} from '../hooks/Auth';
import Nav from './nav.routes';

const Routes: React.FC = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <Nav /> : <AppRoutes />;
};

export default Routes;
