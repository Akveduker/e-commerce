import { useEffect, useState } from 'react';
import { IDaDataItemData, IDaDataReturn } from './../../types/daData/DaData';
export const useFormSelectData = (data: IDaDataReturn | null, value: keyof IDaDataItemData, label: keyof IDaDataItemData) => {
    const [result, setResult] = useState<{ value: string, label: string }[]>([])
    useEffect(() => {
        if (data) {
            setResult(data.suggestions.map(item => {
                return {
                    value: item.data[value],
                    label: item.data[label],
                }
            }))
        }
    }, [data])
    return result
}