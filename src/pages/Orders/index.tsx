import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

interface RouteParams {
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: string;
}

const Orders: React.FC = () => {
  const route = useRoute();

  const routerParams = route.params as RouteParams;

  const [test, setTest] = useState(routerParams.productName);

  console.log(test);

  return (
    <View>
      <Text>Olá</Text>
    </View>
  );
};

export default Orders;
