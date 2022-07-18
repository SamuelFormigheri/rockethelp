import { NativeBaseProvider as NBProvider } from "native-base";

export function NativeBaseProvider({
    children
}){
    return(
        <NBProvider>
            {children}
        </NBProvider>
    )
}