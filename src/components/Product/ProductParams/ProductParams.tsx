import { isMobile } from 'react-device-detect';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import s from './ProductParams.module.scss'
const ProductParams = () => {
    const params = useNotNullContext(ProductPageContext).params
    if (isMobile) return (
        <ul className={s['list']}>
            {params.map(param => {
                return (
                    <li key={param.title} className={s['item']}>
                        <span className={s['title']}>{param.title}</span>
                        <span className={s['description']}>{param.description}</span>
                    </li>
                )
            })}
        </ul>
    )
    const point = Math.round(params.length / 2);
    const list1 = params.slice(point)
    const list2 = params.slice(0, point)
    return (
        <div className={s['container']}>
            <ul className={s['list']}>
                {list1.map(param => {
                    return (
                        <li key={param.title} className={s['item']}>
                            <span className={s['title']}>{param.title}</span>
                            <span className={s['description']}>{param.description}</span>
                        </li>
                    )
                })}
            </ul>
            <ul className={s['list']}>
                {list2.map(param => {
                    return (
                        <li key={param.title} className={s['item']}>
                            <span className={s['title']}>{param.title}</span>
                            <span className={s['description']}>{param.description}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ProductParams;