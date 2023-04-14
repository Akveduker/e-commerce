import { isMobile } from 'react-device-detect';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { ProductPriceContext } from '../../../context/product/ProductPriceProvider/ProductPriceProvider';
import { STATUS_LOADING } from '../../../data/status/status';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import { useCheckItemInCart } from '../../../hooks/product/useCheckItemInCart';
import CardPrice from '../../../ui/features/CardPrice/CardPrice';
import AddToСartButton from '../AddToCartButton/AddToСartButton';
import AmountChangerWithoutSubmit from '../../General/AmountChangerWithoutSubmit/AmountChangerWithoutSubmit';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import ErrorHandler from '../../General/ErrorHandler/ErrorHandler';
import s from './ProductPrice.module.scss'
const ProductPrice = () => {
    const { price, discount, id } = useNotNullContext(ProductPageContext)
    const containerClass = isMobile ? `${s['container']} ${s['container--mobile']}` : s['container']
    const [isInCart, cart] = useCheckItemInCart(id)
    const { addFc, addStatus } = useNotNullContext(ProductPriceContext)
    return (
        <BlurWithLoader
            condition={addStatus.type === STATUS_LOADING}
        >

            <ErrorHandler
                errors={[addStatus]}
            >
                <div className={containerClass}>
                    <div className={s['price']}>
                        <CardPrice
                            isGreen
                            isProductPage
                            price={price}
                            discount={discount}
                        />
                    </div>
                    {isInCart &&
                        <div className={s['amount']}>
                            <AmountChangerWithoutSubmit
                                addToCart={addFc}
                                amount={cart.amount}
                            />
                        </div>
                    }
                    <AddToСartButton
                    />
                </div>

            </ErrorHandler>
        </BlurWithLoader>
    );
};

export default ProductPrice;