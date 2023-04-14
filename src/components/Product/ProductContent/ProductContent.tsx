import ProductImages from '../ProductImages/ProductImages';
import s from './ProductContent.module.scss'
import ProductInfo from '../ProductInfo/ProductInfo';

const ProductContent = () => {
    return (
        <div className={s['page']}>
            <ProductImages />
            <ProductInfo />
        </div>
    );
};

export default ProductContent;