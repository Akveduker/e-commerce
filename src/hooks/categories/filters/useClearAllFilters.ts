import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
export const useClearAllFilters = () => {
    const { id } = useParams()
    useEffect(() => {

    }, [id])
}