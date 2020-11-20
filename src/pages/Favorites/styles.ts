import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fa4a0c;
`;

export const ImageLogo = styled.Image`
  margin-top: 40px;
  margin-left: 40px;
`;

export const ImageText = styled.Image`
  margin-top: 40px;
  margin-left: 40px;
`;

export const AvatarImage = styled.Image`
  margin-top: 40px;
`;

export const Button = styled(RectButton)`
  width: 90%;
  height: 60px;
  background: #ffffff;
  position: absolute;
  bottom: 60px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  color: #fa4a0c;
  font-weight: bold;
  font-size: 18px;
`;
