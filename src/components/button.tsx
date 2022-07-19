import { Button as NBButton, Heading, IButtonProps } from 'native-base';

type IButton = IButtonProps & {
    title: string;
}

export function Button({
    title,
    ...props
}: IButton) {
  return (
    <NBButton 
        bg="green.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{
            bg: "green.500"
        }}
        {...props}
    >
        <Heading>
            {title}
        </Heading>
    </NBButton>
  );
}