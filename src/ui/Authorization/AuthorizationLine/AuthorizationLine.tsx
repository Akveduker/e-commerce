import React from 'react';
import s from './AuthorizationLine.module.scss'
const AuthorizationLine = () => {
    return (
        <p className={s['line']}>
            <span className={s['text']}>ИЛИ</span>
        </p>
    );
};

export default AuthorizationLine;