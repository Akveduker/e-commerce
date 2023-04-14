import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { BrowserRouter, Outlet } from 'react-router-dom';
import DashboardBody from '../DashboardBody/DashboardBody';
import DashboardNavigation from '../DashboardNavigation/DashboardNavigation';
import s from './UserDashboard.module.scss'
const UserDashboard = () => {
    const dashboardClass = isMobile ? ` ${s['dashboard']} ${s['dashboard--mobile']}` : s['dashboard']
    return (
        <div className={s['container']}>
            <h1>Мой аккаунт</h1>
            <BrowserView>
                <div className={dashboardClass}>
                    <DashboardNavigation />
                    <DashboardBody>
                        <Outlet />
                    </DashboardBody>
                </div>
            </BrowserView>
            <MobileView>
                <div className={dashboardClass}>
                    <DashboardBody>
                        <Outlet />
                    </DashboardBody>
                </div>
            </MobileView>
        </div>
    );
};

export default UserDashboard;