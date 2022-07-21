import { Alert } from "react-native";

export function errorMessages(err, msg){
    if(err.code === "auth/invalid-email")
        return Alert.alert("Erro", "E-mail inválido");

    if(err.code === "auth/wrong-password")
        return Alert.alert("Erro", "E-mail ou senha inválidos");

    if(err.code === "auth/user-not-found")
        return Alert.alert("Erro", "E-mail ou senha inválidos");
    

    return Alert.alert("Erro", msg);
}