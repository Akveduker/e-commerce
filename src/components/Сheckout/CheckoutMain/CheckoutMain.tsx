import { useFindAndFixStep } from '../../../hooks/checkout/useFindAndFixStep';
import OrderShowcaseStep from '../OrderShowcaseStep/OrderShowcaseStep';
import PersonalDataStep from '../PersonalDataStep/PersonalDataStep';
import s from './CheckoutMain.module.scss'
const CheckoutMain = () => {
    const stepsArray = [
        <OrderShowcaseStep />,
        <PersonalDataStep />,
    ]
    const step = useFindAndFixStep(stepsArray.length)
    const currentItem = stepsArray.find((item, index) => {
        return index === step - 1
    })
    return (
        <div className={s['container']}>
            {currentItem}
        </div>
    );
};

export default CheckoutMain;