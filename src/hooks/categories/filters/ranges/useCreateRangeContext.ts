
import { useAppDispatch } from '../../../../store/store';
import { useReducer } from 'react';
import { setRangeValue } from '../../../../slices/filterSlice/filterSlice';
import { IFilterRange, IRangeContext, RangeReducerActions } from '../../../../types/filter/range/range';
export const useCreateRangeContext = (range: IFilterRange) => {
    const dispatchRedux = useAppDispatch()
    const initialState: IRangeContext = {
        ...range,
        dispatchFunc() {
            dispatchRedux(setRangeValue({
                rangeName: this.name,
                value: this.currentValues
            }
            ))

        }
    }
    const reducer = (state: IRangeContext, action: RangeReducerActions): IRangeContext => {
        switch (action.type) {
            case 'setOne':
                return {
                    ...state, currentValues: {
                        ...state.currentValues,
                        [action.payload.name]: action.payload.value
                    }
                };
            case 'setBoth':
                return {
                    ...state, currentValues: {
                        min: action.payload[0],
                        max: action.payload[1]
                    }
                };
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch] as const
}