
import { RootState } from "../../../../store/store";
import { RangeNames } from "../../../../types/filter/range/range";

export const findRangeByName = (name: RangeNames) => (state: RootState) => state.filters.ranges.find(range => range.name === name)