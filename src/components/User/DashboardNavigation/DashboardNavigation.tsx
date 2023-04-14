import { isMobile } from 'react-device-detect';
import { NavLink } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import DashboardAdressIcon from '../../../ui/icons/DashboardAdressIcon/DashboardAdressIcon';
import DashboardProfileIcon from '../../../ui/icons/DashboardProfileIcon/DashboardProfileIcon';
import LogoutButton from '../LogoutButton/LogoutButton';
import s from './DashboardNavigation.module.scss'
const DashboardNavigation = () => {
    const dashboardClass = isMobile ? ` ${s['container']} ${s['container--mobile']}` : s['container']
    return (
        <div className={dashboardClass}>
            <NavLink to={`${roots.profile}`} className={(navData) => navData.isActive ?
                `${s['link']} ${s['link--active']}`
                :
                s['link']}>
                <DashboardProfileIcon />
                Профиль
            </NavLink>
            <NavLink to={`${roots.address}`}
                className={(navData) => navData.isActive ?
                    `${s['link']} ${s['link--active']}`
                    :
                    s['link']}>
                <DashboardAdressIcon />
                Адресса
            </NavLink>
            <LogoutButton />
        </div>
    );
};

export default DashboardNavigation;