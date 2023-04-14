import React, { FC } from 'react';
import { IModalMobileProps, IModalProps } from '../../../types/Modal/modal';
import ModalLayout from '../ModalLayout/ModalLayout';
import ModalLayoutMobile from '../ModalLayoutMobile/ModalLayoutMobile';
import s from './ModalFilters.module.scss'
const ModalFilters: FC<IModalMobileProps> = ({ isOpen, children, closeModal, itemRef, setDrag }) => {
    return (
        <ModalLayoutMobile
            isOpen={isOpen}
            closeModal={closeModal}
            layoutClass={s['container']}
            itemRef={itemRef}
            setDrag={setDrag}
        >
            {children}
        </ModalLayoutMobile>
    );
};

export default ModalFilters;