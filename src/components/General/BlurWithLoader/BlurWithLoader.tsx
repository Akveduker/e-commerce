import React, { FC } from 'react';
import Loader from '../../../ui/features/Loader/Loader';
import s from './BlurWithLoader.module.scss'
interface BlurWithLoaderProps {
    children: React.ReactNode;
    condition: boolean;
}
const BlurWithLoader: FC<BlurWithLoaderProps> = ({ children, condition }) => {
    return (
        <div className={s['container']}>
            {children}
            {condition &&
                <div className={s['blur']}>
                    <Loader />
                </div>
            }
        </div>
    );
};

export default BlurWithLoader;