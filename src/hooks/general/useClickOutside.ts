import { useEffect } from "react"
type GenericRefExtend<T> = React.RefObject<T & HTMLElement>;
export const useClickOutside = <T, S>(ref: GenericRefExtend<T>, openerRef: GenericRefExtend<S>, callback: () => void) => {
    const eventFunction = clickOutside(ref, openerRef, callback)
    useEffect(() => {
        document.addEventListener('click', eventFunction)
        return () => {
            document.removeEventListener('click', eventFunction)
        }
    }, [])
}
const clickOutside = <T, S>(ref: GenericRefExtend<T>, openerRef: GenericRefExtend<S>, callback: () => void) => {
    return (e: MouseEvent) => {
        const { target } = e
        if (!ref.current?.contains((target as HTMLElement)) && target !== openerRef.current) {
            callback()
        }
    }
}