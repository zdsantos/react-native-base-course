import { Button as NativeButton, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <NativeButton
            width='100%'
            bgColor='blue.800'
            marginTop={5}
            borderRadius='lg'
            {...rest}
        >
            {children}
        </NativeButton>
    );
}