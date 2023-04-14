import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkWithBorderProps } from '../../../../types/ui/buttonsWithBorders/buttonsWithBorders';

import s from '../buttonsStyles.module.scss'
const LinkWithBorder: FC<LinkWithBorderProps> = ({ styleType, children, ...props }) => {
    const className = `${s['button']} ${s[`button--${styleType}`]}`
    return (
        <Link {...props} className={className}>
            {children}
        </Link>
    );
};

export default LinkWithBorder;