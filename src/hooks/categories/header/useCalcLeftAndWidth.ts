import { useEffect, useState } from 'react';
import { HeaderBottomCategoryCords, HeaderBottomCategoryItemType } from '../../../types/categories/categories';

export const useCalcLeftAndWidth = (
    parentRef: React.RefObject<HTMLDivElement>,
    currentRef: React.RefObject<HTMLDivElement>,
    type: HeaderBottomCategoryItemType
) => {
    const [cords, setCords] = useState<null | HeaderBottomCategoryCords>(null)
    const { current: currentParent } = parentRef
    const { current: currentContainer } = currentRef
    const getCords = (parent: HTMLDivElement, contaier: HTMLDivElement) => {
        const containerFromLeft = parent.getBoundingClientRect().x
        const currentContainerFromLeft = contaier.getBoundingClientRect().x
        if (type === 'main') {
            return {
                left: currentContainerFromLeft - containerFromLeft,
                minWidth: contaier.clientWidth,
            }
        }
        return {
            left: currentContainerFromLeft - containerFromLeft + contaier.clientWidth,
            minWidth: contaier.clientWidth,
        }
    }
    useEffect(() => {
        if (currentParent && currentContainer) setCords(getCords(currentParent, currentContainer))
    }, [currentParent, currentContainer, currentContainer?.getBoundingClientRect().x,])
    return cords
}