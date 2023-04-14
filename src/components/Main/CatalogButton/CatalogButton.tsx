import { FC, useRef, useState } from 'react';
import ArrowDown from '../../../ui/icons/ArrowDown/ArrowDown';
import s from './CatalogButton.module.scss'

const CatalogButton: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openerRef = useRef<HTMLButtonElement>(null)
    const buttonClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={s['container']} >
            <button ref={openerRef} type='button' className={s['button']} onClick={buttonClick}>
                All categories
                <ArrowDown
                    className={s['icon']}
                />
            </button>
        </div >
    );
};

export default CatalogButton;