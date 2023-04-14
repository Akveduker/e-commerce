import React, { FC } from 'react';
import s from './GreenTag.module.scss'
interface GreenTagProps {
    children: React.ReactNode;
}
const GreenTag: FC<GreenTagProps> = ({ children }) => {
    return (
        <div className={s['tag']}>
            {children}
        </div>
    );
};

export default GreenTag;