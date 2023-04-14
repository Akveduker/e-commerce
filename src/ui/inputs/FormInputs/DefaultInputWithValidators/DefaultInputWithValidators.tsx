import _ from 'lodash';
import { useInputsStateChangers } from '../../../../hooks/form/useInputsStateChangers';
import { FormDefaultInput } from '../../../../types/formInput/formInput';
import InputWithValidators from '../parts/InputWithValidators/InputWithValidators';
const DefaultInputWithValidators = <S extends string[]>(props: FormDefaultInput<S>) => {
    const { dataItemState, inputTitle, errorTitle, dispatch, stateItemKey, ...rest } = props
    const { status, value, errorBody } = dataItemState
    const [onChange, onBlur] = useInputsStateChangers<S>(_.pick(props, ['dispatch', 'stateItemKey', 'dataItemState']), value)
    return (
        <InputWithValidators
            inputTitle={inputTitle}
            errorTitle={errorTitle}
            status={status}
            errorBody={errorBody}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
        />
    )
};

export default DefaultInputWithValidators;