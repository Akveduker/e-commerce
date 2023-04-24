import { FC } from 'react';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import StarRating from '../../../ui/features/StarRating/StarRating';
import s from './ProductReviews.module.scss'
const ProductReviews: FC = () => {
    const reviews = useNotNullContext(ProductPageContext).reviews
    return (
        <div>
            {reviews.map(review => {
                return (
                    <div key={review.creatorName} className={s['review']}>
                        <div className={s['review__user']}>
                            <span className={s['review__icon']}></span>
                            {review.creatorName}
                        </div>
                        <StarRating
                            rate={review.rate}
                            yellow
                        />
                        <p className={s['review__body']}>{review.body}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductReviews;