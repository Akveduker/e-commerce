import { IProduct } from '../../../../types/Products/products';
import { useAppSelector } from '../../../../store/store';
export const useCheckBySearch = () => {
    const query = useAppSelector(state => state.filters.search)
    return (products: IProduct[]) => {
        return products.filter(product => {
            return product.title.toLowerCase().includes(query.toLowerCase())
        })
    }
}