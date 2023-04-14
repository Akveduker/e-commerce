import _ from 'lodash';
import { FC, useEffect } from 'react';
import { STATUS_DONE, STATUS_ERROR, STATUS_LOADING } from '../../../data/status/status';
import { useCreateAddressState } from '../../../hooks/address/useCreateAddressState';
import { useAddAddressAndPersonalToLocal } from '../../../hooks/checkout/personal/useAddAddressAndPersonalToLocal';
import { useCreateValidationInputState } from '../../../hooks/form/input/useCreateValidationInputState';
import { useCreateValidatorsState } from '../../../hooks/form/input/useCreateValidatorsState';
import { useValidateFormData } from '../../../hooks/form/useValidateFormData';
import { useAppSelector } from '../../../store/store';
import { IPersonalProps, PersonalDataKeys } from '../../../types/checkout/personal/personal';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import { formValueObjFromFormObj } from '../../../utils/forms/formValueObjFromFormObj/formValueObjFromFormObj';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import { emailFullTest } from '../../../utils/testInput/emailFullTest/emailFullTest';
import { nameFullTest } from '../../../utils/testInput/nameFullTest/nameFullTest';
import { phoneFullTest } from '../../../utils/testInput/phoneFullTest/phoneFullTest';
import AddressBuilderInputs from '../../General/AddressBook/AddressBuilderInputs/AddressBuilderInputs';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import ErrorHandler from '../../General/ErrorHandler/ErrorHandler';
import PersonalDataPersonInputs from '../PersonalDataPersonInputs/PersonalDataPersonInputs';
import s from './PersonalDataNoAddress.module.scss'
const PersonalDataNoAddress: FC<IPersonalProps> = ({ setIsDone }) => {
    const personalKeys: PersonalDataKeys = ['firstName', 'secondName', 'email', 'phone']
    const validatorsObjPersonal = useCreateValidatorsState(
        personalKeys,
        [nameFullTest, nameFullTest, emailFullTest, phoneFullTest],
        _.pick(useAppSelector(getUserDataFromStore), personalKeys)
    )
    const [personalState, dispatchPersonal] = useCreateValidationInputState(validatorsObjPersonal)
    const [validatePersonal, personalStatus] = useValidateFormData(personalState, dispatchPersonal)


    const [addressState, dispatchAddress] = useCreateAddressState()
    const [validateAddress, addressStatus] = useValidateFormData(addressState, dispatchAddress)

    const addDataToOrder = useAddAddressAndPersonalToLocal()
    useEffect(() => {
        if (personalStatus === STATUS_DONE && addressStatus === STATUS_DONE) {
            addDataToOrder(formValueObjFromFormObj(addressState), formValueObjFromFormObj(personalState))
            setIsDone(true)
        }
    }, [personalStatus, addressStatus])
    return (
        <BlurWithLoader
            condition={personalStatus === STATUS_LOADING || addressStatus === STATUS_LOADING}
        >

            <div>
                <form onSubmit={(e) => {
                    validatePersonal(e)
                    validateAddress(e)
                }}>
                    <ErrorHandler
                        errors={[{ type: personalStatus, body: 'Проверьте корректность персональных данных' }]}
                    >
                        <h2 className={s['title']}>Персональные данные</h2>
                        <PersonalDataPersonInputs
                            personalState={personalState}
                            dispatch={dispatchPersonal}
                        />
                    </ErrorHandler>
                    <ErrorHandler
                        errors={[{ type: addressStatus, body: 'Проверьте корректность адреса' }]}

                    >
                        <h2 className={s['title']}>Адрес</h2>
                        <AddressBuilderInputs
                            addressState={addressState}
                            dispatch={dispatchAddress}
                        />
                    </ErrorHandler>
                    <div className={s['button']}>
                        <ButtonWithBorder
                            styleType='medium'
                        >
                            Купить
                        </ButtonWithBorder>
                    </div>
                </form>
            </div>
        </BlurWithLoader>
    );
};

export default PersonalDataNoAddress;