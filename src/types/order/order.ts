import { IUser } from './../User/User';


import { ICartItem } from '../Cart/cart';
import { IAddress } from '../address/address';
export type PersonalOrder = Pick<IUser, 'email' | 'firstName' | 'secondName' | 'phone'>
export interface IOrder {
    personalInfo: PersonalOrder | null;
    addressInfo: IAddress | null;
    orderInfo: ICartItem[];
    orderId: string;
}