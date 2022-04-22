import {
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Input as ChakraInput,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
// Nesse trecho foi feito um encaminhamento de referência para o input dentro
// do corpo do componente criado.

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest }: InputProps,
  ref
) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
