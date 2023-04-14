import { FilterRange } from "../../../types/filter/range/range"


export const rangeInputCheckForValue = (value: number, inputsValue: FilterRange<number>, inputKey: keyof FilterRange<number>) => {
    if (inputKey === 'max') {
        if (value < inputsValue.min) {
            return {
                min: value,
                max: inputsValue.min
            }
        }
    }
    else {
        if (value > inputsValue.max) {
            return {
                max: value,
                min: inputsValue.max
            }
        }
    }
    return {
        ...inputsValue,
        [inputKey]: +value
    }
}