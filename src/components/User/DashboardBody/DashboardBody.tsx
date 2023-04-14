import React, { FC } from 'react';
import { isMobile } from 'react-device-detect';
import s from './DashboardBody.module.scss'
interface DashboardBodyProps {
    children: React.ReactNode;
}
const DashboardBody: FC<DashboardBodyProps> = ({ children }) => {
    const dashboardClass = isMobile ? ` ${s['container']} ${s['container--mobile']}` : s['container']
    return (
        <div className={dashboardClass}>
            {children}
        </div>
    );
};

export default DashboardBody;