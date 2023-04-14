import { roots } from '../../../router/routes/routes';
import { isMobile } from 'react-device-detect';
export const getMobileProfieRoot = () => {
    if (isMobile) return `${roots.main}${roots.user}`
    return `${roots.main}${roots.user}/${roots.profile}`
}