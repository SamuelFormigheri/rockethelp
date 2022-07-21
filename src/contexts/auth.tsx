import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import { errorMessages } from "../utils/errorMessages";

interface IContext{
    user?: FirebaseAuthTypes.User;
    isLoading: boolean;
    authenticate(email: string, password: string): void;
    logOut(): void;
}

const AuthContext = createContext<IContext>({} as IContext);


export function AuthProvider({
    children
}){
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<FirebaseAuthTypes.User | undefined>(undefined);

    function authenticate(email: string, password: string){
        if(!email || !password){
            return Alert.alert(
                "Entrar", 
                "Informe email e senha"
            );
        }
        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => errorMessages(err, "Não foi possível acessar"));
            
        setIsLoading(false);
    }

    function logOut(){
        auth()
            .signOut()
            .catch((err) => errorMessages(err, "Não foi possível sair"));
    }

    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response);
            });

        return () => {
            subscriber();
        };
    }, []);
    
    return(
        <AuthContext.Provider value={{
            authenticate,
            logOut,
            isLoading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    if (!context){
        throw new Error('useAuth must be used within the Auth Provider');
    }

    return context;
}