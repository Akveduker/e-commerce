import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './HeaderCategoryLink.module.scss'
interface HeaderCategoryLinkProps extends LinkProps {
    children: React.ReactNode;
}
const HeaderCategoryLink: FC<HeaderCategoryLinkProps> = ({ children, ...props }) => {
    return (
        <Link {...props} className={s['link']}>
            {children}
        </Link>
    );
};

export default HeaderCategoryLink;