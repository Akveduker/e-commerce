import React, { FC } from 'react';
import { STATUS_ERROR } from '../../../data/status/status';
import { ExpandenError, ExpandenStatus } from '../../../types/categories/categories';
import s from './ErrorHandler.module.scss'
interface ErrorHandlerProps {
    errors: ExpandenStatus[];
    children: React.ReactNode;
}
const ErrorHandler: FC<ErrorHandlerProps> = ({ errors, children, }) => {
    const error = errors.find(item => item.type === STATUS_ERROR) as ExpandenError | undefined
    return (
        <div>
            {children}
            {error &&
                <p className={s['error']}>
                    {error.body}
                </p>
            }
        </div>

    );
};

export default ErrorHandler;