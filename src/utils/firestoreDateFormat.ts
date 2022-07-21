import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export function firestoreDateFormat(timestamp: FirebaseFirestoreTypes.Timestamp){
    if(!timestamp)
        return undefined;
    
    const date = new Date(timestamp.toDate());

    const day = date.toLocaleDateString('pt-BR');
    const hour = date.toLocaleDateString('pt-BR');

    return `${day} às ${hour}`;
}