import { FC } from 'react';
import CategoryCard from '../CategoriesCard/CategoryCard';
import s from './CategoriesContainer.module.scss'
interface CategoriesContainerProps {
    title: string;
    categories: number[];
}
const CategoriesContainer: FC<CategoriesContainerProps> = ({ title, categories }) => {
    return (
        <div className={s['container']}>
            <h1>{title}</h1>
            <div className={s['categories']}>
                {categories.map(categoryId =>
                    <div key={categoryId} className={s['item']}>
                        <CategoryCard
                            id={categoryId}
                        />
                    </div>)}
            </div>
        </div>
    );
};

export default CategoriesContainer;