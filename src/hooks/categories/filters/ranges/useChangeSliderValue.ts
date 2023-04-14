import { useEffect, useState } from "react"
import { IRangeContext, RangeReducerActions } from "../../../../types/filter/range/range"
import { useSetRangeSearchParams } from "./useSetRangeSearchParams"

export const useChangeSliderValue = (context: IRangeContext, dispatch: React.Dispatch<RangeReducerActions>) => {
    const [trigger, setTrigger] = useState(false)
    const setSearchParams = useSetRangeSearchParams(context)
    const onHoldStopSlider = () => {
        context.dispatchFunc()
        setSearchParams()
        setTrigger(false)
    }
    const setTriggerFunc = () => {
        setTrigger(true)
        document.removeEventListener('mouseup', setTriggerFunc)
    };
    const onBodyDown = () => {
        if (!trigger) document.addEventListener('mouseup', setTriggerFunc)
    }
    const onChangeSlider = (value: number[] | number) => {
        const [min, max] = value as number[]
        dispatch({ type: 'setBoth', payload: [min, max] })
        onBodyDown()
    }
    useEffect(() => {
        if (trigger) onHoldStopSlider()
    }, [context.currentValues, trigger])
    return onChangeSlider
}