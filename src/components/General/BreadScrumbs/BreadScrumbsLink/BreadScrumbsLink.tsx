import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IBreadCrumbsItem } from '../../../../types/BreadCrumbs/BreadCrumbs';
import s from './BreadScrumbsLink.module.scss'
interface BreadScrumbsLinkProps {
    item: IBreadCrumbsItem;
}
const BreadScrumbsLink: FC<BreadScrumbsLinkProps> = ({ item }) => {
    const location = useLocation()
    return (
        <>
            {location.pathname !== item.url ?
                <Link className={s['link']} to={item.url}>
                    {item.title}
                </Link >
                :
                <span className={` ${s['current']}`}>
                    {item.title}
                </span >
            }
        </>
    );
};

export default BreadScrumbsLink;