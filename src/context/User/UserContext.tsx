/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useState, type ReactNode} from "react";

type UserContextType = {
    names: string;
    setNames: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | undefined> (
    undefined
);
