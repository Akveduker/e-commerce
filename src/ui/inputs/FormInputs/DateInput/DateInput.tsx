import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useInputsStateChangers } from "../../../../hooks/form/useInputsStateChangers";
import InputName from "../parts/InputName/InputName";
import InputValidationError from '../parts/InputValidationError/InputValidationError';
import InputValidationOk from '../parts/InputValidationOk/InputValidationOk';
import s from './DateInput.module.scss'
import { IFormInputProps } from "../../../../types/formInput/formInput";
import InputForDatePicker from "../../DefaultInput/InputForDatePicker/InputForDatePicker";
const DateInput = <T extends string[]>(props: IFormInputProps<T>) => {
    const { dataItemState, stateItemKey, dispatch } = props
    const { status, value, errorBody } = dataItemState;
    const initialDate = value ? new Date(+value) : null
    const [_, onBlur] = useInputsStateChangers(props, value)
    const onChange = (date: Date | null) => {
        if (!date) return
        dispatch({ type: 'setValue', payload: { key: stateItemKey, value: Date.parse(date.toDateString()).toString() } })
    }
    return (
        <label>
            <InputName inputName="Дата рождения" />
            <div className={s['container']}>
                <DatePicker
                    selected={value ? new Date(+value) : null}
                    startDate={initialDate}
                    onChange={onChange}
                    maxDate={new Date()}
                    customInput={<InputForDatePicker />}
                    onBlur={onBlur}
                />
                <div className={s['ok']}>
                    <InputValidationOk
                        status={status}
                    />
                </div>
            </div>
            <InputValidationError
                status={status}
                errorBody={`Дата ${errorBody}`}
            />
        </label>

    );
};

export default DateInput;