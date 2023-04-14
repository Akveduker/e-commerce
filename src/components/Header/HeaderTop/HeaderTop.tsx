import React, { FC } from 'react';
import GreenLink from '../../../ui/links/GreenLink/GreenLink';
import s from './HeaderTop.module.scss'
import ContactsLink from '../../../ui/links/ContactsLink/ContactsLink';
import config from '../../../config';
const HeaderTop: FC = () => {
    const { mail, phone } = config
    return (
        <div className={s['container']}>
            <div className={s['wrapper']}>
                <div className={s['item']}>
                    <GreenLink to={'/'}>
                        Chat with us
                    </GreenLink>
                </div>
                <div className={s['item']}>
                    <ContactsLink href={`callto:${phone.unformated}`}>
                        {phone.formated}
                    </ContactsLink>
                </div>
                <div className={s['item']}>
                    <ContactsLink href={`mailto:${mail}`}>
                        {mail}
                    </ContactsLink>
                </div>
            </div>
            <div className={s['wrapper']}>
                <div className={s['item']}>
                    <GreenLink to={'/'}>
                        Blog
                    </GreenLink>
                </div>

                <div className={s['item']}>
                    <GreenLink to={'/'}>
                        About Us
                    </GreenLink>
                </div>
                <div className={s['item']}>
                    <GreenLink to={'/'}>
                        Careers
                    </GreenLink>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;