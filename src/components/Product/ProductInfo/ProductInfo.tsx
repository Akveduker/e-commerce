import { isMobile, MobileView } from 'react-device-detect';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import ProductPriceProvider from '../../../context/product/ProductPriceProvider/ProductPriceProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import StarRating from '../../../ui/features/StarRating/StarRating';
import ProductImagesMobile from '../ProductImagesMobile/ProductImagesMobile';
import ProductParams from '../ProductParams/ProductParams';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductSwitches from '../ProductSwitches/ProductSwitches';
import s from './ProductInfo.module.scss'
const ProductInfo = () => {
    const { title, description, rate } = useNotNullContext(ProductPageContext)
    const pageClass = isMobile ? `${s['page']} ${s['page--mobile']}` : s['page']
    return (
        <div className={pageClass}>
            <h1 className={s['title']}>{title}</h1>
            <div className={s['rating']}>
                <StarRating
                    yellow
                    rate={rate}
                />
            </div>
            <MobileView className={s['slider']}>
                <ProductImagesMobile />
            </MobileView>
            <p className={s['description']}>{description}</p>
            <div className={s['params']}>
                <ProductParams />
            </div>
            <div className={s['price']}>
                <ProductPriceProvider>
                    <ProductPrice />
                </ProductPriceProvider>
            </div>

            <ProductSwitches />
        </div>
    );
};

export default ProductInfo;