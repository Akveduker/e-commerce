import { MobileView } from 'react-device-detect';
import { withErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import AppCrash from '../components/General/AppCrash/AppCrash';
import Header from '../components/Header/Header';
import MobileMenuContainer from '../components/MobileMenu/MobileMenuContainer/MobileMenuContainer';
import { useFetchMainData } from '../hooks/main/useFetchMainData';

const Main = () => {
    const isDone = useFetchMainData()
    if (!isDone) return null
    return (
        <>
            <Header />
            <Outlet />
            <MobileView>
                <MobileMenuContainer />
            </MobileView>
            <Footer />
        </>
    );

};

export default withErrorBoundary(Main, {
    FallbackComponent: AppCrash
});