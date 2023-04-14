import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import s from './AppCrash.module.scss'

const AppCrash: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(roots.main)
        navigate(0);
    }
    return (
        <div className={s['page']} >
            <div className={s['container']}>
                <h1 className={s['title']}>Произошла критическая ошибка</h1>
                <ButtonWithBorder styleType='big' onClick={refreshPage} >
                    На главную
                </ButtonWithBorder>
            </div>
        </div >

    );
};

export default AppCrash;