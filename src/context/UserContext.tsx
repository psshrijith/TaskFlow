import {createContext, useContext, useState, type ReactNode} from "react";

type UserContextType = {
    names: string;
    setNames: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined> (
    undefined
);

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

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error ("No provider");
    }

    return context;
}