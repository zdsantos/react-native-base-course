import React, { useState } from 'react';
import { VStack, Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
import { sections } from './utils/RegisterTextInputs';

export default function Register() {

    const [actualSection, setActualSection] = useState(0);

    function nextSection() {
        if (actualSection < sections.length - 1) {
            setActualSection(actualSection + 1);
        }
    }

    function backSection() {
        setActualSection(actualSection - 1);
    }

    return (
        <ScrollView flex={1} padding={5}>
            <Image source={Logo} alt="Logo Voll" alignSelf='center' />
            <Title>{sections[actualSection].title}</Title>
            
            {sections[actualSection].textInputs &&
                <Box>
                    {sections[actualSection].textInputs.map((textInput) => {
                        return <TextInput key={textInput.id} label={textInput.label} placeholder={textInput.placeholder} />
                    })}
                </Box>
            }

            {sections[actualSection].checkbox &&
                <Box>
                    <Text
                        color='blue.800'
                        fontWeight='bold'
                        fontSize='md'
                        marginTop={2}
                        marginBottom={2}
                    >
                        Selecione o plano:
                    </Text>

                    {sections[actualSection].checkbox.map((checkbox) => {
                        return <Checkbox key={checkbox.id} value={checkbox.value} marginBottom={2} >{checkbox.value}</Checkbox>
                    })}
                </Box>
            }

            {actualSection != 0 && <Button onPress={() => { backSection() }} backgroundColor='gray.400' marginTop={10}>Voltar</Button>}

            {actualSection != sections.length - 1
                ? <Button onPress={() => { nextSection() }}>Avançar</Button>
                : <Button onPress={() => { nextSection() }}>Finalizar</Button>}
        </ScrollView>
    );
}
