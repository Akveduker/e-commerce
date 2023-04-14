import { Outlet } from 'react-router-dom';
import BreadScrumbs from '../components/General/BreadScrumbs/BreadScrumbs/BreadScrumbs';
import CategoriesBreadCrumbs from '../components/General/BreadScrumbs/CategoriesBreadCrumbs/CategoriesBreadCrumbs';
const Categories = () => {
    return (
        <>
            <BreadScrumbs >
                <CategoriesBreadCrumbs />
            </BreadScrumbs>
            <Outlet />
        </>
    );
};

export default Categories;