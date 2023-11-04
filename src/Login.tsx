import React from 'react';
import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent='center' padding={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <TextInput label='Email' placeholder='Email' />

        <TextInput label='Senha' placeholder='' secureTextEntry={true} />
      </Box>

      <Button onPress={() => { navigation.navigate('Tabs') }}>Entrar</Button>

      <Link
        href='http://google.com'
        marginTop={2}
      >Esqueceu a senha?</Link>

      <Box
        width='100%'
        flexDirection='row'
        justifyContent='center'
        marginTop={8}
      >
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }}>
          <Text color='blue.500' >Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
