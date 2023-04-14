import React from 'react';
import { Link } from 'react-router-dom';
import { roots } from '../../router/routes/routes';
import s from './PageNotFoundContent.module.scss'
const PageNotFoundContent = () => {
    return (
        <div className={s['page']}>
            <p className={s['erorr']}>404</p>
            <h1 className={s['title']}>Page not found</h1>
            <p className={s['description']}>Ooops! The page you are looking for does not exist. It might have been moved or delete</p>
            <Link to={roots.main} className={s['button']}>
                Go Home
            </Link>
        </div>
    );
};

export default PageNotFoundContent;