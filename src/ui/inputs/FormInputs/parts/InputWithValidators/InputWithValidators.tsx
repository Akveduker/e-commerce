import { FC } from 'react';
import DefaultInput from '../../../DefaultInput/DefaultInput';
import InputName from '../InputName/InputName';
import InputValidationError from '../InputValidationError/InputValidationError';
import InputValidationOk from '../InputValidationOk/InputValidationOk';
import s from './InputWithValidators.module.scss'
import { InputWithValidatorsProps } from '../../../../../types/formInput/formInput';
const InputWithValidators: FC<InputWithValidatorsProps> = ({ inputTitle, errorBody, errorTitle, status, ...props }) => {
    return (
        <label>
            <InputName inputName={inputTitle} />
            <DefaultInput labelClassName={s['container']}  {...props} >
                <InputValidationOk
                    status={status}
                />
            </DefaultInput>
            <InputValidationError
                status={status}
                errorBody={`${errorTitle} ${errorBody}`}
            />
        </label>
    );
};

export default InputWithValidators;