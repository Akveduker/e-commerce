import React, { createContext } from "react";
import { IRangeContext, RangeReducerActions } from "../../../types/filter/range/range";
export type RangeContextType = [IRangeContext, React.Dispatch<RangeReducerActions>]
export const RangeContext = createContext<RangeContextType | null>(null)
