
import { BrowserView, isMobile } from 'react-device-detect';
import GreenTag from '../../../ui/items/GreenTag/GreenTag';
import s from './ProductImages.module.scss'
import image from '../../../assets/img/prouct-img-page.jpg'
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
const ProductImages = () => {
    const { discount, title } = useNotNullContext(ProductPageContext)
    if (isMobile) return null
    return (

        <BrowserView className={s['container']}>
            <div className={`${s['img']} ${s['img__percent']}`}>
                <img src={image} alt={title} />
                <div className={s['percent__item']}>
                    {discount ?
                        <GreenTag >
                            - {discount.percent}%
                        </GreenTag>
                        :
                        null
                    }
                </div>
            </div>
            <div className={s['img']}>
                <img src={image} alt={title} />
            </div>
            <div className={s['img']}>
                <img src={image} alt={title} />
            </div>
        </BrowserView>

    );
};

export default ProductImages;