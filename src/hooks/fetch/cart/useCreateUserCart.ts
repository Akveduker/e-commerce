import { ICart } from './../../../types/Cart/cart';
import { cartEndpoint } from '../../../api/api';
import { useFetchData } from './../useFetchData';
import { regError } from '../../../error/authError/regError/regError';
export const useCreateUserCart = () => {
    const { data, status, fetchCallback } = useFetchData<ICart>(cartEndpoint(), regError)
    const createCart = (userId: number) => {
        const cart: Partial<ICart> = {
            productsIds: [],
            userId,
        }
        fetchCallback({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(cart)
        })
    }
    return { createCart, cart: data, cartCreationStatus: status }

}