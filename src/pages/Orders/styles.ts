import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

export const ImageProduct = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
  border-radius: 160px;
`;

export const Name = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: #000000;

  margin-top: 40px;
  align-self: center;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fa4a0c;
  margin-top: 20px;
  align-self: center;
`;

export const TitleDescriprition = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 24px;
  margin-top: 20px;
  color: #000000;
`;

export const Description = styled.Text`
  margin-left: 24px;
  color: #adadaf;
  width: 70%;
`;

export const DeliveryInfoTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 24px;
  margin-top: 20px;
  color: #000000;
`;

export const DelveryInfo = styled.Text`
  margin-left: 24px;
  color: #adadaf;
  width: 70%;
`;

export const ContentPriceTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 24px;
`;

export const QuantityTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 24px;
  margin-top: 20px;
  color: #fa4a0c;
`;

export const TextPriceTotal = styled.Text`
  font-size: 24px;
  justify-content: center;
  margin-top: 7px;
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  margin-left: 20px;
`;

export const ButtonMinus = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
`;
