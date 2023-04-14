import React, { FC } from 'react';
import { useAppSelector } from '../../../store/store';
import UserCartIcon from '../../../ui/icons/UserCartIcon/UserCartIcon';
import { getCartFromStore } from '../../../utils/store/cart/getCartFromStore';
import s from './UserCartIconWithSum.module.scss'
interface UserCartIconWithSumProps {
    isMobile?: boolean
}
const UserCartIconWithSum: FC<UserCartIconWithSumProps> = ({ isMobile }) => {
    const sumClass = isMobile ? `${s['sum']} ${s['sum--mobile']}` : s['sum']
    const productsIds = useAppSelector(getCartFromStore).productsIds
    const sumOfItems = productsIds.reduce((prev, current) => prev + current.amount, 0)
    return (
        <div className={s['container']}>
            <UserCartIcon />
            {productsIds.length ? <span className={sumClass}>{sumOfItems > 9 ? '9+' : sumOfItems}</span> : null}
        </div>
    );
};

export default UserCartIconWithSum;