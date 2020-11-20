import React, {useCallback} from 'react';

import logoImg from '../../assets/logo.png';
import text from '../../assets/text.png';
import avatar from '../../assets/avatar.png';

import {
  Container,
  ImageLogo,
  ImageText,
  AvatarImage,
  Button,
  ButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const Landding: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToSession = useCallback(() => {
    navigate('session');
  }, [navigate]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fa4a0c" />
      <Container>
        <ImageLogo source={logoImg} />
        <ImageText source={text} />
        <AvatarImage source={avatar} />
        <Button onPress={navigateToSession}>
          <ButtonText>Get started</ButtonText>
        </Button>
      </Container>
    </>
  );
};
export default Landding;
