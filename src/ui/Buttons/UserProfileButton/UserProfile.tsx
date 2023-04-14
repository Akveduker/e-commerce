import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetAuthRoot } from '../../../hooks/roots/useGetAuthRoot';
import UserProfileIcon from '../../icons/UserProfileIcon/UserProfileIcon';
import s from './UserProfile.module.scss'
const UserProfile: FC = () => {
    const root = useGetAuthRoot()
    return (
        <Link to={root} className={s['link']}>
            <UserProfileIcon />
        </Link>
    );
};

export default UserProfile;