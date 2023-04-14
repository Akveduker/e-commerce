import { isMobile } from 'react-device-detect';
import { roots } from './../../router/routes/routes';
import { useAppSelector } from "../../store/store";
import { getAuthFromStore } from "../../utils/store/auth/getAuthFromStore";

export const useGetAuthRoot = () => {
    const token = useAppSelector(getAuthFromStore).accessToken;
    let root: string = ''
    token ? root = `${roots.main}${roots.user}` : root = `${roots.main}${roots.authorization}`
    if (token && !isMobile) root = `${root}/${roots.profile}`
    return root
}