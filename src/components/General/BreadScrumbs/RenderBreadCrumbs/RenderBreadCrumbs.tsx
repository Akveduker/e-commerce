import { FC, memo } from 'react';
import { IBreadCrumbsItem } from '../../../../types/BreadCrumbs/BreadCrumbs';
import BreadScrumbsLink from '../BreadScrumbsLink/BreadScrumbsLink';
import s from './RenderBreadCrumbs.module.scss'
interface RenderBreadCrumbs {
    arr: IBreadCrumbsItem[];
}
const RenderBreadCrumbs: FC<RenderBreadCrumbs> = ({ arr }) => {
    return (
        <div>
            {arr.map((item, index) => {
                return (
                    <span key={item.title}>
                        <BreadScrumbsLink
                            item={item}
                        />
                        {index !== arr.length - 1 && <span className={s['slash']}>/</span>}
                    </span>
                )
            })}
        </div>
    )
};

export default memo(RenderBreadCrumbs);