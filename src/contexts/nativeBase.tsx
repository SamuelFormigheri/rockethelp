import { NativeBaseProvider as NBProvider } from "native-base";
import { THEME } from "../styles/theme";

export function NativeBaseProvider({
    children
}){
    return(
        <NBProvider theme={THEME}>
            {children}
        </NBProvider>
    )
}