import _ from 'lodash';
import { useEffect } from 'react';
import { STATUS_DONE, STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../../../data/status/status';
import { useSendProfileData } from '../../../hooks/fetch/DashboardProfile/useSendProfileData';
import { useCreateValidationInputState } from '../../../hooks/form/input/useCreateValidationInputState';
import { useCreateValidatorsState } from '../../../hooks/form/input/useCreateValidatorsState';
import { useValidateFormData } from '../../../hooks/form/useValidateFormData';
import { useAppSelector } from '../../../store/store';
import { IDashboardProfileKeysArr } from '../../../types/DashboardProfile/dashboardProfile';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import DateInput from '../../../ui/inputs/FormInputs/DateInput/DateInput';
import DefaultInputWithValidators from '../../../ui/inputs/FormInputs/DefaultInputWithValidators/DefaultInputWithValidators';
import PhoneInput from '../../../ui/inputs/FormInputs/PhoneInput/PhoneInput';
import { formValueObjFromFormObj } from '../../../utils/forms/formValueObjFromFormObj/formValueObjFromFormObj';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import { dateFullTest } from '../../../utils/testInput/dateFullTest/dateFullTest';
import { nameFullTest } from '../../../utils/testInput/nameFullTest/nameFullTest';
import { phoneFullTest } from '../../../utils/testInput/phoneFullTest/phoneFullTest';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import ErrorHandler from '../../General/ErrorHandler/ErrorHandler';
import s from './DashboardProfile.module.scss'
const DashboardProfile = () => {
    const keysArr: IDashboardProfileKeysArr = ['firstName', 'secondName', 'birthDate', 'phone']
    const user = _.pick(useAppSelector(getUserDataFromStore), keysArr)
    const stateObj = useCreateValidatorsState(keysArr, [nameFullTest, nameFullTest, dateFullTest, phoneFullTest], user)
    const [profileData, stateDispatch] = useCreateValidationInputState(stateObj)
    const [validate, status, setStatus] = useValidateFormData(profileData, stateDispatch)
    const { status: userPersonalFetchStatus, fetchWithBody } = useSendProfileData()
    useEffect(() => {
        if (status === STATUS_DONE) {
            setStatus(STATUS_IDLE)
            fetchWithBody(formValueObjFromFormObj(profileData))
        }
    }, [status])
    return (
        <div className={s['container']}>
            <BlurWithLoader
                condition={userPersonalFetchStatus.type === STATUS_LOADING}
            >
                <ErrorHandler
                    errors={[userPersonalFetchStatus]}
                >
                    <h2>Мой профиль</h2>
                    <form className={s['information']} onSubmit={validate}>
                        <h3 className={s['information__title']}>Персональная информация</h3>
                        <div>
                            <DefaultInputWithValidators
                                inputTitle='Имя'
                                errorTitle='Имя'
                                dataItemState={profileData.firstName}
                                dispatch={stateDispatch}
                                stateItemKey={'firstName'}
                            />
                            <DefaultInputWithValidators
                                inputTitle='Фамилия'
                                errorTitle='Фамилия'
                                dataItemState={profileData.secondName}
                                dispatch={stateDispatch}
                                stateItemKey={'secondName'}
                            />
                            <DateInput
                                dataItemState={profileData.birthDate}
                                dispatch={stateDispatch}
                                stateItemKey={'birthDate'}
                            />

                            <PhoneInput
                                inputTitle='Телефон'
                                errorTitle='Телефон'
                                dataItemState={profileData.phone}
                                dispatch={stateDispatch}
                                stateItemKey={'phone'}
                            />
                        </div>
                        <div className={s['submit']}>
                            <ButtonWithBorder
                                styleType={'medium'}
                            >
                                Обновить информацию
                            </ButtonWithBorder>
                        </div>

                    </form>
                </ErrorHandler>
            </BlurWithLoader>
        </div >
    );
};

export default DashboardProfile;