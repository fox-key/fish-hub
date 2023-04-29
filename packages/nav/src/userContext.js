import {createContext, useContext} from "react";
export const userContext = createContext(null)
export function useUserContext(){
    const data = useContext(userContext);
    return data;
}