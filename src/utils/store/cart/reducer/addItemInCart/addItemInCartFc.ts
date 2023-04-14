import _ from 'lodash';
import { ICartItem } from '../../../../../types/Cart/cart';
export const addItemInCartFc = (productsIds: ICartItem[], id: number, amount: number) => {
    const newArr = _.cloneDeep(productsIds)
    if (!newArr.some(item => item.itemId === id)) {
        const item: ICartItem = {
            itemId: id,
            amount
        }
        newArr.push(item)
        return newArr
    }
    newArr.forEach(item => {
        if (item.itemId === id) {
            item.amount = amount
            return item
        }
        return item
    })
    return newArr
}