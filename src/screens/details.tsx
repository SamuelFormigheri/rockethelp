import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import { TitleScreen } from '../components/titleScreen';

type RouteParams = {
    orderId: string;
}

export function Details() {
    const route = useRoute();
    const {
        orderId
    } = route.params as RouteParams;

  return (
    <VStack flex={1} bg="gray.700">
        <TitleScreen 
            title="Solicitação"
        />
    </VStack>
  );
}