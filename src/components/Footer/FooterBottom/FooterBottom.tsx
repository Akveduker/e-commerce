import React, { FC } from 'react';
import { MobileView } from 'react-device-detect';
import config from '../../../config';
import ContactsLink from '../../../ui/links/ContactsLink/ContactsLink';
import s from './FooterBottom.module.scss'
const FooterBottom: FC = () => {
    const { mail, phone } = config
    return (
        <div className={s['container']}>
            <MobileView>
                <p className={s['item']}>
                    <ContactsLink href={`callto:${phone.unformated}`} >{phone.formated}</ContactsLink>
                </p>
                <p className={s['item']}>
                    <ContactsLink href={`mailto:${mail}`}>
                        {mail}
                    </ContactsLink>
                </p>
            </MobileView>
            <p className={s['item']}> Copyright © 2020 petrbilek.com</p>
        </div>
    );
};

export default FooterBottom;