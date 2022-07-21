import { useNavigation, useRoute } from '@react-navigation/native';
import { HStack, useTheme, VStack, Text, ScrollView } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { TitleScreen } from '../components/titleScreen';
import { IOrder } from '../DTOs/Order';
import firestore from "@react-native-firebase/firestore";
import { firestoreDateFormat } from '../utils/firestoreDateFormat';
import { Loading } from "../components/loading";
import { CircleWavyCheck, Clipboard, DesktopTower, Hourglass } from 'phosphor-react-native';
import { CardDetails } from "../components/cardDetails";
import { IInputRefProps, Input } from '../components/input';
import {Button} from "../components/button";
import { Alert } from 'react-native';
import { errorMessages } from '../utils/errorMessages';

type RouteParams = {
    orderId: string;
}

export function Details() {
    const route = useRoute();
    const {
        orderId
    } = route.params as RouteParams;
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [order, setOrder] = useState<IOrder>({} as IOrder);
    const [isLoading, setIsLoading] = useState(true);

    const refSolutionDescription = useRef<IInputRefProps>();

    function handleOrderClose() {
        if (!refSolutionDescription.current.value) {
          return Alert.alert('Solicitação', 'Informe a solução para encerrar a solicitação');
        }
    
        firestore()
          .collection('orders')
          .doc(orderId)
          .update({
            status: 'closed',
            solution: refSolutionDescription.current.value,
            closed_at: firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            Alert.alert('Solicitação', 'Solicitação encerrada.');
            navigation.goBack();
          })
          .catch((err) => {
            errorMessages(err, 'Não foi possível encerrar a solicitação');
          });
      }

    useEffect(() => {
        firestore()
            .collection("orders")
            .doc(orderId)
            .get()
            .then((doc) => {
                const {
                    created_at,
                    description,
                    patrimony,
                    status,
                    closed_at,
                    solution
                } = doc.data();

                setOrder({
                    created_at: firestoreDateFormat(created_at),
                    description,
                    patrimony,
                    status,
                    closed_at: firestoreDateFormat(closed_at),
                    solution,
                    id: doc.id
                });

                setIsLoading(false);
            })
    }, []);

    if(isLoading)
        return <Loading />

  return (
    <VStack flex={1} bg="gray.700">
        <TitleScreen 
            title="Solicitação"
        />

        <HStack bg="gray.500" justifyContent="center" p={4}>
            {order.status === "closed" ? <CircleWavyCheck size={22} color={colors.green[300]}/> : <Hourglass size={22} color={colors.green[300]}/>}

            <Text
                fontSize="sm"
                color={order.status === "closed" ? colors.green[300] : colors.secondary[700]}
                ml={2}
                textTransform="uppercase"
            >
                {order.status === "closed" ? "finalizado" : "em andamento"}

            </Text>
        </HStack>

        <ScrollView mx={5}>
            <CardDetails 
                title="equipamento"
                description={`Patrimônio: ${order.patrimony}`}
                icon={DesktopTower}
                footer={order.created_at}
            />
            <CardDetails 
                title="descrição do problema"
                description={order.description}
                icon={Clipboard}
            />
            <CardDetails 
                title="solução"
                icon={CircleWavyCheck}
                footer={order.closed_at && `Encerrado em ${order.closed_at}`}
            >
                <Input 
                    ref={refSolutionDescription}
                    value={order.solution}
                    placeholder='Descrição da solução'
                    h={24}
                    textAlignVertical="top"
                    multiline
                    isDisabled={order.solution !== undefined}
                />
            </CardDetails>
        </ScrollView>
        { order.status === 'open' && (
            <Button
                title="Encerrar solicitação"
                m={5}
                onPress={handleOrderClose}
            />
        )}
    </VStack>
  );
}