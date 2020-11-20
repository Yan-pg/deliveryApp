import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../hooks/Auth';
import api from '../../service/api';

import {
  Container,
  ContentHeader,
  BuuttonIcon,
  ContentDelicius,
  TextDelucius,
  ContainerInput,
  InputSearch,
  ContainerCategory,
  BottonCategory,
  TextCategory,
  ContainerMain,
  ImageFood,
  NameFood,
  DescriptionFood,
  PriceFood,
} from './styles';

interface Category {
  id: string;
  name: string;
}

interface Products {
  id: string;
  name: string;
  description: string;
  price: string;
  productImage_url: string;
}

const Home: React.FC = () => {
  const {signOut, user} = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Products[]>([]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  useEffect(() => {
    api
      .get('category')
      .then((response) => {
        setCategories(response.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categories]);

  useEffect(() => {
    api
      .get('products')
      .then((response) => {
        setProduct(response.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categories]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Container>
        <ContentHeader>
          <Icon name="menu" size={24} color="#000000" />
          <BuuttonIcon onPress={handleSignOut}>
            <Icon name="shopping-bag" size={24} color="#ADADAF" />
          </BuuttonIcon>
        </ContentHeader>

        <ContentDelicius>
          <TextDelucius>
            {user.name}, delicius {'\n'}food for you
          </TextDelucius>
        </ContentDelicius>
        <ContainerInput>
          <Icon name="search" size={24} color="#000000" />
          <InputSearch placeholder="Search" keyboardAppearance="dark" />
        </ContainerInput>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ContainerCategory>
            {categories.map((category) => (
              <BottonCategory key={category.id}>
                <TextCategory>{category.name}</TextCategory>
              </BottonCategory>
            ))}
          </ContainerCategory>
        </ScrollView>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={product}
          keyExtractor={(products) => products.id}
          renderItem={({item: products}) => (
            <ContainerMain>
              <ImageFood
                source={{
                  uri: products.productImage_url,
                }}
              />
              <NameFood>{products.name}</NameFood>
              <DescriptionFood>{products.description}</DescriptionFood>
              <PriceFood>R$ {products.price},00</PriceFood>
            </ContainerMain>
          )}
        />
      </Container>
    </>
  );
};

export default Home;
