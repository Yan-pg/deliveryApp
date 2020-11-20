import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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
