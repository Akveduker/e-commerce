import { useState } from 'react';
export const useSetModalState = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }
    return [isOpen, closeModal, openModal] as const
}