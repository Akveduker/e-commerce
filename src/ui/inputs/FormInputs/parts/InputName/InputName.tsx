import React, { FC } from 'react';
import s from './InputName.module.scss'
interface InputNameProps {
    inputName: string;
}
const InputName: FC<InputNameProps> = ({ inputName }) => {
    return (
        <p className={s['name']}>{inputName}</p>
    );
};

export default InputName;