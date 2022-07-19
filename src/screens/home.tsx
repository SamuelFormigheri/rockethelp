import { useState } from "react";
import { VStack, Text, HStack, Heading, FlatList, Center, useTheme } from 'native-base';
import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { IOrderProps, Order } from "../components/order";
import { Button } from "../components/button";
import { ChatTeardropText } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const {colors} = useTheme();
    const navigation = useNavigation();
    const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<IOrderProps[]>([{
        id: "123",
        patrimony: "123456",
        when: "18/07/2022 as 00:00",
        status: "open"
    }]);

    function navigateToRegister(){
        navigation.navigate("register");
    }

    function navigateToDetails(orderId: string){
        navigation.navigate("details", {
            orderId
        });
    }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
        <Header />

        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems={"center"}>
               <Heading color="gray.100">
                   Solicitações
               </Heading>
               
                <Text color="gray.200">
                    {orders.length}
                </Text>
            </HStack>

            <HStack space={3} mb={8}>
                <Filter 
                    type="open"
                    title="em andamento"
                    onPress={() => setStatusSelected("open")}
                    isActive={statusSelected === "open"}
                />

                <Filter 
                    type="closed"
                    title="finalizados"
                    onPress={() => setStatusSelected("closed")}
                    isActive={statusSelected === "closed"}
                />
            </HStack>

            <FlatList 
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Order 
                    data={item} 
                    onPress={() => navigateToDetails(item.id)}
                />}
                contentContainerStyle={{
                    paddingBottom: 16
                }}
                ListEmptyComponent={() => (
                    <Center>
                        <ChatTeardropText 
                            color={colors.gray[300]} 
                            size={40}
                        />
                        <Text 
                            color="gray.300"
                            fontSize="xl"
                            mt={6}
                            textAlign="center"
                        >
                            Você ainda não possui {'\n'}
                            solicitações {statusSelected === "open" ? "em andamento" : "finalizadas"}
                        </Text>
                    </Center>
                )}
            />

            <Button 
                title="Nova solicitação"
                onPress={navigateToRegister}
            />
        </VStack>
    </VStack>
  );
}