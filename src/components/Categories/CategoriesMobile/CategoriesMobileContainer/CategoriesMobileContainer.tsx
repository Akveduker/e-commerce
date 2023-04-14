import React, { FC, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { ICategoriesMobileContainerProps } from '../../../../types/categories/categoriesMobile';
import ArrowRight from '../../../../ui/icons/ArrowRight/ArrowRight';
import CategoriesMobileItem from '../СategoriesMobileItem/CategoriesMobileItem';
import s from './CategoriesMobileContainer.module.scss'

const CategoriesMobileContainer: FC<ICategoriesMobileContainerProps> = ({ categoriesIds, isActive, setIsClose, title }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    return createPortal(
        <CSSTransition
            mountOnEnter
            in={isActive}
            unmountOnExit
            timeout={500}
            classNames={{
                exit: s['container-exit'],
                enter: s['container-enter'],
                enterActive: s['container-enter-active'],
                exitActive: s['container-exit-active'],
            }}
        >
            <div className={s['container']} ref={nodeRef}>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsClose()
                    }}
                    className={s['back']}
                >
                    <ArrowRight className={s['icon']} />
                    {title}
                </button>
                {categoriesIds.map(id => {
                    return (
                        <CategoriesMobileItem
                            key={id}
                            id={id}
                        />
                    )
                })}


            </div>
        </CSSTransition>
        ,
        document.getElementById('root') as HTMLElement
    );
};

export default CategoriesMobileContainer;