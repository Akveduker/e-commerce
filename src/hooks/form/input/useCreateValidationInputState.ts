
import { personalReducer } from '../../../utils/roots/reducers/inputValidation/personalReducer/personalReducer';
import { addressReducer } from '../../../utils/roots/reducers/inputValidation/addressReducer/addressReducer';
import { useReducer } from 'react';
import { InputValidationReducer, ValidationStateScheme } from "../../../types/IInputValidation/InputValidation";
import { FormStateItemConstructor } from '../../../utils/forms/FormStateItemConstructor/FormStateItemConstructor';
import _ from 'lodash';
import { FormStateAddressItemConstructor } from '../../../utils/forms/FormStateAddressItemConstructor/FormStateAddressItemConstructor';

export const useCreateValidationInputState = <T extends string[]>(
    stateObj: ValidationStateScheme<T>,
    isAddress?: boolean
) => {
    let initialState = _.mapValues(stateObj, (o) => {
        return isAddress ?
            new FormStateAddressItemConstructor(o.validators, o.value)
            :
            new FormStateItemConstructor(o.validators, o.value)
    })

    const [state, dispatch] = useReducer
        <InputValidationReducer<T>>
        (
            isAddress ? addressReducer : personalReducer,
            initialState
        )
    return [state, dispatch] as const
}
