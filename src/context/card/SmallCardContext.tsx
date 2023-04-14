import React, { createContext, FC, useEffect } from 'react';
import { productByIdEndpoint } from '../../api/api';
import { useAddItemsToCart } from '../../hooks/Cart/useAddItemsToCart';
import { useUpdateCart } from '../../hooks/Cart/useUpdateCart';
import { useFetchData } from '../../hooks/fetch/useFetchData';
import { ICartItem } from '../../types/Cart/cart';
import { IProduct } from '../../types/Products/products';
import { ISmallCardContext } from '../../types/Products/smallCard/smallCard';
import { removeItemInCartFc } from '../../utils/store/cart/reducer/removeItemInCartFc/removeItemInCartFc';
export const SmallCardContext = createContext<ISmallCardContext | null>(null)
interface SmallCardContextProviderProps {
    id: number;
    children: React.ReactNode;
    amount: number;
    setFullPrice: React.Dispatch<React.SetStateAction<number>>
}
const SmallCardContextProvider: FC<SmallCardContextProviderProps> = ({ children, id, setFullPrice, amount }) => {
    const { data: item, fetchCallback } = useFetchData<IProduct>(productByIdEndpoint(id))
    const removeFromCart = (productsIds: ICartItem[]) => removeItemInCartFc(productsIds, id)
    const { update: removeFc, updateStatus: removeStatus } = useUpdateCart()
    const { addItems, addStatus } = useAddItemsToCart(id)
    useEffect(() => {
        fetchCallback()
    }, [])
    useEffect(() => {
        if (item) setFullPrice(() => item.discount ? amount * item.discount.newPrice : amount * item.price)
    })
    if (!item) return null
    return (
        <SmallCardContext.Provider value={{ ...item, removeStatus, removeFc: () => removeFc(removeFromCart), amount, addStatus, addFc: addItems }}>
            {children}
        </SmallCardContext.Provider>
    );
};

export default SmallCardContextProvider;