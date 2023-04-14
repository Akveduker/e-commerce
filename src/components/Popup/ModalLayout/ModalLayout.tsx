import React, { FC, useEffect, useRef } from 'react';
import { IModalLayout } from '../../../types/Modal/modal';
const ModalLayout: FC<IModalLayout> = ({ isOpen, children, closeModal, layoutClass }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && ref.current) {
            document.body.style.overflow = 'hidden'
            ref.current.focus()
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            {isOpen &&
                <div
                    ref={ref}
                    className={layoutClass}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') closeModal()
                    }}
                    onClick={(e) => {
                        e.stopPropagation()
                        if (e.target === e.currentTarget) closeModal()
                    }}
                >
                    {children}

                </div>

            }
        </>
    );
};

export default ModalLayout;