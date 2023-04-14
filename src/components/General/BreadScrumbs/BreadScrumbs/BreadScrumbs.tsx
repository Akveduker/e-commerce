import { FC } from 'react';
import s from './BreadScrumbs.module.scss'
interface BreadCrumbsProps {
    children: React.ReactNode
}
const BreadScrumbs: FC<BreadCrumbsProps> = ({ children }) => {
    return (
        <div className={s['container']}>
            {children}
        </div>
    );
};

export default BreadScrumbs;