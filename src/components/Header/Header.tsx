import { FC } from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import s from './Header.module.scss'
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderControl from './HeaderControl/HeaderControl';
import { BrowserView } from 'react-device-detect';
const Header: FC = () => {
    return (
        <header >
            <div className={s['container']}>
                <BrowserView>
                    <HeaderTop />
                </BrowserView>
                <HeaderControl />
            </div>
            <HeaderBottom />
        </header>
    );
};

export default Header;