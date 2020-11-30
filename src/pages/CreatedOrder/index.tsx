import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {useAuth} from '../../hooks/Auth';

import {
  Cotainer,
  TitleCompleted,
  Neighborhood,
  Street,
  HouseNumber,
} from './styled';

const CreatedOrder: React.FC = () => {
  const {user} = useAuth();
  const {navigate} = useNavigation();

  return (
    <Cotainer>
      <Icon name="check" size={170} color="#fa4a0c" />
      <TitleCompleted>Completed order</TitleCompleted>
      <Neighborhood>{user.neighborhood}</Neighborhood>
      <Street>{user.street}</Street>
      <HouseNumber>{user.houseNumber}</HouseNumber>

      <Button onPress={() => navigate('Home')}>Ok!</Button>
    </Cotainer>
  );
};

export default CreatedOrder;
