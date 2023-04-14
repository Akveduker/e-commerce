import { useAppDispatch } from './../../../store/store';
import { STATUS_IDLE, STATUS_DONE } from './../../../data/status/status';
import { useEffect } from 'react';
import { ICategories } from './../../../types/categories/categories';
import { useFetchData } from "../../fetch/useFetchData"
import { allCategoriesEndpoint } from '../../../api/api';
import { setAllCategories } from '../../../slices/categoriesSlices/categoriesSlices';

export const useFetchCategories = () => {
    const { data, status, fetchCallback } = useFetchData<ICategories[]>(allCategoriesEndpoint())
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (status.type === STATUS_IDLE) fetchCallback({})
        if (status.type === STATUS_DONE && data) dispatch(setAllCategories(data))
    }, [status.type])
    return status
}