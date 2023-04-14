import { memo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { setType } from '../../../../slices/filterSlice/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import ButtonWithBorder from '../../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import ArrowDown from '../../../../ui/icons/ArrowDown/ArrowDown';
const ShowMoreProducts = () => {
    const dispatch = useAppDispatch()
    const { limit } = useAppSelector(state => state.filters.productsView)
    const [searchParams, setSearchParams] = useSearchParams()
    const page = +(searchParams.get('p') as string)
    const itemsLength = useAppSelector(state => state.filters.poductsSum)
    const pagesNum = Math.ceil(itemsLength / limit);
    const disabled = page >= pagesNum
    const onClick = () => {
        dispatch(setType('concat'))
        setSearchParams(searchParams => {
            searchParams.set('p', `${page + 1}`)
            return searchParams
        })
    }
    const breakPoint = 550
    const emptyText = window.innerWidth >= breakPoint ? 'Нет товаров' : 'Пусто'
    const showMoreText = window.innerWidth >= breakPoint ? ' Показать больше товаров' : 'Еще'
    return (
        <ButtonWithBorder styleType='big' type='button' onClick={onClick} disabled={disabled}>
            {disabled ?
                <>
                    {emptyText}
                </>
                :
                <>
                    {showMoreText}
                    <ArrowDown />
                </>
            }

        </ButtonWithBorder>
    );
};

export default ShowMoreProducts;