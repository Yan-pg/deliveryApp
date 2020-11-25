import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StatusBar} from 'react-native';
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
  ToggleModal,
  ButtonBackHomeModal,
  CatainerProduct,
  TitleCategory,
  Products,
  ProductCard,
  ImageProduct,
  NameProduct,
  DescriptionProduct,
  PriceProduct,
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

export interface ProductsByCategory {
  id: string;
  name: string;
  description: string;
  price: string;
  productImage_url: string;
}

const Home: React.FC = () => {
  const {user} = useAuth();
  const {navigate} = useNavigation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Products[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<
    ProductsByCategory[]
  >([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowProductsByCategory = useCallback(
    async (categoryId: string) => {
      const response = await api.get(`/products/list/${categoryId}`);

      setProductsByCategory(response.data.products);
      setShowModal(true);
    },
    [],
  );

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const goToOrder = useCallback(
    (
      productImage: string,
      productName: string,
      productDescription: string,
      productPrice: string,
    ) => {
      navigate('Orders', {
        productImage,
        productName,
        productDescription,
        productPrice,
      });
      setShowModal(false);
    },
    [navigate],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Container>
        <ContentHeader>
          <Icon name="menu" size={24} color="#000000" />
          <BuuttonIcon>
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
              <BottonCategory
                onPress={() => handleShowProductsByCategory(category.id)}
                key={category.id}>
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
            <ContainerMain onPress={() => goToOrder()}>
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

      {showModal && (
        <ToggleModal animationType="slide">
          <ButtonBackHomeModal onPress={closeModal}>
            <Icon name="arrow-left" size={35} color="#000" />
          </ButtonBackHomeModal>
          <TitleCategory>Let's eat</TitleCategory>
          <CatainerProduct>
            {productsByCategory.map((productByCategory) => (
              <Products key={productByCategory.id}>
                <ProductCard
                  onPress={() =>
                    goToOrder(
                      productByCategory.productImage_url,
                      productByCategory.name,
                      productByCategory.description,
                      productByCategory.price,
                    )
                  }>
                  <ImageProduct
                    source={{
                      uri: productByCategory.productImage_url,
                    }}
                  />
                  <NameProduct>{productByCategory.name}</NameProduct>
                  <DescriptionProduct>
                    {productByCategory.description}
                  </DescriptionProduct>
                  <PriceProduct>R$ {productByCategory.price},00</PriceProduct>
                </ProductCard>
              </Products>
            ))}
          </CatainerProduct>
        </ToggleModal>
      )}
    </>
  );
};

export default Home;
