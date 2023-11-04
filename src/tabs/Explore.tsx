import { ScrollView } from "native-base";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { DoctorCard, DoctorCardProps } from "../components/DoctorCard";

export default function Explore() {

    const doctor: DoctorCardProps = {
        name: 'Dotozim',
        especialidade: 'Cardio',
        image: 'https://github.com/zdsantos.png'
    }

    return (
        <ScrollView padding={5}>
            <SearchForm />
            
            <Title color='blue.500' marginBottom={5}>Resultado da busca</Title>

            <DoctorCard {...doctor}/>
            <DoctorCard {...doctor}/>
            <DoctorCard {...doctor}/>
        </ScrollView>
    )
}