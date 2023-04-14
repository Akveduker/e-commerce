import { mockCartItem } from './../mockCartItem/mockCartItem';
import { testForMock } from '../../testFc/testForMock/testForMock';
import { initialCartItem } from '../mockCartItem/mockCartItem';
testForMock(
    'mockProductItem',
    initialCartItem,
    mockCartItem,
    mockCartItem({ amount: 4, itemId: 3 }),
)