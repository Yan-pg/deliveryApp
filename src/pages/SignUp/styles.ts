import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const ButtonArrow = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: 40px;
`;

export const Logo = styled.Image``;

export const TextHearder = styled.Text`
  margin-top: 70px;
  font-size: 20px;
  font-weight: bold;
  color: #fa4a0c;
`;

export const ViewBorder = styled.View`
  width: 50px;
  height: 3px;
  background: #fa4a0c;
`;

export const Main = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: 20px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top-width: 1px;
  border-color: #fa4a0c;
  padding: 16px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #fa4a0c;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
