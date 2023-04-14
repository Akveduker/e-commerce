import React, { FC, useEffect, useRef, useState } from 'react';
import { IIModalLayoutMobile, IModalLayout } from '../../../types/Modal/modal';

const ModalLayoutMobile: FC<IIModalLayoutMobile> = ({ isOpen, children, closeModal, layoutClass, itemRef, setDrag }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [borders, setBorders] = useState({
        min: 0,
        max: 0,
    })
    useEffect(() => {
        if (itemRef.current) setBorders({ ...borders, min: -itemRef.current.clientWidth / 2 })
    }, [itemRef.current])
    const [initialValue, setInitialValue] = useState(0)
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setInitialValue(e.touches[0].pageX)
    }

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchLeft = e.touches[0].pageX
        const touchLeftPercent = -window.innerWidth + touchLeft
        if (touchLeftPercent >= borders.min) setDrag(0)
        if (touchLeftPercent <= borders.max) setDrag(-initialValue + touchLeft >= 0 ? 0 : - initialValue + touchLeft)

    }

    const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchLeft = e.changedTouches[0].pageX
        setDrag(() => {
            if (-initialValue + touchLeft <= borders.min) closeModal()
            return 0
        })

    }

    useEffect(() => {
        if (isOpen && ref.current) {
            document.body.style.overflow = 'hidden'
            ref.current.focus()
            setDrag(0)
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
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {children}

                </div>

            }
        </>
    )
};

export default ModalLayoutMobile;