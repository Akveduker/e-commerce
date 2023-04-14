import { FC } from 'react';
import { STATUS_LOADING } from '../../../data/status/status';
import { useUpdateAddressItem } from '../../../hooks/fetch/AddressItem/useUpdateAddressItem';
import { useAppSelector } from '../../../store/store';
import { IAddressState } from '../../../types/User/User';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import { removeAddressItem } from '../../../utils/store/user/address/removeAddressItem/removeAddressItem';
import { setItemIsActive } from '../../../utils/store/user/address/setItemIsActive/setItemIsActive';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import BlurWithLoader from '../BlurWithLoader/BlurWithLoader';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import s from './AddressItem.module.scss'
interface AddressItemProps {
    item: IAddressState;
    id: number;
}
const AddressItem: FC<AddressItemProps> = ({ item, id }) => {
    const { isActive, apartment, house, street, entrance, city, floor } = item
    const addressBook = useAppSelector(getUserDataFromStore).addressBook
    const { status: removeStatus, fetch: removeItem } = useUpdateAddressItem(removeAddressItem(addressBook, id))
    const { status: setIsActiveStatus, fetch: setIsActive } = useUpdateAddressItem(setItemIsActive(addressBook, id))
    return (
        <BlurWithLoader
            condition={removeStatus.type === STATUS_LOADING || setIsActiveStatus.type === STATUS_LOADING}
        >
            <ErrorHandler
                errors={[removeStatus, setIsActiveStatus]}
            >
                <div className={isActive ? s['active'] : ''}>
                    <div className={s['address']}>
                        <div>
                            <p>Город: {city}</p>
                            <p>Улица: {street}</p>
                            <p>Дом: {house}</p>
                        </div>
                        <div>
                            {apartment && <p>Квартира: {apartment}</p>}
                            {entrance && <p>Подъезд: {entrance}</p>}
                            {floor && <p>Этаж:{floor}</p>}
                        </div>
                    </div>
                    <div className={s['buttons']}>
                        <ButtonWithBorder
                            disabled={isActive}
                            styleType='small'
                            onClick={setIsActive}
                        >
                            {isActive ? 'Активен' : 'Сделать активным'}
                        </ButtonWithBorder>
                        <button className={s['delete']} onClick={removeItem}>
                            Удалить
                        </button>
                    </div>
                </div>

            </ErrorHandler>
        </BlurWithLoader>
    );
};

export default AddressItem;