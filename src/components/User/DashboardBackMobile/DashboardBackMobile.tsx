import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import ArrowRight from '../../../ui/icons/ArrowRight/ArrowRight';
import s from './DashboardBackMobile.module.scss'
interface DashboardBackMobile {
    children: React.ReactNode;
}
const DashboardBackMobile: FC<DashboardBackMobile> = ({ children }) => {
    return (
        <div>
            <Link to={`${roots.main}${roots.user}`} className={s['link']}><ArrowRight className={s['icon']} />Назад</Link>
            {children}

        </div>
    );
};

export default DashboardBackMobile;