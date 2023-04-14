import React, { FC } from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import s from './Footer.module.scss'
import FooterTags from './FooterTags/FooterTags';
import FooterTop from './FooterTop/FooterTop';
const Footer: FC = () => {
    return (
        <footer className={s['footer']}>
            <FooterTop />
            <FooterTags />
            <FooterBottom />
        </footer>
    );
};

export default Footer;