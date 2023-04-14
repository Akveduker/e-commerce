export type FilterRange<T> = { min: T, max: T };
export type RangeNames = 'price' | 'rate';
export interface IFilterRange {
    name: RangeNames;
    defaultValues: FilterRange<number>;
    currentValues: FilterRange<number>;
    step: number;
}
export interface IRangeContext extends IFilterRange {
    dispatchFunc: () => void;
}
export type RangeReducerActions =
    | { type: 'setOne', payload: { name: keyof IRangeContext['currentValues'], value: number } }
    | { type: 'setBoth', payload: [number, number] }