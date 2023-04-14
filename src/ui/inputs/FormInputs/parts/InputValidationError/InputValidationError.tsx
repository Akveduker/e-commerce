import React, { FC } from 'react';
import { STATUS_ERROR } from '../../../../../data/status/status';
import { Status } from '../../../../../types/categories/categories';

import s from './InputValidationError.module.scss'
interface InputValidationErrorProps {
    status: Status;
    errorBody: string;
}
const InputValidationError: FC<InputValidationErrorProps> = ({ status, errorBody }) => {
    return (
        <div>
            {status === STATUS_ERROR && <p className={s['error']}>{errorBody}</p>}
        </div>
    );
};

export default InputValidationError;