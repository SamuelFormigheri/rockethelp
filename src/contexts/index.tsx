import { NativeBaseProvider } from "./nativeBase";
import { AuthProvider } from "./auth";

export function BaseProvider({children}){
    return <NativeBaseProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </NativeBaseProvider>
}