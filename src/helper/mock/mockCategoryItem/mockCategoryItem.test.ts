import { testForMock } from '../../testFc/testForMock/testForMock';
import { initialCategory, mockCategoryItem } from './mockCategoryItem';
testForMock(
    'mockCategoryItem',
    initialCategory,
    mockCategoryItem,
    mockCategoryItem({ id: 5, parentId: 3, childCategory: [3] })
)