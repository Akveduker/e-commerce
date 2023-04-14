import { IFilterRange } from "../../../types/filter/range/range"
import { mockObject } from "../mockObject/mockObject"
export const initialRange: IFilterRange = {
    name: 'price',
    defaultValues: { max: 100, min: 0 },
    currentValues: { max: 50, min: 20 },
    step: 1,
}
export const mockRangeItem = (range?: Partial<IFilterRange>) => mockObject(initialRange, range)