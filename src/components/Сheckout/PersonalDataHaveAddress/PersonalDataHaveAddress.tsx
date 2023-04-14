import _ from 'lodash';
import { FC, useEffect } from 'react';
import { STATUS_DONE, STATUS_LOADING } from '../../../data/status/status';
import { useAddAddressAndPersonalToLocal } from '../../../hooks/checkout/personal/useAddAddressAndPersonalToLocal';
import { useCreateValidationInputState } from '../../../hooks/form/input/useCreateValidationInputState';
import { useCreateValidatorsState } from '../../../hooks/form/input/useCreateValidatorsState';
import { useValidateFormData } from '../../../hooks/form/useValidateFormData';
import { useAppSelector } from '../../../store/store';
import { IPersonalProps, PersonalDataKeys } from '../../../types/checkout/personal/personal';
import { IAddressItem } from '../../../types/User/User';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import { formValueObjFromFormObj } from '../../../utils/forms/formValueObjFromFormObj/formValueObjFromFormObj';
import { findActiveAddress } from '../../../utils/store/user/address/findActiveAddress/findActiveAddress';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import { emailFullTest } from '../../../utils/testInput/emailFullTest/emailFullTest';
import { nameFullTest } from '../../../utils/testInput/nameFullTest/nameFullTest';
import { phoneFullTest } from '../../../utils/testInput/phoneFullTest/phoneFullTest';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import ErrorMessage from '../../General/ErrorHandler/ErrorHandler';
import PersonalDataAddress from '../PersonalDataAddress/PersonalDataAddress';
import PersonalDataPersonInputs from '../PersonalDataPersonInputs/PersonalDataPersonInputs';
import s from './PersonalDataHaveAddress.module.scss'
const PersonalDataHaveAddress: FC<IPersonalProps> = ({ setIsDone }) => {
    const personalKeys: PersonalDataKeys = ['firstName', 'secondName', 'email', 'phone']
    const validatorsObj = useCreateValidatorsState(
        personalKeys,
        [nameFullTest, nameFullTest, emailFullTest, phoneFullTest],
        _.pick(useAppSelector(getUserDataFromStore), personalKeys)
    )
    const [personalState, dispatch] = useCreateValidationInputState(validatorsObj)
    const [validate, status] = useValidateFormData(personalState, dispatch)
    const activeAddress = findActiveAddress(useAppSelector(getUserDataFromStore).addressBook) as IAddressItem
    const addDataToOrder = useAddAddressAndPersonalToLocal()
    useEffect(() => {
        if (status === STATUS_DONE) {
            addDataToOrder(activeAddress.address, formValueObjFromFormObj(personalState))
            setIsDone(true)
        }
    }, [status])
    return (
        <BlurWithLoader
            condition={status === STATUS_LOADING}
        >
            <ErrorMessage
                errors={[{ type: status, body: 'Проверьте корректность заполнения полей' }]}
            >
                <div className={s['container']}>
                    <h2 className={s['title']}>Персональные данные</h2>
                    <form className={s['form']} onSubmit={validate}>
                        <PersonalDataPersonInputs
                            personalState={personalState}
                            dispatch={dispatch}
                        />
                        <button className={s['fake-submit']}></button>
                    </form>
                    <PersonalDataAddress />
                    <div className={s['button']}>
                        <ButtonWithBorder
                            styleType='medium'
                            onClick={() => { validate() }}
                        >
                            Купить
                        </ButtonWithBorder>
                    </div>
                </div>
            </ErrorMessage>
        </BlurWithLoader>

    );
};

export default PersonalDataHaveAddress;