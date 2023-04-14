import { useInputsStateChangers } from '../../../../hooks/form/useInputsStateChangers';
import { IFormInputProps } from '../../../../types/formInput/formInput';
import DefaultInput from '../../DefaultInput/DefaultInput';
import InputName from '../parts/InputName/InputName';
import InputValidationError from '../parts/InputValidationError/InputValidationError';
import InputValidationOk from '../parts/InputValidationOk/InputValidationOk';
import s from './AddressTextInput.module.scss'
interface AddressTextInputProps<T extends string[]> extends IFormInputProps<T> {
    inputName: string
}
const AddressTextInput = <T extends string[]>(props: AddressTextInputProps<T>) => {
    const { dataItemState, inputName } = props
    const { status, value, errorBody } = dataItemState
    const [onChange, onBlur] = useInputsStateChangers(props, value)
    return (
        <label>
            <InputName inputName={inputName} />
            <div className={s['container']}>
                <DefaultInput type="text" value={value} onChange={onChange} onBlur={onBlur} />
                {value &&
                    <InputValidationOk
                        status={status}
                    />
                }
            </div>
            <InputValidationError
                status={status}
                errorBody={`${inputName} ${errorBody}`}
            />
        </label>
    );
};

export default AddressTextInput;