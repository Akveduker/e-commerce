import { FC } from 'react';
import OkIcon from '../../../../icons/OkIcon/OkIcon';
import s from './InputValidationOk.module.scss'
import { Status } from '../../../../../types/categories/categories';
import { STATUS_DONE } from '../../../../../data/status/status';
interface InputValidationOkProps {
    status: Status;
}
const InputValidationOk: FC<InputValidationOkProps> = ({ status }) => {
    return (
        <div>
            {status === STATUS_DONE && <div className={s['icon']} data-testid={'icon'}><OkIcon /></div>}
        </div>
    );
};

export default InputValidationOk;