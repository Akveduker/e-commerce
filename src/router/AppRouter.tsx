import { isMobile } from 'react-device-detect';
import { Navigate, Route, Routes } from 'react-router-dom';
import CategoriesMainList from '../components/Categories/CategoriesMainList/CategoriesMainList';
import Products from '../components/Categories/Products/Products';
import AddressContainerWithBuilder from '../components/General/AddressBook/AddressContainerWithBuilder/AddressContainerWithBuilder';
import ProtectedRoute from '../components/General/ProtectedRoute/ProtectedRoute';
import MainContent from '../components/Main/MainContent/MainContent';
import ProductContent from '../components/Product/ProductContent/ProductContent';
import DashboardBackMobile from '../components/User/DashboardBackMobile/DashboardBackMobile';
import DashboardNavigation from '../components/User/DashboardNavigation/DashboardNavigation';
import DashboardProfile from '../components/User/DashboardProfile/DashboardProfile';
import CheckoutMain from '../components/Сheckout/CheckoutMain/CheckoutMain';
import Authorization from '../Pages/Authorization';
import Categories from '../Pages/Categories';
import Checkout from '../Pages/Checkout';
import Main from '../Pages/Main';
import NotFound from '../Pages/NotFound';
import Product from '../Pages/Product';
import User from '../Pages/User';
import { roots } from './routes/routes';

const router = () => {
    return (
        <Routes>
            <Route path={roots.main} element={<Main />}>
                <Route index element={<MainContent />} />
                <Route path={roots.categories} element={<Categories />}>
                    <Route index element={isMobile ? <Navigate to={`${roots.main}`} replace /> : <CategoriesMainList />} />
                    <Route path=':id' element={<Products />} >
                    </Route>
                </Route>
                <Route path={roots.product} element={<Product />}>
                    <Route index element={<Navigate to={`../${roots.categories}`} replace />} />
                    <Route path=':id' element={<ProductContent />} />
                </Route>
                <Route path={roots.authorization} element={<Authorization />} />
                <Route element={<ProtectedRoute />}>
                    {isMobile ?
                        <Route path={roots.user} element={<User />}>
                            <Route index element={<DashboardNavigation />} />
                            <Route path={roots.profile} element={
                                <DashboardBackMobile>
                                    <DashboardProfile />
                                </DashboardBackMobile>
                            } />
                            <Route path={roots.address} element={
                                <DashboardBackMobile>
                                    <AddressContainerWithBuilder />
                                </DashboardBackMobile>

                            } />
                        </Route>
                        :
                        <Route path={roots.user} element={<User />}>
                            <Route index element={<Navigate to={roots.main} />} />
                            <Route path={roots.profile} element={<DashboardProfile />} />
                            <Route path={roots.address} element={<AddressContainerWithBuilder />} />
                        </Route>
                    }



                </Route>
                <Route path={roots.chekout} element={<Checkout />} >
                    <Route index element={<CheckoutMain />} />
                </Route>
            </Route>
            <Route path={roots.notFound} element={<NotFound />} />
        </Routes>
    );
};

export default router;