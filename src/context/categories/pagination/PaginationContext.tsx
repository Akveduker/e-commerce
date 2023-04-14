import { createContext } from "react";
const paginationState = {
    firstOrLastLimit: 3,
    showLimit: 1,
}
export const PaginationContex = createContext<typeof paginationState>(paginationState)