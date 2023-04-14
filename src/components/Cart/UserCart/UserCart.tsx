import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetUserCart } from '../../../hooks/Cart/useGetUserCart';
import { roots } from '../../../router/routes/routes';
import UserCartBody from '../UserCartBody/UserCartBody';
import UserCartIconWithSum from '../UserCartIconWithSum/UserCartIconWithSum';
import s from './UserCart.module.scss'

const UserCart: FC = () => {
    const [isActive, setIsActive] = useState(false)
    const className = isActive ? `${s['container']} ${s['container--active']}` : s['container']
    let tiemout: NodeJS.Timeout | undefined
    const onMouseEnter = () => {
        if (tiemout) { clearTimeout(tiemout) }
        setIsActive(true)
    }
    const onMouseLeave = () => {
        tiemout = setTimeout(() => {
            setIsActive(false)
        }, 200)
    }
    return (
        <div className={className} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <Link to={`/${roots.main}/${roots.chekout}`} className={s['link']}  >
                <UserCartIconWithSum />
            </Link>
            <div className={s['border']}>
                <UserCartBody />
            </div>
        </div>
    );
};

export default UserCart;