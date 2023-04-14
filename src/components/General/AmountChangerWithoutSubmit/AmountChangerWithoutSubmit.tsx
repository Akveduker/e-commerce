import { FC, useEffect, useState } from 'react';
import { STATUS_LOADING } from '../../../data/status/status';
import { useUpdateCart } from '../../../hooks/Cart/useUpdateCart';
import { ICartItem } from '../../../types/Cart/cart';
import AmountChanger from '../../../ui/features/AmountChanger/AmountChanger';
import { addItemInCartFc } from '../../../utils/store/cart/reducer/addItemInCart/addItemInCartFc';
import BlurWithLoader from '../BlurWithLoader/BlurWithLoader';
interface AmountChangerWithoutSubmitProps {
    amount: number
    addToCart: (amount: number) => void
}
const AmountChangerWithoutSubmit: FC<AmountChangerWithoutSubmitProps> = ({ amount, addToCart }) => {
    const [currentValue, setCurrentValue] = useState(amount)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    useEffect(() => {
        if (timeoutId) clearInterval(timeoutId)
        if (amount !== currentValue) setTimeoutId(setTimeout(() => addToCart(currentValue), 500))
    }, [currentValue])
    return (
        <div>

            <AmountChanger
                isSmall
                amount={amount}
                setAmount={setCurrentValue}
            />

        </div>
    );
};

export default AmountChangerWithoutSubmit;