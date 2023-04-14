import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './GreenLink.module.scss'
interface GreenLinkProps extends LinkProps {
    underline?: boolean;
}
const GreenLink: FC<GreenLinkProps> = ({ underline, children, ...props }) => {
    const className = underline ? `${s['link']} ${s['link__underline']}` : s['link']
    return (
        <Link className={className}  {...props}>
            {children}
        </Link>
    );
};

export default GreenLink;