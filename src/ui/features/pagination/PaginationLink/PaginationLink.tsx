import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setType } from '../../../../slices/filterSlice/filterSlice';
import { useAppDispatch } from '../../../../store/store';
import s from './PaginationLink.module.scss'
interface PaginationLinkProps {
    num: number
}
const PaginationLink: FC<PaginationLinkProps> = ({ num }) => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    let page = +(searchParams.get('p') as string)
    const changePage = () => {
        dispatch(setType('page'))
        setSearchParams(searchParams => {
            searchParams.set('p', num.toString())
            return searchParams
        })
    }
    const className = num === page ? `${s['link']} ${s['link--active']}` : s['link']
    return (
        <button key={num} className={className} onClick={changePage} type='button' data-testid={'button'}>
            {num}
        </button>
    );
};

export default PaginationLink;