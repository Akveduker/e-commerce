import React, { FC } from 'react';
import UserCart from '../../Cart/UserCart/UserCart';
import Logo from '../Logo/Logo';
import s from './HeaderControl.module.scss'
import Search from '../Search/Search';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import UserProfile from '../../../ui/Buttons/UserProfileButton/UserProfile';
const HeaderControl: FC = () => {
    const className = isMobile ? `${s['container']} ${s['container--mobile']}` : s['container']
    return (
        <div className={className}>
            <Logo />
            <div className={s['search']}>
                <Search />
            </div>
            <BrowserView>

                <div className={s['section']}>
                    <div className={s['icon']}>
                        <UserProfile />
                    </div>
                    <UserCart />
                </div>
            </BrowserView>
        </div>
    );
};

export default HeaderControl;