import React, { FC } from 'react';
import s from './ContactsLink.module.scss'
const SochialLink: FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
    return (
        <a {...props} className={s['link']}>
            {props.children}
        </a>
    );
};

export default SochialLink;