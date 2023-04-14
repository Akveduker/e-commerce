import React, { FC } from 'react';
import { setViewType } from '../../../../slices/filterSlice/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { productViewType } from '../../../../types/filter/filter';
import s from './ViewButton.module.scss'
interface ViewButtonProps {
    name: productViewType;
    children: React.ReactNode;
}
const ViewButton: FC<ViewButtonProps> = ({ name, children }) => {
    const currentType = useAppSelector(state => state.filters.productsView.viewType)
    const dispatch = useAppDispatch();
    const onClick = () => {
        dispatch(setViewType(name))
    }
    return (
        <button type='button' className={currentType === name ? `${s['button']} ${s['button--active']}` : s['button']} onClick={onClick}>
            {children}
        </button>
    );
};

export default ViewButton;