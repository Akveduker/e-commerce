import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { storageNames } from '../../../data/storage/storageNames';
import { useAppSelector } from '../../../store/store';
import { IOrder } from '../../../types/order/order';
import { getAuthFromStore } from '../../../utils/store/auth/getAuthFromStore';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import CheckoutBuy from '../CheckoutBuy/CheckoutBuy';
import PersonalDataHaveAddress from '../PersonalDataHaveAddress/PersonalDataHaveAddress';
import PersonalDataNoAddress from '../PersonalDataNoAddress/PersonalDataNoAddress';
const PersonalDataStep = () => {
    const [isDone, setIsDone] = useState(false)
    const storage = localStorage.getItem(storageNames.order)
    let order: IOrder | null = storage ? JSON.parse(storage) : null
    const token = useAppSelector(getAuthFromStore).accessToken
    const addressBook = useAppSelector(getUserDataFromStore).addressBook
    if (!order || !order.orderInfo) return <Navigate to={{ search: '?step=1' }} replace />
    if (isDone) return <CheckoutBuy isOpen={isDone} />
    if (!token || !addressBook.length) return <PersonalDataNoAddress setIsDone={setIsDone} />
    return <PersonalDataHaveAddress setIsDone={setIsDone} />
};

export default PersonalDataStep;