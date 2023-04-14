import React, { useEffect, useRef, useState } from 'react';
import { useSetModalState } from '../../../../hooks/modal/useSetModalState';
import ModalFilters from '../../../Popup/ModalFilters/ModalFilters';
import Filters from '../Filters/Filters';
import s from './MobileFilters.module.scss'
const MobileFilters = () => {
    const [isOpen, closeModal, openModal] = useSetModalState()
    const [drag, setDrag] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    return (
        <>
            <button onClick={openModal} className={s['button']}>
                Фильтры
            </button>
            <ModalFilters
                isOpen={isOpen}
                closeModal={closeModal}
                itemRef={ref}
                setDrag={setDrag}
            >
                <div
                    style={{ left: `${drag}px` }}
                    className={s['container']}
                    ref={ref}
                >
                    <Filters />
                </div>
            </ModalFilters>
        </>
    );
};

export default MobileFilters;
