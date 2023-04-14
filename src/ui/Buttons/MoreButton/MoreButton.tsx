import React, { FC } from 'react';
import ArrowDown from '../../icons/ArrowDown/ArrowDown';
import s from './MoreButton.module.scss'
interface MoreButtonProps {
    setFunction: () => void;
    isOpen: boolean;
}
const MoreButton: FC<MoreButtonProps> = ({ setFunction, isOpen }) => {
    const text = isOpen ? `Скрыть` : `Больше категорий`
    return (
        <button
            className={isOpen ? `${s['button']} ${s['button--active']}` : `${s['button']}`}
            onClick={setFunction}
            type='button'
            data-testid={'toggle-button'}
        >
            {text}
            <ArrowDown className={s['icon']} />
        </button>
    );
};

export default MoreButton;