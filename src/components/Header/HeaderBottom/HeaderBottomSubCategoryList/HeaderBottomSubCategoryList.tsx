import React, { FC, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { HeaderBottomCategoryCords } from '../../../../types/categories/categories';
import HeaderBottomCategoryItem from '../HeaderBottomCategoryItem/HeaderBottomCategoryItem';
import s from './HeaderBottomSubCategoryList.module.scss'
interface HeaderBottomSubCategoryListProps extends HeaderBottomCategoryCords {
    categoriesIds: number[];
    parentRef: React.RefObject<HTMLDivElement>;
}
const HeaderBottomSubCategoryList: FC<HeaderBottomSubCategoryListProps> = ({ categoriesIds, left, minWidth, parentRef }) => {
    if (!parentRef.current) return null
    return createPortal(
        <div
            className={s['container']}
            style={{
                left,
                minWidth,
            }}
        >
            {categoriesIds.map(id => {
                return (
                    <HeaderBottomCategoryItem
                        parentRef={parentRef}
                        id={id}
                        key={id}
                        type='sub'
                    />
                )
            })}
        </div>
        ,
        parentRef.current
    );
};

export default HeaderBottomSubCategoryList;