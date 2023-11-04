import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Title } from "../components/Title";

export default function Profile() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' padding={5}>
                <Title color='blue.500'>Meu perfil</Title>
                <Avatar source={{ uri: 'https://github.com/zdsantos.png'}} size='xl'/>
                
                <Title color='blue.500'>Informações pessoais</Title>
                <Title fontSize='lg' marginBottom={1}>Zedequias Santos</Title>
                <Text>dd/MM/yyyy</Text>
                <Text>Fortaleza</Text>

                <Divider marginTop={5}/>

                <Title color='blue.500' marginBottom={1}>Histórico médico</Title>
                <Text>Rinite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}