import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {useAuth} from '../../hooks/Auth';
import api from '../../service/api';

import {
  Container,
  ContentIcon,
  ImageProduct,
  Name,
  Price,
  TitleDescriprition,
  Description,
  DeliveryInfoTitle,
  DelveryInfo,
  QuantityTitle,
  ContentPriceTotal,
  ButtonPlus,
  TextPriceTotal,
  ButtonMinus,
  CreatedOrder,
  TitleCompleted,
  Neighborhood,
  Street,
  HouseNumber,
} from './styles';

interface RouteParams {
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

const Orders: React.FC = () => {
  const route = useRoute();
  const routerParams = route.params as RouteParams;
  const {user} = useAuth();
  const {navigate} = useNavigation();

  const [image] = useState(routerParams.productImage);
  const [name] = useState(routerParams.productName);
  const [description] = useState(routerParams.productDescription);
  const [price, setPrice] = useState(routerParams.productPrice);
  const [priceTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const handleCreateOrder = useCallback(async () => {
    await api.post('orders', {
      name: user.name,
      quantity: quantity,
      priceTotal: price,
      neighborhood: user.neighborhood,
      street: user.street,
      houseNumber: user.houseNumber,
    });

    navigate('CreatedOrder');
  }, [
    user.name,
    quantity,
    price,
    user.neighborhood,
    user.street,
    user.houseNumber,
    navigate,
  ]);

  const handlePlusQuantity = useCallback(() => {
    const more = quantity + 1;

    const totalPrice = Number(price) + Number(priceTotal);

    setPrice(totalPrice);
    setQuantity(more);
  }, [quantity, price, priceTotal]);

  const handleMinusQuantity = useCallback(() => {
    const less = quantity - 1;

    const totalPrice = Number(price) - Number(priceTotal);

    quantity <= 1 ? quantity + 1 : setPrice(totalPrice);
    quantity <= 1 ? quantity + 1 : setQuantity(less);
  }, [quantity, price, priceTotal]);

  return (
    <Container>
      <ContentIcon>
        <Icon name="arrow-left" size={24} color="#000" />
        <Icon name="heart" size={24} color="#000" />
      </ContentIcon>
      <ImageProduct source={{uri: image}} />

      <Name>{name}</Name>

      <Price>R$ {price},00</Price>

      <TitleDescriprition>Description</TitleDescriprition>

      <Description>{description}</Description>
      <DeliveryInfoTitle>Delivery info</DeliveryInfoTitle>

      <DelveryInfo>
        Delivered between mondat aug and thursday 20 from 8pm to 91:32pm
      </DelveryInfo>

      <QuantityTitle>Quantity</QuantityTitle>

      <ContentPriceTotal>
        <ButtonMinus onPress={handleMinusQuantity}>
          <Icon name="minus" size={24} color="#fa4a0c" />
        </ButtonMinus>

        <TextPriceTotal>{quantity}</TextPriceTotal>

        <ButtonPlus onPress={handlePlusQuantity}>
          <Icon name="plus" size={24} color="#fa4a0c" />
        </ButtonPlus>
      </ContentPriceTotal>

      <Button onPress={handleCreateOrder}>Complete order</Button>
    </Container>
  );
};

export default Orders;
