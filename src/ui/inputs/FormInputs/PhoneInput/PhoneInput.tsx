import { formatePhoneInInput } from '../../../../utils/filters/formatePhoneInInput/formatePhoneInInput';
import { FormDefaultInput } from '../../../../types/formInput/formInput';
import { useInputsStateChangers } from '../../../../hooks/form/useInputsStateChangers';
import InputWithValidators from '../parts/InputWithValidators/InputWithValidators';
const PhoneInput = <T extends string[]>(props: FormDefaultInput<T>) => {
    const { dataItemState, inputTitle, errorTitle, dispatch, stateItemKey, ...rest } = props
    const { status, value, errorBody } = dataItemState
    const [onChange, onBlur] = useInputsStateChangers(props, formatePhoneInInput(value))
    return (
        <InputWithValidators
            inputType='mask'
            mask={"+7 999 999 99 99"}
            inputTitle={inputTitle}
            errorTitle={errorTitle}
            status={status}
            errorBody={errorBody}
            onChange={onChange}
            onBlur={onBlur}
            type='text'
            value={value}
            {...rest}
        />
    );
};

export default PhoneInput;