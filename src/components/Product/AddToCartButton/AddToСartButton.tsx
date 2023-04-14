import { FC } from 'react';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { ProductPriceContext } from '../../../context/product/ProductPriceProvider/ProductPriceProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import { useCheckItemInCart } from '../../../hooks/product/useCheckItemInCart';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import PlusIcon from '../../../ui/icons/PlusIcon/PlusIcon';
import s from './AddTocartButton.module.scss'

const AddToСartButton: FC = () => {
    const id = useNotNullContext(ProductPageContext).id
    const addFc = useNotNullContext(ProductPriceContext).addFc
    const [isInCart] = useCheckItemInCart(id)
    const onClick = () => {
        addFc(1)
    }
    return (
        <>
            {isInCart ?
                <ButtonWithBorder styleType='big' type='button' className={s['button']} disabled >
                    В корзине
                </ButtonWithBorder>
                :
                <ButtonWithBorder styleType='big' type='button' className={s['button']} onClick={onClick}>
                    <PlusIcon />
                    Добавить в корзину
                </ButtonWithBorder>

            }
        </>
    );
};

export default AddToСartButton;