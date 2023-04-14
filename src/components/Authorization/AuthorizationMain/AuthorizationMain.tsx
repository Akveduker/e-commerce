import { useState } from 'react';
import { loginEndpoint, registerEndpoint } from '../../../api/api';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import s from './AuthorizationMain.module.scss'
const AuthorizationMain = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className={s['container']}>
            <div className={s['body']}>
                {isLogin ?
                    <AuthorizationForm
                        type='login'
                        setForm={() => setIsLogin(false)}
                        title={'Авторизация'}
                        description={'Нужен аккаунт?'}
                        otherFormLinkText={'Регистрация'}
                    />
                    :
                    <AuthorizationForm
                        type='registration'
                        setForm={() => setIsLogin(true)}
                        title={'Регистрация'}
                        description={'Уже есть аккаунт?'}
                        otherFormLinkText={'Авторизация'}
                    />
                }

            </div>
        </div>
    );
};

export default AuthorizationMain;