import {FlatList, RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {ProductsByCategory} from './index';

export const Container = styled.View`
  background: #f2f2f2;
`;
export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: 20px auto;
`;

export const BuuttonIcon = styled(RectButton)``;

export const ContentDelicius = styled.View`
  width: 85%;
  margin: 20px auto;
`;

export const TextDelucius = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ContainerInput = styled.View`
  width: 90%;
  height: 60px;
  padding: 0 16px;
  border-radius: 25px;
  background: #efeeee;
  margin: 0 auto;

  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  color: #fa4a0c;
  font-size: 16px;
`;

export const ContainerCategory = styled.View`
  flex-direction: row;
`;

export const BottonCategory = styled.TouchableOpacity`
  padding: 32px 20px;
`;

export const TextCategory = styled.Text`
  font-weight: bold;
`;

export const ContainerMain = styled(RectButton)`
  width: 220px;
  height: 300px;
  background: #ffffff;
  margin-left: 20px;
  margin-top: 100px;
  margin-right: 8px;

  border-radius: 20px;
`;

export const ImageFood = styled.Image`
  align-self: center;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  position: absolute;
  bottom: 200px;
`;

export const NameFood = styled.Text`
  text-align: center;
  margin-top: 120px;
  font-weight: bold;
  font-size: 18px;
`;

export const DescriptionFood = styled.Text`
  color: #adadaf;
  font-size: 15px;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
`;

export const PriceFood = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: #fa4a0c;
  font-weight: bold;
`;

export const ToggleModal = styled.Modal``;

export const ButtonBackHomeModal = styled.TouchableOpacity`
  margin-top: 40px;
  margin-left: 30px;
`;

export const TitleCategory = styled.Text`
  align-self: center;
  font-size: 24px;
  font-weight: bold;
  color: #fa4a0c;
`;

export const CatainerProduct = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Products = styled.View``;

export const ProductCard = styled.TouchableOpacity`
  width: 160px;
  height: 220px;
  background: #e9e8e8;
  margin-left: 20px;
  margin-top: 100px;
  margin-right: 8px;

  border-radius: 20px;
`;

export const ImageProduct = styled.Image`
  align-self: center;
  width: 120px;
  height: 120px;
  border-radius: 80px;
  position: absolute;
  bottom: 150px;
`;

export const NameProduct = styled.Text`
  text-align: center;
  margin-top: 90px;
  font-weight: bold;
  font-size: 18px;
`;

export const DescriptionProduct = styled.Text`
  color: #adadaf;
  font-size: 10px;
  margin-top: 40px;
  width: 80%;
  margin: 0 auto;
`;

export const PriceProduct = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: #fa4a0c;
  font-weight: bold;
`;
