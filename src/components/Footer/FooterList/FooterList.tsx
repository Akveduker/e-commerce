import React, { FC } from 'react';
import { BrowserView, CustomView, isMobile } from 'react-device-detect';
import { ILinks } from '../../../types/Links/Links';
import GreenLink from '../../../ui/links/GreenLink/GreenLink';
import ArrowDown from '../../../ui/icons/ArrowDown/ArrowDown';
import Dropdown from '../../General/Dropdown/Dropdown';
import s from './FooterList.module.scss'
interface FooterListProps {
    item: ILinks
}
const FooterList: FC<FooterListProps> = ({ item }) => {
    if (window.innerWidth <= 700) {
        return (
            <Dropdown
                openerClassNameActive={s['opener--active']}
                opener={
                    <h3 className={s['title']}>
                        {item.title}
                        <ArrowDown
                            width={20}
                            height={20}
                            viewBox={'0 0 16 15'}
                            className={s['icon']}
                        />
                    </h3>
                }
                content={
                    item.links.map(link => {
                        return (
                            <p key={link.name} className={s['item']}>
                                <GreenLink
                                    to={link.url}
                                >
                                    {link.name}
                                </GreenLink>
                            </p>
                        )
                    })

                }
            />
        )
    }
    return (
        <ul className={s['list']}>
            <li className={s['title']}>
                <h3>{item.title}</h3>
            </li>
            {item.links.map(link => {
                return (
                    <li key={link.name} className={s['item']}>
                        <GreenLink
                            to={link.url}
                        >
                            {link.name}
                        </GreenLink>
                    </li>
                )
            })}
        </ul>

    );
};

export default FooterList;