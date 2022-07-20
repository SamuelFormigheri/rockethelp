import { Input as NBInput, IInputProps } from 'native-base';
import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useState } from 'react';

export interface IInputRefProps {
    value: string;
    setValue: (val: string) => void;
}

const InputComponent: ForwardRefRenderFunction<IInputRefProps, IInputProps> = ({
    ...props
}, ref) => {
  const internalRef = ref ?? useRef<IInputRefProps>();
  const [inputState, setInputState] = useState("");

  useImperativeHandle(internalRef, () => ({
    value: inputState,
    setValue: setInputState
  }));
  
  return (
    <NBInput 
        bg="gray.700"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily={"body"}
        color="white"
        placeholderTextColor={"gray.300"}
        _focus={{
            borderWidth: 1,
            borderColor: "green.500",
            bg: "gray.700"
        }}
        onChangeText={setInputState}
        {...props}
    />
  );
}

const Input = forwardRef(InputComponent);

export {
    Input
}