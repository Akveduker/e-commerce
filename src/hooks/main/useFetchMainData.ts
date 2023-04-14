import { STATUS_EMPTY, STATUS_DONE } from './../../data/status/status';
import { useState } from 'react';
import { useEffect } from 'react';
import { useFetchCategories } from './../categories/fetch/useFetchCategories';
import { useGetUserCart } from "../Cart/useGetUserCart"
import { useFetchUser } from "../user/useGetUser"
import { InitialDataValidatingStatuses } from '../../types/fetch/fetch';

export const useFetchMainData = () => {
    const [isDone, setIsDone] = useState(false)
    const cartStatus = useGetUserCart()
    const userStatus = useFetchUser()
    const categoriesStatus = useFetchCategories()
    const statusesArr: InitialDataValidatingStatuses[] = [
        {
            isRequired: true,
            status: categoriesStatus
        },
        {
            isRequired: true,
            status: cartStatus
        },
        {
            isRequired: false,
            status: userStatus
        }
    ]
    const isOk = statusesArr.every(item => {
        if (item.isRequired && item.status.type === STATUS_DONE) return true
        if (!item.isRequired && (item.status.type === STATUS_DONE || item.status.type === STATUS_EMPTY)) return true
        return false
    })
    useEffect(() => {
        if (isOk) setIsDone(true)
    }, [cartStatus.type, userStatus.type, categoriesStatus.type])
    return isDone
}