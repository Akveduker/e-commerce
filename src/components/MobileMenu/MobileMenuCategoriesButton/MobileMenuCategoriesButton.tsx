import { FC, useEffect } from 'react';
import { IMobileCategoriesContext, MobileCategoriesContext } from '../../../context/mobileCategories/mobileCategories';
import { useAppSelector } from '../../../store/store';
import { ICategoriesMobileButtonProps } from '../../../types/categories/categoriesMobile';
import CatalogIcon from '../../../ui/icons/CatalogIcon/CatalogIcon';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import CategoriesMobileContainer from '../../Categories/CategoriesMobile/CategoriesMobileContainer/CategoriesMobileContainer';
import s from '../MobileMenuContainer/MobileMenuContainer.module.scss'

const MobileMenuCategoriesButton: FC<ICategoriesMobileButtonProps> = ({ isActive, setIsClose, setIsOpen }) => {
    const categoriesIds = useAppSelector(getCategoriesfromStore).categories.filter(category => !category.parentId).map(item => item.id)
    useEffect(() => {
        if (isActive) document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    })
    const contextState: IMobileCategoriesContext = {
        closeAll: setIsClose,
    }
    return (
        <>
            <button type='button'
                className={`${isActive ? `${s['item']} ${s['item--active']}` : s['item']}`}
                onClick={(e) => {
                    isActive ? setIsClose() : setIsOpen()
                }}>
                <CatalogIcon className={s['icon']} />
                <span className={s['item__text']}>Каталог</span>

            </button>
            <MobileCategoriesContext.Provider value={contextState}>
                <CategoriesMobileContainer
                    title='Категории'
                    categoriesIds={categoriesIds}
                    isActive={isActive}
                    setIsClose={setIsClose}
                />
            </MobileCategoriesContext.Provider>
        </>
    );
};

export default MobileMenuCategoriesButton;