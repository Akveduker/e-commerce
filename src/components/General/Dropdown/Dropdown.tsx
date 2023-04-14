import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './Dropdown.module.scss'
interface DropdownProps {
    opener: React.ReactNode;
    content: React.ReactNode;
    openerClassName?: string;
    contentClassName?: string;
    containerClassName?: string;
    openerClassNameActive?: string;
    contentClassNameActive?: string;
    containerClassNameActive?: string;
}
const Dropdown: FC<DropdownProps> = ({
    opener, content, openerClassName, contentClassName, containerClassName,
    openerClassNameActive, containerClassNameActive, contentClassNameActive
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [blockHeight, setBlockHeight] = useState(0)
    const openerClass = `${s['opener']} ${openerClassName} ${isOpen && openerClassNameActive}`
    const contentClass = `${s['content']} ${contentClassName} ${isOpen && contentClassNameActive}`
    const containerClass = `${s['container']} ${containerClassName} ${isOpen && containerClassNameActive}`
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) setBlockHeight(ref.current.offsetHeight)
    }, [])

    const onClick = () => setIsOpen(!isOpen)
    return (
        <div
            className={containerClass}
        >
            <button onClick={onClick} className={openerClass}>
                {opener}
            </button>
            <div
                className={contentClass}
                ref={ref}
                style={{
                    maxHeight: isOpen ? blockHeight : blockHeight === 0 ? 'initial' : 0,
                }}
            >
                {content}
            </div>
        </div>
    );
};

export default Dropdown;