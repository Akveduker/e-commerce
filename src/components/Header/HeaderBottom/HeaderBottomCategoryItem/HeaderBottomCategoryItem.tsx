import { FC, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useCalcLeftAndWidth } from '../../../../hooks/categories/header/useCalcLeftAndWidth';
import { roots } from '../../../../router/routes/routes';
import { useAppSelector } from '../../../../store/store';
import { HeaderBottomCategoryItemType, ICategories } from '../../../../types/categories/categories';
import ArrowDown from '../../../../ui/icons/ArrowDown/ArrowDown';
import ArrowRight from '../../../../ui/icons/ArrowRight/ArrowRight';
import HeaderCategoryLink from '../../../../ui/links/HeaderCategoryLink/HeaderCategoryLink';
import { findSingleCategoryById } from '../../../../utils/store/categories/findSingleCategoryById/findSingleCategoryById';
import { getCategoriesfromStore } from '../../../../utils/store/categories/getCategoriesfromStore';
import HeaderBottomSubCategoryList from '../HeaderBottomSubCategoryList/HeaderBottomSubCategoryList';
import s from './HeaderBottomCategoryItem.module.scss'
interface HeaderBottomCategoryItemProps {
    id: number;
    parentRef: React.RefObject<HTMLDivElement>;
    type: HeaderBottomCategoryItemType;
}
const HeaderBottomCategoryItem: FC<HeaderBottomCategoryItemProps> = ({ id, parentRef, type }) => {
    const category = findSingleCategoryById(id, useAppSelector(getCategoriesfromStore).categories)
    const currentContainerRef = useRef<HTMLDivElement>(null)
    const [acitve, setActive] = useState(false)
    const cords = useCalcLeftAndWidth(parentRef, currentContainerRef, type)
    const onHover = () => {
        setActive(true)
    }
    const onBlur = () => {
        setActive(false)
    }
    if (!category) return null
    const { childCategory, name } = category
    if (!childCategory.length || isMobile) return (
        <HeaderCategoryLink to={`${roots.categories}/${id}`}>
            {name}
        </HeaderCategoryLink>
    )
    return (
        <div ref={currentContainerRef}>
            <HeaderCategoryLink
                to={`${roots.categories}/${id}`}
                onMouseEnter={onHover}
                onMouseLeave={onBlur}
            >
                {name}
                {type === 'main' ? <ArrowDown className={s['icon']} />
                    :
                    <ArrowRight className={s['icon']} />
                }
                {acitve && cords && <HeaderBottomSubCategoryList
                    parentRef={parentRef}
                    categoriesIds={childCategory}
                    {...cords}
                />}
            </HeaderCategoryLink>
        </div>
    );
};

export default HeaderBottomCategoryItem;