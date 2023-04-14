import { FC, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MobileCategoriesContext } from '../../../../context/mobileCategories/mobileCategories';
import { useSetModalState } from '../../../../hooks/modal/useSetModalState';
import { roots } from '../../../../router/routes/routes';
import { useAppSelector } from '../../../../store/store';
import ArrowRight from '../../../../ui/icons/ArrowRight/ArrowRight';
import { findSingleCategoryById } from '../../../../utils/store/categories/findSingleCategoryById/findSingleCategoryById';
import { getCategoriesfromStore } from '../../../../utils/store/categories/getCategoriesfromStore';
import CategoriesMobileContainer from '../CategoriesMobileContainer/CategoriesMobileContainer';
import s from './CategoriesMobileItem.module.scss'
interface CategoriesMobileItemProps {
    id: number;
}
const CategoriesMobileItem: FC<CategoriesMobileItemProps> = ({ id }) => {
    const category = findSingleCategoryById(id, useAppSelector(getCategoriesfromStore).categories)
    const ref = useRef<HTMLDivElement>(null)
    const [isActive, closeModal, openModal] = useSetModalState()
    const context = useContext(MobileCategoriesContext)
    if (!category) return null
    const { name, childCategory } = category
    if (!childCategory.length) return (
        <div className={s['container']}>
            <Link to={`${roots.main}${roots.categories}/${id}`} className={s['item']} onClick={(e) => {
                e.stopPropagation();
                context?.closeAll()
            }}>
                <span className={s['content']}>{name}</span>
            </Link>
        </div>
    )
    return (
        <div ref={ref} className={s['container']}>
            <button type='button' className={s['item']} onClick={openModal} >
                <span className={s['content']}>
                    {name}
                    <ArrowRight />
                </span>
                <CategoriesMobileContainer
                    title={name}
                    isActive={isActive}
                    categoriesIds={childCategory}
                    setIsClose={closeModal}
                />
            </button>
        </div>
    );
};

export default CategoriesMobileItem;