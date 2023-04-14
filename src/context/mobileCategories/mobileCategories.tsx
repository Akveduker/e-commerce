import React, { createContext } from "react";

export interface IMobileCategoriesContext {
    closeAll: () => void;
}
export const MobileCategoriesContext = createContext<IMobileCategoriesContext | null>(null) 