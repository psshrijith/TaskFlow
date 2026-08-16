import { type ReactNode, useContext, useState} from "react";
import {UserContext} from "./UserContext";

type UserProviderProps = {
    children: ReactNode;
}
export const UserProvider = ({children}: UserProviderProps) => {

    const [names, setNames] = useState("shrijith");

    return (
        <UserContext.Provider value={{names, setNames}}>
            {children}
        </UserContext.Provider>
    )
}
