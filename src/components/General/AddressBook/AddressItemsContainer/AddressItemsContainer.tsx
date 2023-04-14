import React from 'react';
import { useAppSelector } from '../../../../store/store';
import { getUserDataFromStore } from '../../../../utils/store/user/getUserFromStore';
import AddressItem from '../../AddressItem/AddressItem';
import s from './AddressItemsContainer.module.scss'
const AddressItemsContainer = () => {
    const { addressBook } = useAppSelector(getUserDataFromStore)
    return (
        <div className={s['items']}>
            {addressBook.map(item => {
                return (
                    <div
                        key={item.id}
                        className={s['item']}
                    >
                        <AddressItem item={item.address} id={item.id} />
                    </div>
                )
            })}
        </div>
    );
};

export default AddressItemsContainer;