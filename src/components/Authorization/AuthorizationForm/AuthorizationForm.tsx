import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendAuthData } from '../../../hooks/fetch/Authentication/useSendAuthData';
import { useAppSelector } from '../../../store/store';
import { authorizationType, IFormState } from '../../../types/Authorization/Authorization';
import AuthorizationLine from '../../../ui/Authorization/AuthorizationLine/AuthorizationLine';
import { getAuthFromStore } from '../../../utils/store/auth/getAuthFromStore';
import s from './AuthorizationForm.module.scss'
import { passwordFullTest } from '../../../utils/testInput/passwordFullTest/passwordFullTest';
import { emailFullTest } from '../../../utils/testInput/emailFullTest/emailFullTest';
import { useValidateFormData } from '../../../hooks/form/useValidateFormData';
import DefaultInputWithValidators from '../../../ui/inputs/FormInputs/DefaultInputWithValidators/DefaultInputWithValidators';
import { STATUS_DONE, STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../../../data/status/status';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import { useCreateValidationInputState } from '../../../hooks/form/input/useCreateValidationInputState';
import { useCreateValidatorsState } from '../../../hooks/form/input/useCreateValidatorsState';
import { useGetAuthRoot } from '../../../hooks/roots/useGetAuthRoot';
import ErrorHandler from '../../General/ErrorHandler/ErrorHandler';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
interface AuthorizationForm {
    type: authorizationType;
    setForm: () => void;
    title: string;
    description: string;
    otherFormLinkText: string;
}
const AuthorizationForm: FC<AuthorizationForm> = ({ setForm, description, title, otherFormLinkText, type }) => {
    const objKeys: IFormState = ['email', 'password']
    const validatorsObj = useCreateValidatorsState(objKeys, [emailFullTest, passwordFullTest])
    const [authState, dispatch] = useCreateValidationInputState<IFormState>(validatorsObj)
    const navRoot = useGetAuthRoot()
    const [validate, validattionStatus, setValidationStatus] = useValidateFormData(authState, dispatch)
    const status = useSendAuthData(type, validattionStatus, authState)
    const navigate = useNavigate()
    const { accessToken } = useAppSelector(getAuthFromStore);
    useEffect(() => {
        if (status.type === STATUS_DONE) navigate(navRoot)
        if (status.type === STATUS_ERROR) setValidationStatus(STATUS_IDLE)
    }, [status.type, accessToken])
    return (
        <BlurWithLoader
            condition={status.type === STATUS_LOADING}
        >
            <form onSubmit={validate}>
                <ErrorHandler
                    errors={[{ type: validattionStatus, body: 'Проверьте корректность заполнения полей' }, status]}
                >
                    <h2>{title}</h2>
                    <div className={s['input']}>
                        <DefaultInputWithValidators
                            errorTitle={'Электронная почта'}
                            inputTitle={'Электронная почта'}
                            dispatch={dispatch}
                            dataItemState={authState.email}
                            stateItemKey={'email'}
                        />
                    </div>
                    <div className={s['input']}>
                        <DefaultInputWithValidators
                            inputTitle='Пароль'
                            errorTitle='Пароль'
                            dispatch={dispatch}
                            dataItemState={authState.password}
                            stateItemKey={'password'}
                            type='password'
                        />
                    </div>
                    <div className={s['button']}>
                        <ButtonWithBorder styleType='full-width'>
                            {title}
                        </ButtonWithBorder>
                    </div>
                </ErrorHandler>
                <div className={s['line']}>
                    <AuthorizationLine />
                </div>
                <p className={s['description']}>{description}
                    <button type='button' className={s['switch-button']} onClick={() => { setForm() }}>{otherFormLinkText}</button>
                </p>
            </form>


        </BlurWithLoader>
    );
};

export default AuthorizationForm;

