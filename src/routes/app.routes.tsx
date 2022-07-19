import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from "../screens/home";
import {Details} from "../screens/details";
import {Register} from "../screens/register";

const {
    Navigator,
    Screen
} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Screen name="home" component={Home} />
        <Screen name="register" component={Register}/>
        <Screen name="details" component={Details}/>
    </Navigator>
  );
}