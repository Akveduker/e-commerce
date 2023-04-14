import { createContext, FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { STATUS_ERROR, STATUS_LOADING } from '../../../data/status/status';
import { useFetchProduct } from '../../../hooks/product/useFetchProduct';
import { roots } from '../../../router/routes/routes';
import { FullProduct } from '../../../types/ProductPage/ProductPage';
import Loader from '../../../ui/features/Loader/Loader';
import s from './ProductPageProvide.module.scss'
export const ProductPageContext = createContext<null | FullProduct>(null)
interface PoroductPageProviderProps {
    children: React.ReactNode;
}
const PoroductPageProvider: FC<PoroductPageProviderProps> = ({ children }) => {
    const id = +(useParams().id as string)
    const { data, status } = useFetchProduct(id)
    console.log(status.type)
    if (status.type === STATUS_ERROR) return <Navigate to={`/${roots.main}/${roots.notFound}`} replace />

    if (!data || status.type === STATUS_LOADING) return <div className={s['page']}><Loader /></div>
    return (
        <ProductPageContext.Provider value={data}>
            {children}
        </ProductPageContext.Provider>
    );
};

export default PoroductPageProvider;