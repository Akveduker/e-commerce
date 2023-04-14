import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const useFindAndFixStep = (maxSteps: number) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [step, setStep] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const paramsStep = +(searchParams.get('step') as string)
        if (paramsStep > maxSteps || paramsStep < 1) {
            navigate({ search: '?step=1' }, { replace: true })
            setStep(1)
            return
        }
        setStep(+(searchParams.get('step') as string))
    }, [searchParams.get('step')])

    return step
}