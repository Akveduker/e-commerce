import React, { FC } from 'react';
import { PersonalDataKeys } from '../../../types/checkout/personal/personal';
import { IInputValidationActions, ValidationScheme } from '../../../types/IInputValidation/InputValidation';
import DefaultInputWithValidators from '../../../ui/inputs/FormInputs/DefaultInputWithValidators/DefaultInputWithValidators';
import PhoneInput from '../../../ui/inputs/FormInputs/PhoneInput/PhoneInput';
import s from './PersonalDataPersonInputs.module.scss'
interface PersonalDataPersonInputsProps {
    personalState: ValidationScheme<PersonalDataKeys>;
    dispatch: React.Dispatch<IInputValidationActions<PersonalDataKeys>>
}
const PersonalDataPersonInputs: FC<PersonalDataPersonInputsProps> = ({ personalState, dispatch }) => {
    return (
        <div className={s['container']}>
            <div className={s['item']}>
                <div className={s['item__input']}>
                    <DefaultInputWithValidators
                        inputTitle='Имя'
                        errorTitle='Имя'
                        dataItemState={personalState.firstName}
                        dispatch={dispatch}
                        stateItemKey={'firstName'}
                    />
                </div>
                <div className={s['item__input']}>
                    <DefaultInputWithValidators
                        inputTitle='Фамилия'
                        errorTitle='Фамилия'
                        dataItemState={personalState.secondName}
                        dispatch={dispatch}
                        stateItemKey={'secondName'}
                    />
                </div>
            </div>
            <div className={s['item']}>
                <div className={s['item__input']}>
                    <DefaultInputWithValidators
                        inputTitle='Электронная почта'
                        errorTitle='Электронная почта'
                        dataItemState={personalState.email}
                        dispatch={dispatch}
                        stateItemKey={'email'}
                    />

                </div>
                <div className={s['item__input']}>
                    <PhoneInput
                        inputTitle='Телефон'
                        errorTitle='Телефон'
                        dataItemState={personalState.phone}
                        dispatch={dispatch}
                        stateItemKey={'phone'}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalDataPersonInputs;