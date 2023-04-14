import { FC, useMemo, useState } from 'react';
import s from './FooterList.module.scss'

import CategoryDropDownItem from '../CategoryDropdownItem/CategoryDropDownItem';
import { Categories } from '../../../types/BestOffers/BestOffers';
import MoreButton from '../../../ui/Buttons/MoreButton/MoreButton';
interface CategoryDropdownProps {
    categories: Categories;
}
const CategoryDropdown: FC<CategoryDropdownProps> = ({ categories }) => {
    const { links: ids, title } = categories
    const limitNum = window.innerWidth <= 673 ? 10 : 5
    const [isOpen, setIsOpen] = useState(false)
    const limit = ids.length >= limitNum ? limitNum : ids.length;
    const loopLimit = isOpen ? ids.length : limit;
    const setOpen = () => {
        setIsOpen(!isOpen)
    }
    const data: React.ReactElement[] = [];
    for (let i = 0; i < loopLimit; i++) {
        const id = ids[i];
        data.push(
            <li key={id} className={s['item']}>
                <CategoryDropDownItem
                    id={id}
                />
            </li >
        )
    }
    return (
        <div>
            <h3 className={s['title']} >{title}</h3>
            <ul className={s['list']}>
                {data}
            </ul>
            {ids.length > limitNum ?
                <div className={s['button']}>
                    <MoreButton setFunction={setOpen}
                        isOpen={isOpen}
                    />
                </div>
                :
                null
            }

        </div>
    );
};

export default CategoryDropdown;
