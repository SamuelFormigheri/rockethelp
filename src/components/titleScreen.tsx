import { useNavigation } from '@react-navigation/native';
import { IconButton, HStack, useTheme, Heading, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

interface ITitleScreen extends StyledProps{
    title: string;
}

export function TitleScreen({title, ...props}: ITitleScreen) {
    const {colors} = useTheme();
    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }
  return (
    <HStack
        w="full"
        justifyContent="space-between"
        alignItems={"center"}
        bg="gray.600"
        pt={12}
        pb={6}
        {...props}
    >
        <IconButton 
            icon={<CaretLeft 
                size={24}
                color={colors.gray[200]}
            />}
            onPress={goBack}
        />

        <Heading 
            color="gray.100" 
            textAlign={"center"} 
            fontSize="lg" 
            flex={1}
             ml={-6}
        >
            {title}
        </Heading>
    </HStack>
  );
}