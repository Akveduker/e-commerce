import { useSearchParams, useNavigate } from 'react-router-dom';
export const useCheckoutChangeStep = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const change = (step: number) => {
        setSearchParams(searchParams => {
            searchParams.set('step', step.toString())
            return searchParams
        })
        navigate(`?step=${step}`, { replace: true })
    }
    return change
}