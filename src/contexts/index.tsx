import { NativeBaseProvider } from "./nativeBase";

export function BaseProvider({children}){
    return <NativeBaseProvider>
        {children}
    </NativeBaseProvider>
}