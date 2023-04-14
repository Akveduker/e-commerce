import { isMobile } from 'react-device-detect';
import { Navigate } from 'react-router-dom';
import AuthorizationMain from '../components/Authorization/AuthorizationMain/AuthorizationMain';
import { roots } from '../router/routes/routes';
import { useAppSelector } from '../store/store';
import { getMobileProfieRoot } from '../utils/roots/getMobileProfileRoot/getMobileProfileRoot';
import { getAuthFromStore } from '../utils/store/auth/getAuthFromStore';

const Authorization = () => {
    const { accessToken } = useAppSelector(getAuthFromStore);
    if (accessToken) return <Navigate to={getMobileProfieRoot()} replace />
    return (
        <>
            <AuthorizationMain />
        </>
    );
};

export default Authorization;