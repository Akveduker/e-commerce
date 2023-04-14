import React, { FC, useContext, useState } from 'react';
import { CheckboxContext } from '../../../context/categories/checkbox/CheckboxProvider';
import { useCheckboxDispatch } from '../../../hooks/categories/filters/checkbox/useCheckboxDispatch';
import { useAppSelector } from '../../../store/store';
import s from './CategoriesCheckbox.module.scss'
interface CategoriesCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checkId: number;
}
const CategoriesCheckbox: FC<Omit<CategoriesCheckboxProps, 'type' | 'className' | 'checked'>> = ({ checkId }, props) => {
    const name = useContext(CheckboxContext)
    const currentItem = useAppSelector(state => state.filters.checkboxes.find(checbox => checbox.name === name))
    let status = currentItem?.activeIdArr.includes(checkId) ? true : false
    const [value, setValue] = useState(status)
    const [checkedTrue, checkedFalse] = useCheckboxDispatch(checkId)
    const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        setValue(checked)
        checked ?
            checkedTrue()
            :
            checkedFalse()
    }
    return (
        <label className={value ? `${s['label']} ${s['label--active']}` : s['label']} data-testid={'label'}>
            <input type="checkbox" className={s['checkbox']} onChange={checkboxChange} checked={value} {...props} />
            <span className={s['fake-checkbox']}></span>
        </label>
    );
};

export default CategoriesCheckbox;