import React, { FC, memo } from 'react';
import { RangeContext } from '../../../../../context/categories/range/RangeContext';
import { useNotNullContext } from '../../../../../hooks/context/useNotNullContext';
import { useSetRangeSearchParams } from '../../../../../hooks/categories/filters/ranges/useSetRangeSearchParams';
import { FilterRange } from '../../../../../types/filter/range/range';
import { onlyNumbersInput } from '../../../../../utils/filters/onlyNumbersInput/onlyNumbersInput';
import { rangeInputCheckForValue } from '../../../../../utils/filters/rangeInputCheckForValue/rangeInputCheckForValue';

import s from './FilterRangeInput.module.scss'
interface FilterRangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
    maxLength: number;
    inputKey: keyof FilterRange<number>;
}
const FilterRangeInput: FC<FilterRangeInputProps> = ({ title, maxLength, inputKey, ...props }) => {
    const [context, dispatch] = useNotNullContext(RangeContext)
    const { currentValues, defaultValues } = context
    const setRangeParams = useSetRangeSearchParams(context)
    const onBlur = () => {
        context.dispatchFunc()
        setRangeParams()
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        if (!onlyNumbersInput(value)) return
        if (+value < defaultValues.min || +value > defaultValues.max) value = defaultValues[inputKey].toString()
        let finalValue = rangeInputCheckForValue(+value, currentValues, inputKey);
        dispatch({
            type: 'setBoth',
            payload: [finalValue.min, finalValue.max]
        })
    }
    return (
        <label>
            <h4 className={s['title']}>{title}</h4>
            <input type="text" className={s['input']}
                maxLength={maxLength}
                onBlur={onBlur}
                onChange={(e) => onChangeInput(e)}
                value={currentValues[inputKey]}
                {...props}
            />
        </label>
    );
};

export default memo(FilterRangeInput);