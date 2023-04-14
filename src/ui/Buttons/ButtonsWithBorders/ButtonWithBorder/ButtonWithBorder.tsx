import { FC } from 'react';
import { ButtonWithBorderProps } from '../../../../types/ui/buttonsWithBorders/buttonsWithBorders';
import s from '../buttonsStyles.module.scss'

const ButtonWithBorder: FC<ButtonWithBorderProps> = ({ styleType, children, ...props }) => {
    const className = `${s['button']} ${s[`button--${styleType}`]}`
    return (
        <button {...props} className={className}>
            {children}
        </button>
    );
};

export default ButtonWithBorder;