import { createContext, FC, useContext } from "react";
import { CheckboxNames } from "../../../types/filter/filter";
import React from 'react';


export const CheckboxContext = createContext<CheckboxNames | null>(null)
interface CheckboxProviderProps {
    checkboxName: CheckboxNames;
    children: React.ReactNode;
}
const CheckboxProvider: FC<CheckboxProviderProps> = ({ checkboxName, children }) => {
    return (
        <CheckboxContext.Provider value={checkboxName}>
            {children}
        </CheckboxContext.Provider>
    );
};

export default CheckboxProvider;