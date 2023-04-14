import React from 'react';
import { useLogout } from '../../../hooks/logout/useLogout';
import DashboardLogoutIcon from '../../../ui/icons/DashboardLogoutIcon/DashboardLogoutIcon';
import s from './LogoutButton.module.scss'
const LogoutButton = () => {
    const logout = useLogout()
    return (
        <button type='button' className={s['button']} onClick={() => logout()}>
            <DashboardLogoutIcon /> Выйти
        </button>
    );
};

export default LogoutButton;