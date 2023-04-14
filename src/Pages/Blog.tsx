import { Outlet } from 'react-router-dom';
import BlogBreadCrumbs from '../components/General/BreadScrumbs/BlogBreadCrumbs/BlogBreadCrumbs';
import BreadScrumbs from '../components/General/BreadScrumbs/BreadScrumbs/BreadScrumbs';

const Blog = () => {
    return (
        <>
            <BreadScrumbs >
                <BlogBreadCrumbs />
            </BreadScrumbs>
            <Outlet />
        </>
    );
};

export default Blog;