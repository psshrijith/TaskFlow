import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error ("No provider");
    }

    return context;
}