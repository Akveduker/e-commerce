import { NavLink } from 'react-router-dom';
import { useSetModalState } from '../../../hooks/modal/useSetModalState';
import { useGetAuthRoot } from '../../../hooks/roots/useGetAuthRoot';
import { roots } from '../../../router/routes/routes';
import HomeIcon from '../../../ui/icons/HomeIcon/HomeIcon';
import UserProfileIcon from '../../../ui/icons/UserProfileIcon/UserProfileIcon';
import UserCartIconWithSum from '../../Cart/UserCartIconWithSum/UserCartIconWithSum';
import MobileMenuCategoriesButton from '../MobileMenuCategoriesButton/MobileMenuCategoriesButton';
import s from './MobileMenuContainer.module.scss'
const MobileMenuContainer = () => {
    const [isOpen, closeModal, openModal] = useSetModalState()
    const root = useGetAuthRoot()
    return (
        <div className={s['container']}>
            <NavLink to={`${roots.main}`} onClick={closeModal} className={(navData) => {
                return navData.isActive && !isOpen ? `${s['item']} ${s['item--active']}` : s['item']
            }} >
                <HomeIcon className={s['icon']} />
                <span className={s['item__text']}>  Главная</span>
            </NavLink>
            <MobileMenuCategoriesButton
                isActive={isOpen}
                setIsClose={closeModal}
                setIsOpen={openModal}
            />
            <NavLink to={`${roots.main}${roots.chekout}`} onClick={closeModal} className={(navData) => {
                return navData.isActive && !isOpen ? `${s['item']} ${s['item--cart']} ${s['item--active']}` : `${s['item']} ${s['item--cart']}`
            }} >
                <UserCartIconWithSum isMobile />
                <span className={s['item__text']}>Корзина</span>
            </NavLink>
            <NavLink to={root} onClick={closeModal} className={(navData) => {
                return navData.isActive && !isOpen ? `${s['item']} ${s['item--active']}` : s['item']
            }} >
                <UserProfileIcon className={s['icon--stroke']} width={19} height={19} />
                <span className={s['item__text']}>Профиль</span>
            </NavLink>
        </div>
    );
};

export default MobileMenuContainer;