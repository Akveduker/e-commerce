
import { roots } from '../../../router/routes/routes';
import { ICategories } from '../../../types/categories/categories';
import { findAllParentCategories } from './findAllParentCategories';
describe('findAllParentCategories', () => {
    const categories: ICategories[] = [
        {
            id: 1,
            name: 'cat 1',
            parentId: null,
            childCategory: [2]
        },
        {
            id: 2,
            name: 'cat 2',
            parentId: 1,
            childCategory: []
        },
    ]
    test('Поиск родительских категорий', () => {
        expect(findAllParentCategories(categories, 2)).toEqual([
            {
                title: 'cat 1',
                url: `${roots.main}${roots.categories}/1`
            }
            ,
            {
                title: 'cat 2',
                url: `${roots.main}${roots.categories}/2`
            }
        ])
    })
    test('Нет id в категориях', () => {
        expect(findAllParentCategories(categories, 2000)).toEqual([])
    })
    test('массив категорий пустой', () => {
        expect(findAllParentCategories([], 2)).toEqual([])
    })
})