import { IconButton, HStack, useTheme } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import Logo from "../assets/logo_primary.svg";
import { useAuth } from '../contexts/auth';

export function Header() {
    const {colors} = useTheme();
    const {logOut} = useAuth();

  return (
    <HStack
        w="full"
        justifyContent="space-between"
        alignItems={"center"}
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
    >
        <Logo />

        <IconButton 
            icon={<SignOut 
                size={26}
                color={colors.gray[300]}
            />}
            onPress={logOut}
        />
    </HStack>
  );
}