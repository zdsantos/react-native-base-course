import { VStack, Text, Avatar } from "native-base";
import { Button } from "./Button";

export interface DoctorCardProps {
    name: string;
    image: string;
    especialidade: string;
}

export function DoctorCard({
    name,
    image,
    especialidade,
}: DoctorCardProps) {
    return (
        <VStack
            width='100%'
            backgroundColor='white'
            padding={5}
            borderRadius='lg'
            shadow="2"
            marginBottom={5}
            alignItems='center'
        >
            <VStack flexDirection='row'>
                <Avatar source={{ uri: image}} size='lg'/>
                <VStack marginLeft={4}>
                    <Text fontSize='md' bold>{name}</Text>
                    <Text>{especialidade}</Text>
                </VStack>
            </VStack>

            <Button>Agendar consulta</Button>
        </VStack>
    )
}