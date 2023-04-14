import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClearCart } from '../../../hooks/Cart/useClearCart';
import { useSetModalState } from '../../../hooks/modal/useSetModalState';
import { roots } from '../../../router/routes/routes';
import Modal from '../../Popup/Modal/Modal';
import s from './CheckoutBuy.module.scss'
interface CheckoutBuyProps {
    isOpen: boolean;
}
const CheckoutBuy: FC<CheckoutBuyProps> = ({ isOpen }) => {
    const [_, closeModal] = useSetModalState()
    const clearCart = useClearCart()
    const navigate = useNavigate()
    const close = () => {
        closeModal()
        navigate(`/${roots.main}`)
        clearCart()
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                closeModal={close}
            >
                <div className={s['block']}>
                    <h2>Спасибо за покупку</h2>
                </div>
            </Modal>
        </>
    );
};

export default CheckoutBuy;