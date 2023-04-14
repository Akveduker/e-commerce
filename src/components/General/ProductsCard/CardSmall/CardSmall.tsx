import { FC, memo } from 'react';
import img from '../../../../assets/img/product-img-100-67.jpg'
import CardPrice from '../../../../ui/features/CardPrice/CardPrice';
import CartRemove from '../../../Cart/CartRemove/CartRemove';
import AmountChangerWithoutSubmit from '../../AmountChangerWithoutSubmit/AmountChangerWithoutSubmit';
import BlurWithLoader from '../../BlurWithLoader/BlurWithLoader';
import s from './CardSmall.module.scss'
import ErrorHandler from '../../ErrorHandler/ErrorHandler';
import { STATUS_LOADING } from '../../../../data/status/status';
import { useNotNullContext } from '../../../../hooks/context/useNotNullContext';
import { SmallCardContext } from '../../../../context/card/SmallCardContext';
const CardSmall: FC = () => {
    let { price, discount, amount, description, title, removeStatus, addFc, addStatus } = useNotNullContext(SmallCardContext)
    price = price * amount
    if (discount) {
        discount = { ...discount, newPrice: amount * discount.newPrice }
    }
    return (
        <ErrorHandler
            errors={[removeStatus, addStatus]}
        >
            <BlurWithLoader
                condition={removeStatus.type === STATUS_LOADING || addStatus.type === STATUS_LOADING}
            >
                <div className={s['card']}>
                    <div className={s['control']}>
                        <div className={s['img']}>
                            <img src={img} alt={title} />
                        </div>
                        <CartRemove />
                    </div>
                    <div className={s['content']}>
                        <h4 className={s['content__title']}>{title}</h4>
                        <p>
                            {description}
                        </p>
                        <div className={s['price']}>
                            <CardPrice
                                price={price}
                                discount={discount}
                                isGreen
                            />
                            <div className={s['amount']}>
                                <AmountChangerWithoutSubmit
                                    amount={amount}
                                    addToCart={addFc}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BlurWithLoader>

        </ErrorHandler>
    );
};

export default memo(CardSmall);