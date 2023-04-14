import { testForMock } from "../../testFc/testForMock/testForMock";
import { initialProduct, mockProductItem } from "../mockProductItem/mockProductItem";

testForMock(
    'mockProductItem',
    initialProduct,
    mockProductItem,
    mockProductItem({ id: 2, price: 60 }),
)
