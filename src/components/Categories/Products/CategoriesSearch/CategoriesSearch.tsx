import React, { FC, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setSearch, setType } from '../../../../slices/filterSlice/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import DefaultInput from '../../../../ui/inputs/DefaultInput/DefaultInput';
import s from './CategoriesSearch.module.scss'
const CategoriesSearch: FC = () => {
    const value = useAppSelector(state => state.filters.search)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        dispatch(setType('page'))
        dispatch(setSearch(text.trimStart()))
        setSearchParams(searchParams => {
            if (!text.length) {
                searchParams.delete('q')
                return searchParams
            }
            searchParams.set('q', text)
            return searchParams
        })
    }
    return (
        <>
            <h2 className={s['title']}>Поиск</h2>
            <DefaultInput type="text" value={value} className={s['input']} onChange={onChange} placeholder={'Запрос...'} />
        </>
    );
};

export default memo(CategoriesSearch);