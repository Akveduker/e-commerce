import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../../../ui/icons/ArrowRight/ArrowRight';
import s from './SectionHeaderWithLink.module.scss'
interface SectionHeaderWithLinkProps {
    title: string;
    link: string;
    url: string;
}
const SectionHeaderWithLink: FC<SectionHeaderWithLinkProps> = ({ title, url, link }) => {
    return (
        <div className={s['header']}>
            <h2>
                {title}
            </h2>
            <Link to={url} className={s['header__link']}>
                {link}
                <ArrowRight
                    className={s['icon']}
                />
            </Link>
        </div>
    );
};

export default SectionHeaderWithLink;