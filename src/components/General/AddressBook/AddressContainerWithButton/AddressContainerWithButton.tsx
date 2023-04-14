import React, { FC } from 'react';
import ButtonWithBorder from '../../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import AddressItemsContainer from '../AddressItemsContainer/AddressItemsContainer';
import s from './AddressContainerWithButton.module.scss'
interface AddressContainerWithButtonProps {
    setIsBuilder: React.Dispatch<React.SetStateAction<boolean>>
}
const AddressContainerWithButton: FC<AddressContainerWithButtonProps> = ({ setIsBuilder }) => {
    return (
        <div className={s['container']}>
            <AddressItemsContainer />
            <div className={s['button']}>
                <ButtonWithBorder
                    styleType='medium'
                    onClick={() => setIsBuilder(true)}
                >
                    Добавить новый адресс
                </ButtonWithBorder>
            </div>
        </div>
    );
};

export default AddressContainerWithButton;