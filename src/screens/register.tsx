import { VStack } from 'native-base';
import { TitleScreen } from '../components/titleScreen';
import { IInputRefProps, Input } from "../components/input";
import { Button } from "../components/button";
import { useRef, useState } from 'react';
import { Alert } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { errorMessages } from '../utils/errorMessages';

export function Register() {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const refPatrimony = useRef<IInputRefProps>();
    const refDescription = useRef<IInputRefProps>();
    
    function handleNewOrderRegister(){
        if(!refPatrimony.current.value || !refDescription.current.value)
            return Alert.alert("Registrar", "Preencha todos os campos");

            setIsLoading(true);

            firestore()
                .collection("orders")
                .add({
                    patrimony: refPatrimony.current.value,
                    description: refDescription.current.value,
                    status: "open",
                    created_at: firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    Alert.alert("Solicitação", "Registrada com sucesso");
                    navigation.goBack();
                })
                .catch((err) => {
                    setIsLoading(false)
                    errorMessages(err, "Não foi possivel registrar a solicitação");
                })

    }

  return (
    <VStack flex={1} p={6} bg="gray.600">
        <TitleScreen 
            title="Nova solicitação"
        />

        <Input 
            ref={refPatrimony}
            placeholder='Número do patrimônio'
            mt={4}
        />

        <Input 
            ref={refDescription}
            placeholder='Descrição do problema'
            flex={1}
            mt={5}
            multiline
            textAlignVertical='top'
        />

        <Button 
            title="Cadastrar"
            mt={5}
            isLoading={isLoading}
            onPress={handleNewOrderRegister}
        />
    </VStack>
  );
}