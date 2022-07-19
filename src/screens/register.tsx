import { VStack } from 'native-base';
import { TitleScreen } from '../components/titleScreen';
import { Input } from "../components/input";
import { Button } from "../components/button";

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
        <TitleScreen 
            title="Nova solicitação"
        />

        <Input 
            placeholder='Número do patrimônio'
            mt={4}
        />

        <Input 
            placeholder='Descrição do problema'
            flex={1}
            mt={5}
            multiline
            textAlignVertical='top'
        />

        <Button 
            title="Cadastrar"
            mt={5}
        />
    </VStack>
  );
}