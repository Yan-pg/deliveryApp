import React, {useCallback, useRef} from 'react';

import logoImg from '../../assets/logoSession.png';
import {Alert, KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import Input from '../../components/Input';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {
  Container,
  Header,
  Logo,
  TextHearder,
  ViewBorder,
  Main,
  Content,
  ButtonArrow,
} from './styles';
import api from '../../service/api';
import getValidationErrors from '../../utils/getValidationErros';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  neighborhood: string;
  street: string;
  houseNumber: number;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>();
  const {navigate, goBack} = useNavigation();

  const navigateToSignIn = useCallback(() => {
    navigate('session');
  }, [navigate]);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('user', data);

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer o login na aplicação ',
        );

        goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente novamente',
        );
      }
    },
    [goBack],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        bahavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView>
          <Container>
            <Header>
              <ButtonArrow onPress={navigateToSignIn}>
                <Icon name="arrow-left" size={24} color="#fa4a0c" />
              </ButtonArrow>
              <Logo source={logoImg} />
              <TextHearder>SignUp</TextHearder>
              <ViewBorder />
            </Header>

            <Main>
              <Content>
                <Form ref={formRef} onSubmit={handleSignUp}>
                  <Input
                    autoCapitalize="words"
                    name="name"
                    icon="user"
                    placeholder="Name"
                  />
                  <Input
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                  />
                  <Input
                    secureTextEntry
                    name="password"
                    icon="lock"
                    placeholder="Password"
                    textContentType="newPassword"
                  />
                  <Input
                    name="neighborhood"
                    icon="navigation"
                    placeholder="Neighborhood"
                  />
                  <Input name="street" icon="navigation" placeholder="street" />
                  <Input
                    keyboardType="numeric"
                    autoCorrect={false}
                    name="houseNumber"
                    icon="navigation"
                    placeholder="Number"
                  />

                  <Button
                    onPress={() => {
                      formRef.current?.submitForm();
                    }}>
                    Entrar
                  </Button>
                </Form>
              </Content>
            </Main>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignUp;
