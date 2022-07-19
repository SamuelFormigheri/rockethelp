import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/singIn";

export function Routes() {
  return (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
  );
}