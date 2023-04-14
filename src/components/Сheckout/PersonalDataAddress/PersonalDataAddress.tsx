import { useState } from 'react';
import { useSetModalState } from '../../../hooks/modal/useSetModalState';
import { useAppSelector } from '../../../store/store';
import ButtonWithBorder from '../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import { findActiveAddress } from '../../../utils/store/user/address/findActiveAddress/findActiveAddress';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import AddressContainerWithBuilder from '../../General/AddressBook/AddressContainerWithBuilder/AddressContainerWithBuilder';
import Modal from '../../Popup/Modal/Modal';
import s from './PersonalDataAddress.module.scss'
const PersonalDataAddress = () => {
    const addressBook = useAppSelector(getUserDataFromStore).addressBook
    const current = findActiveAddress(addressBook)
    const [isOpen, closeModal, openModal] = useSetModalState()
    if (!current) return null
    const { apartment, street, entrance, city, floor, house } = current.address
    return (
        <div className={s['container']}>
            <h2>Адрес</h2>
            <div className={s['address']}>
                <div className={s['address__body']}>
                    <span>г. {city}</span>
                    <span>, {street}</span>
                    <span>, дом: {house}</span>
                    {entrance && <span>, Подъезд: {entrance}</span>}
                    {floor && <span>, Этаж: {floor}, </span>}
                    {apartment && <span>Квартира: {apartment} </span>}
                </div>
                <div className={s['button']}>
                    <ButtonWithBorder
                        styleType='small'
                        onClick={openModal}
                    >
                        Изменить адрес
                    </ButtonWithBorder>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >
                <AddressContainerWithBuilder />
            </Modal>
        </div>

    );
};

export default PersonalDataAddress;