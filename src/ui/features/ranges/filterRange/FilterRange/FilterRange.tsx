import { FC, memo, useEffect } from 'react';
import Range, { SliderProps } from 'rc-slider';
import s from './FilterRange.module.scss'
import 'rc-slider/assets/index.css';
import { styles } from './styles';
import { RangeContext } from '../../../../../context/categories/range/RangeContext';
import { useChangeSliderValue } from '../../../../../hooks/categories/filters/ranges/useChangeSliderValue';
import { useCreateRangeContext } from '../../../../../hooks/categories/filters/ranges/useCreateRangeContext';
import { useAppSelector } from '../../../../../store/store';
import { stringFirstLetterUppercase } from '../../../../../utils/general/stringFirstLetterUppercase';
import FilterRangeInput from '../FilterRangeInput/FilterRangeInput';
import { IFilterRange, RangeNames } from '../../../../../types/filter/range/range';
import { useParams } from 'react-router-dom';
interface FilterSliderPropst extends SliderProps {
    name: RangeNames,
}
const FilterRange: FC<FilterSliderPropst> = ({ name, ...props }) => {
    const range = useAppSelector(state => state.filters.ranges.find(range => range.name === name)) as IFilterRange
    const [context, dispatch] = useCreateRangeContext(range)
    const { defaultValues, step } = range
    const { min, max } = defaultValues;
    const title = stringFirstLetterUppercase(name)
    const onChangeSlider = useChangeSliderValue(context, dispatch)
    const { id } = useParams()
    useEffect(() => {
        dispatch({ type: 'setBoth', payload: [min, max] })
    }, [id])
    return (
        <RangeContext.Provider value={[context, dispatch]}>
            <div className={s['container']}>
                <h2 className={s['title']}>{title}</h2>
                <Range
                    {...props}
                    min={min}
                    max={max}
                    defaultValue={[min, max]}
                    step={step}
                    range
                    {...styles}
                    value={[context.currentValues.min, context.currentValues.max]}
                    onChange={onChangeSlider}

                />
                <div className={s['inputs']}>
                    <div className={s['label']}>
                        <FilterRangeInput
                            title={'min'}
                            maxLength={3}
                            inputKey={'min'}
                        />
                    </div>
                    <span className={s['line']}>-</span>
                    <div className={s['label']}>
                        <FilterRangeInput
                            title={'max'}
                            maxLength={3}
                            inputKey={'max'}
                        />
                    </div>
                </div>
            </div>
        </RangeContext.Provider>
    );
};

export default memo(FilterRange);
