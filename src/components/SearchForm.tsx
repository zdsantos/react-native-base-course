import { VStack } from "native-base";
import { TextInput } from "./TextInput";
import { Button } from "./Button";

const inputs = [
    {
        id: 1,
        placeholder: 'Digite a especialidade'
    },
    {
        id: 2,
        placeholder: 'Digite sua localização'
    }
]
export function SearchForm() {
    return (
        <VStack
            width='100%'
            backgroundColor='white'
            padding={5}
            borderRadius='lg'
            shadow="2"
        >
            {inputs.map((input) => (
                <TextInput key={input.id} placeholder={input.placeholder} />
            ))}
            <Button>Buscar</Button>
        </VStack>
    )
}