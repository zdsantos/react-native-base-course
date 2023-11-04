import { Divider, ScrollView } from "native-base";
import { AppointmentCard, AppointmentCardProps } from "../components/AppointmentCard";
import { Title } from "../components/Title";
import { Button } from "../components/Button";


export default function Appointments() {

    const appointments: AppointmentCardProps = {
        name: 'Dotozim',
        especialidade: 'Cardio',
        image: 'https://github.com/zdsantos.png',
        date: 'dd/MM/yyyyy',
        isScheduled: true
    }

    return (
        <ScrollView padding={5}>
            <Title color="blue.500">Minhas Consultas</Title>
            <Button marginTop={5} marginBottom={5}>Agendar nova consulta</Button>

            <Title color="blue.500" fontSize='lg' alignSelf='flex-start' marginBottom={2}>Próximas consultas</Title>
            <AppointmentCard {...appointments}/>

            <Divider marginTop={5}/>

            <Title color="blue.500" fontSize='lg' alignSelf='flex-start' marginBottom={2}>Consultas passadas</Title>
            <AppointmentCard {...appointments} done isScheduled={false}/>
            <AppointmentCard {...appointments} done isScheduled={false}/>
            <AppointmentCard {...appointments} done isScheduled={false}/>
        </ScrollView>
    )
}