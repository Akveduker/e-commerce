import React, { FC, memo, useEffect, useLayoutEffect, useState } from 'react';
import { onlyNumbersInput } from '../../../utils/filters/onlyNumbersInput/onlyNumbersInput';
import s from './AmountChanger.module.scss'
interface AmountChangerProps {
    isSmall?: boolean;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    amount: number;
}
const AmountChanger: FC<AmountChangerProps> = ({ isSmall, setAmount, amount }) => {
    const className = isSmall ? `${s['container']} ${s['container__small']}` : s['container']
    const [value, setValue] = useState(amount)
    useLayoutEffect(() => {
        setValue(amount)
    }, [amount])
    useEffect(() => {
        if (value > 0 && value !== amount) setAmount(value)
    }, [value])
    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        if (onlyNumbersInput(inputValue)) {
            +inputValue <= 0 ? setValue(0) : setValue(+inputValue)
        }
    }
    const inputOnBlur = () => {
        +value <= 1 ? setValue(1) : setValue(+value)
    }
    const buttonChangeMinus = () => {
        value - 1 <= 1 ? setValue(1) : setValue(value - 1)
    }
    return (
        <div className={className}>
            <button onClick={() => setValue(value + 1)} className={s['button']} data-testid={'plus'}>
                +
            </button>
            <input type="text" value={value} className={s['input']} onChange={inputOnChange} onBlur={inputOnBlur} data-testid={'input'} />
            <button onClick={buttonChangeMinus} className={s['button']} data-testid={'minus'}>
                -
            </button>
        </div>
    );
};

export default memo(AmountChanger);