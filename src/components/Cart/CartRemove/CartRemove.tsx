import { FC } from 'react';
import { SmallCardContext } from '../../../context/card/SmallCardContext';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import CloseIcon from '../../../ui/icons/CloseIcon/CloseIcon';
import s from './CartRemove.module.scss'

const CartRemove: FC = () => {
    const removeFc = useNotNullContext(SmallCardContext).removeFc
    const onClick = () => {
        removeFc()
    }
    return (
        <button type='button' className={s['button']} onClick={onClick}>
            <CloseIcon />
            Удалить
        </button>
    );
};

export default CartRemove;