import React, { useEffect, useRef, useState } from 'react';
import { searchInAllProducts } from '../../../api/api';
import { STATUS_DONE, STATUS_ERROR, STATUS_LOADING } from '../../../data/status/status';
import { useFetchData } from '../../../hooks/fetch/useFetchData';
import { IProduct } from '../../../types/Products/products';
import Loader from '../../../ui/features/Loader/Loader';
import SearchIcon from '../../../ui/icons/SearchIcon/SearchIcon';
import SearchCard from '../../General/ProductsCard/SearchCard/SearchCard';
import s from './Search.module.scss'
const Search = () => {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState('')
    const { status, data, fetchCallback } = useFetchData<IProduct[]>(searchInAllProducts(value))
    const className = isActive ? `${s['container']} ${s['container--active']}` : s['container']
    const clickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) setIsActive(false)
    }
    useEffect(() => {
        if (ref.current) document.addEventListener('click', clickOutside)
        return () => {
            document.removeEventListener('click', clickOutside)
        }
    })
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchCallback()
    }
    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        fetchCallback()
    }
    const clear = () => {
        setValue('')
        setIsActive(false)
    }
    return (
        <div className={className} ref={ref}>
            <form onSubmit={onSubmit} className={s['form']}>
                <input type="text"
                    className={s['input']}
                    placeholder={'search'}
                    value={value}
                    onChange={onChange}
                    onFocus={() => { setIsActive(true) }}
                />
                <button className={`${s['clear']} ${s['button']}`} type="button" onClick={clear}>
                    X
                </button>
                <button className={`${s['search']} ${s['button']}`}>
                    <SearchIcon />
                </button>
            </form>
            {isActive && <div className={s['body']}>
                {status.type === STATUS_LOADING && <Loader />}
                {status.type !== STATUS_ERROR && data && data.map(item => {
                    return (
                        <div className={s['item']} key={item.id}>
                            <SearchCard
                                setIsActive={setIsActive}
                                cardId={item.id}
                            />
                        </div>
                    )
                })}
                {status.type === STATUS_DONE && !data?.length && <p className={s['empty']}>Ничего не найдено</p>}
            </div>}
        </div>
    );
};

export default Search;