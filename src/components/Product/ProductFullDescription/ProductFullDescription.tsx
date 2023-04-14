import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import s from './ProductFullDescription.module.scss'
const ProductFullDescription = () => {
    const description = useNotNullContext(ProductPageContext).fullDescription
    return (
        <div>
            {description.map(text => {
                return (
                    <div className={s['text']} key={text.title}>
                        <h4 className={s['title']}>{text.title}</h4>
                        <p className={s['description']}>{text.body}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductFullDescription;