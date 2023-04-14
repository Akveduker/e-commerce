import React, { forwardRef } from 'react';
import s from '../DefaultInput.module.scss'
const InputForDatePicker = forwardRef((props: any, ref) => {
    return <input {...props} ref={ref} className={s['input']} />;
})

export default InputForDatePicker;