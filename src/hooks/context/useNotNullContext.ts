import { useContext } from "react";

export const useNotNullContext = <T>(context: React.Context<T>) => {
    const currentContext = useContext(context);
    if (!currentContext) {
        throw new Error(
            "context has to be used within Provider"
        );
    }

    return currentContext;
};