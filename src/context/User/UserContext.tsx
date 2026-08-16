/* eslint-disable react-refresh/only-export-components */
import {createContext} from "react";

type UserContextType = {
    names: string;
    setNames: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | undefined> (
    undefined
);
