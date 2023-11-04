import { FormControl, Input, IInputProps } from "native-base";

interface TextInputProps extends IInputProps {
    label?: string,
    placeholder: string
}

export function TextInput({ label, placeholder, ...rest }: TextInputProps) {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size='lg'
                width='100%'
                borderRadius='lg'
                bgColor='gray.100'
                shadow={3}
                {...rest}
            />
        </FormControl>
    );
}