import { useRef } from "react";
import { Heading, VStack, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/button";
import { IInputRefProps, Input } from "../components/input";

export function SignIn(){
    const refEmail = useRef<IInputRefProps>();
    const refPassword = useRef<IInputRefProps>();

    const {colors} = useTheme();

    function handleSignIn(){
        console.log(
            refEmail.current.value,
            refPassword.current.value
        );
    }

    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input 
                ref={refEmail}
                placeholder="E-mail" 
                mb={4}
                InputLeftElement={<Icon 
                    as={<Envelope color={colors.gray[300]}/>}
                    ml={4}
                />}
            />

            <Input 
                ref={refPassword}
                placeholder="Senha"
                secureTextEntry
                InputLeftElement={<Icon 
                    as={<Key color={colors.gray[300]}/>}
                    ml={4}
                />}
            />

            <Button 
                mt={8}
                title="Entrar"
                w="full"
                onPress={handleSignIn}
            />
        </VStack>
    )
}
