import { ValidationScheme } from '../../../types/IInputValidation/InputValidation';
import { storageNames } from './../../../data/storage/storageNames';
import { IAddress } from '../../../types/address/address';
import { IOrder, PersonalOrder } from './../../../types/order/order';


export const useAddAddressAndPersonalToLocal = () => {
    const storage = localStorage.getItem(storageNames.order)
    return (address: IAddress, personal: PersonalOrder) => {
        if (!storage) return
        const order: IOrder = JSON.parse(storage)
        order.addressInfo = address
        order.personalInfo = personal
        localStorage.setItem(storageNames.order, JSON.stringify(order))
    }
}