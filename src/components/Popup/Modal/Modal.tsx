import { FC } from 'react';
import { createPortal } from 'react-dom';
import { IModalProps } from '../../../types/Modal/modal';
import ModalLayout from '../ModalLayout/ModalLayout';
import s from './Modal.module.scss'
const Modal: FC<IModalProps> = ({ closeModal, children, isOpen }) => {
    return createPortal(
        <ModalLayout
            closeModal={closeModal}
            isOpen={isOpen}
            layoutClass={s['container']}
        >
            <div className={s['body']}>
                <button
                    onClick={closeModal}
                    className={s['close']}
                >
                    X
                </button>
                {children}
            </div>

        </ModalLayout>
        ,
        document.getElementById('root') as HTMLElement
    )

    return null
};

export default Modal;