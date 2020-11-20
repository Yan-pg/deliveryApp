import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 60px;
  background: #fa4a0c;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 30px;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;
