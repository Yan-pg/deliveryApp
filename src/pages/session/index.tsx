import React, {useCallback, useRef} from 'react';

import {
  Container,
  Header,
  Logo,
  TextHearder,
  ViewBorder,
  Main,
  Content,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logoImg from '../../assets/logoSession.png';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import Input from '../../components/Input';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';
import {useAuth} from '../../hooks/Auth';

interface SignInFormData {
  email: string;
  password: string;
}

const Session: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {navigate} = useNavigation();

  const {signIn} = useAuth();

  const navigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        Alert.alert('Você está logado');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, confira as credenciais.',
        );
      }
    },
    [signIn],
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
              <Logo source={logoImg} />
              <TextHearder>SignIn</TextHearder>
              <ViewBorder />
            </Header>

            <Main>
              <Content>
                <Form ref={formRef} onSubmit={handleSignIn}>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    icon="mail"
                    keyboardType="email-address"
                    name="email"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}
                  />

                  <Input
                    ref={passwordInputRef}
                    icon="lock"
                    returnKeyType="send"
                    secureTextEntry
                    name="password"
                    placeholder="Password"
                    onSubmitEditing={() => {
                      formRef.current?.submitForm();
                    }}
                  />
                </Form>

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  Entrar
                </Button>
              </Content>
            </Main>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={navigateToSignUp}>
        <Icon name="log-in" size={20} color="#fa4a0c" />
        <CreateAccountButtonText>Create an account</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default Session;
