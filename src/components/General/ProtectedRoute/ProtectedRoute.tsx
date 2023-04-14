import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import { getAuthFromStore } from '../../../utils/store/auth/getAuthFromStore';

const ProtectedRoute = () => {
    const { accessToken } = useAppSelector(getAuthFromStore);
    let location = useLocation()
    return (
        accessToken ?
            <Outlet />
            :
            <Navigate to={`${roots.main}${roots.authorization}`} state={{ from: location }} />
    );
};

export default ProtectedRoute;