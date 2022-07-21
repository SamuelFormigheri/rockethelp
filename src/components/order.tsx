import { HStack, Text, Box, useTheme, VStack, Circle, Pressable, IPressableProps } from 'native-base';
import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native';
import { IOrder } from '../DTOs/Order';

type Props = IPressableProps & {
    data: IOrder;
}

export function Order({
    data,
    ...props
}: Props) {
    const {colors} = useTheme();

    const isOpened = data.status === "open";

    const color = isOpened ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...props}>
        <HStack
            bg="gray.600"
            mb={4}
            alignItems="center"
            justifyContent={"space-between"}
            rounded="sm"
            overflow="hidden"
        >
            <Box 
                h="full"
                w={2}
                bg={color}
            />

            <VStack flex={1} my={5} ml={5}>
                <Text
                    color="white" fontSize="md"
                >
                    Patrimônio: {data.patrimony}
                </Text>
                <HStack>
                    <ClockAfternoon 
                        size={15}
                        color={colors.gray[300]}
                    />
                    <Text color="gray.200" fontSize="xs" ml={1}>
                        {data.created_at}
                    </Text>
                </HStack>
            </VStack>

            <Circle bg="gray.500" h={12} w={12} mr={5}>
                {isOpened ? 
                    <Hourglass size={24} color={color} /> :
                    <CircleWavyCheck size={24} color={color} /> 
                }
            </Circle>
        </HStack>
    </Pressable>
  );
}