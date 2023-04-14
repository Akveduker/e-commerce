import { FC } from 'react';
import InputMask from 'react-input-mask';
import { Props } from 'react-input-mask';
import { DefaultInputProps } from '../../../types/formInput/formInput';
import { mergeClassNames } from '../../../utils/class/mergeClassNames/mergeClassNames';
import s from './DefaultInput.module.scss'
const DefaultInput: FC<DefaultInputProps> = ({ childrenClassName, labelClassName, children, inputType, ...inputProps }) => {
    const childrenClass = mergeClassNames(s['with-children__children'], childrenClassName)
    const labelClass = mergeClassNames(s['with-children'], labelClassName)
    if (children) {
        return (
            <label className={labelClass} data-testid={'label'}>
                {inputType === 'mask' ?
                    <InputMask
                        className={s['with-children__input']}
                        {...inputProps as Props}
                    />
                    :
                    <input  {...inputProps as React.HTMLProps<HTMLInputElement>} className={s['with-children__input']} data-testid={'default'} />
                }
                <div className={childrenClass}>
                    {children}
                </div>
            </label>
        )
    }
    return (
        inputType === 'mask' ?
            <InputMask
                {...inputProps as Props}
                className={s['input']}
            />
            :
            <input  {...inputProps as React.HTMLProps<HTMLInputElement>} className={s['input']} data-testid={'default'} />

    );
};

export default DefaultInput;