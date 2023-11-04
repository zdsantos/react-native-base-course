import { VStack, Text, Avatar } from "native-base";
import { Button } from "./Button";

export interface AppointmentCardProps {
    name: string;
    image: string;
    especialidade: string;
    date?: string;
    done?: boolean;
    isScheduled?: boolean;
}

export function AppointmentCard({
    name,
    image,
    especialidade,
    date,
    done,
    isScheduled
}: AppointmentCardProps) {
    return (
        <VStack
            width='100%'
            backgroundColor={done ? 'blue.100' : 'white'}
            padding={5}
            borderRadius='lg'
            shadow="2"
            marginBottom={5}
        >
            <VStack flexDirection='row'>
                <Avatar source={{ uri: image}} size='lg'/>
                <VStack marginLeft={4}>
                    <Text fontSize='md' bold>{name}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{date}</Text>
                </VStack>
            </VStack>

            <Button>{isScheduled ? 'Cancelar' : 'Agendar consulta'}</Button>
        </VStack>
    )
}