import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  CSSObject,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  variantAlternative?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  sizeAlternative?: 'sm' | 'md' | 'lg' | 'xs';
  labelStyle?: CSSObject;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error = null,
    variantAlternative,
    sizeAlternative,
    labelStyle,
    ...rest
  },
  ref,
): JSX.Element => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {!!label && (
        <FormLabel sx={labelStyle ? labelStyle : {}} htmlFor={name}>
          {label}
        </FormLabel>
      )}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant={variantAlternative ? variantAlternative : 'filled'}
        _hover={{
          bgColor: 'gray.900',
        }}
        size={sizeAlternative ? sizeAlternative : 'lg'}
        ref={ref}
        {...rest}
      />

      {Boolean(error) && <FormErrorMessage>{error?.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
