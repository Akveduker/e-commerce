import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardContextProvider from '../../../context/card/SmallCardContext';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import { getCartFromStore } from '../../../utils/store/cart/getCartFromStore';
import CardSmall from '../../General/ProductsCard/CardSmall/CardSmall';
import s from './UserCartBody.module.scss'
const UserCartBody = () => {
    const productsIds = useAppSelector(getCartFromStore).productsIds
    const [fullPrice, setFullPrice] = useState(0)
    useEffect(() => {
        if (!productsIds.length) setFullPrice(0)
    })
    return (
        <div className={s['cart']}>
            <h2 className={s['title']}>Корзина</h2>
            <div className={s['products']}>
                {productsIds.map(item => {
                    return (
                        <div key={item.itemId} className={s['products__item']}>
                            <CardContextProvider
                                id={+item.itemId}
                                amount={item.amount}
                                setFullPrice={setFullPrice}
                            >
                                <CardSmall />
                            </CardContextProvider>
                        </div>
                    )
                })}
            </div>
            <div className={s['full-price']}>
                <p className={s['full-price__text']}>Сумма</p>
                <h2 className={s['full-price__price']}>{`${fullPrice} USD`}</h2>
            </div>
            <div className={s['checkout']}>
                <div className={s['checkout__wrapper']}>
                    <p className={s['checkout__continue']}>Продолжить покупки</p>
                    <Link to={`${roots.main}${roots.chekout}`} className={s['checkout__link']}>
                        К оплате
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCartBody;