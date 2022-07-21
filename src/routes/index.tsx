import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens/singIn";
import { useAuth } from "../contexts/auth";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />} 
    </NavigationContainer>
  );
}