import { Navigate, Outlet, useParams } from 'react-router-dom';
import BreadScrumbs from '../components/General/BreadScrumbs/BreadScrumbs/BreadScrumbs';
import ProductBreadCrumbs from '../components/General/BreadScrumbs/ProductBreadCrumbs/ProductBreadCrumbs';
import { roots } from '../router/routes/routes';
import PoroductPageProvider from '../context/product/ProductPageProvider/PoroductPageProvider';
const Product = () => {
    const id = useParams().id
    // if (!id) return <Navigate to={`/${roots.main}/${roots.notFound}`} replace />
    return (
        <>
            <PoroductPageProvider>
                <BreadScrumbs>
                    <ProductBreadCrumbs />
                </BreadScrumbs>

                <Outlet />
            </PoroductPageProvider>
        </>
    );
};

export default Product;