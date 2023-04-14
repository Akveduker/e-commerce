import { FC } from 'react';
import { Link } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import s from './CategoryCard.module.scss'
interface CategoryCardProps {
    id: number
    mainRoot?: string;
}
const CategoryCard: FC<CategoryCardProps> = ({ id }) => {
    const category = useAppSelector(state => state.categories.categories.find(category => category.id === id))
    if (!category) return <></>
    return (
        <Link to={`/${roots.categories}/${id}`}>
            <div className={s['card']}>
                <h3>{category.name}</h3>
            </div>
        </Link>
    );
};

export default CategoryCard;