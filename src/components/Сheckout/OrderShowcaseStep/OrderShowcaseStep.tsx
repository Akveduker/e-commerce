
import { useState } from 'react';
import CardContextProvider from '../../../context/card/SmallCardContext';
import { useCheckoutChangeStep } from '../../../hooks/checkout/useCheckoutChangeStep';
import { useAppSelector } from '../../../store/store';
import { IOrder } from '../../../types/order/order';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import ArrowRight from '../../../ui/icons/ArrowRight/ArrowRight';
import { getCartFromStore } from '../../../utils/store/cart/getCartFromStore';
import CardSmall from '../../General/ProductsCard/CardSmall/CardSmall';
import s from './OrderShowcaseStep.module.scss'
const OrderShowcaseStep = () => {
    const { productsIds } = useAppSelector(getCartFromStore)
    const [fullPrice, setFullPrice] = useState(0)
    const changeStep = useCheckoutChangeStep()
    const onClick = () => {
        const order: IOrder = {
            personalInfo: null,
            addressInfo: null,
            orderInfo: productsIds,
            orderId: window.crypto.randomUUID()
        }
        localStorage.setItem('order', JSON.stringify(order))
        changeStep(2)
    }
    if (!productsIds.length) return <div className={s['empty']}> <h1>Ваша корзина пуста</h1> </div>
    return (
        <div >
            <h2 className={s['title']}>Ваш заказ</h2>
            <div className={s['cart']}>
                <div className={`${s['block']} ${s['cart__wrapper']}`}>
                    <div className={s['products']}>
                        {productsIds.map(item => {
                            return (
                                <div key={item.itemId} >
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
                </div>
                <div className={`${s['block']} ${s['continue']}`}>
                    <h2>Заказ</h2>
                    <div className={s['price']}>
                        <p>Итого:</p>
                        <p> {fullPrice} USD</p>
                    </div>
                    <div className={s['button']}>
                        <ButtonWithBorder styleType={'full-width'} onClick={onClick}>
                            Дальше
                            <ArrowRight />
                        </ButtonWithBorder>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default OrderShowcaseStep;