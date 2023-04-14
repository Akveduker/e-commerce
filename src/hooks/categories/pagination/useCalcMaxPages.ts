import { useAppSelector } from "../../../store/store";

export const useCalcMaxPages = () => {
    const itemsLength = useAppSelector(state => state.filters.poductsSum)
    const { limit } = useAppSelector(state => state.filters.productsView)
    const pagesNum = Math.ceil(itemsLength / limit);
    const maxPages = pagesNum === 0 ? 1 : pagesNum
    return maxPages
}