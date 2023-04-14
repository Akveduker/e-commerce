import BannersSection from "../BannerSection/BannersSection";
import BestOffersSection from "../BestOffersSection/BestOffersSection";
import CustomersSaysSection from "../CustomersSaysSection/CustomersSaysSection";
import ProductsSection from "../ProductsSection/ProductsSection";
const MainContent = () => {
    return (
        <main>
            <BannersSection />
            <CustomersSaysSection />
            <BestOffersSection />
            <BestOffersSection />
            <ProductsSection />
        </main>

    );
};

export default MainContent;