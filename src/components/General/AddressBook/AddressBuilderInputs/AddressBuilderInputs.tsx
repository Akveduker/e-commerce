import React, { FC } from 'react';
import { AddressKeys, IAddress } from '../../../../types/address/address';
import { IInputValidationActions, IInputValidationAddressActions, ValidationScheme } from '../../../../types/IInputValidation/InputValidation';
import AddressTextInput from '../../../../ui/inputs/FormInputs/AddressTextInput/AddressTextInput';
import CityInput from '../../../../ui/inputs/FormInputs/CityInput/CityInput';
import HouseSelect from '../../../../ui/inputs/FormInputs/HouseSelect/HouseSelect';
import StreetSelect from '../../../../ui/inputs/FormInputs/StreetSelect/StreetSelect';

import s from './AddressBuilderInputs.module.scss'
interface AddressBuilderInputsProps {
    addressState: ValidationScheme<AddressKeys>;
    dispatch: React.Dispatch<IInputValidationAddressActions<AddressKeys>>;
}
const AddressBuilderInputs: FC<AddressBuilderInputsProps> = ({ dispatch, addressState }) => {
    return (
        <div>
            <div className={s['container']}>
                <div className={s['item']}>
                    <CityInput
                        dispatch={dispatch}
                        addressState={addressState}
                    />
                </div>
                <div className={s['item']}>
                    <StreetSelect
                        addressState={addressState}
                        dispatch={dispatch}

                    />
                </div>
                <div className={s['item']}>
                    <HouseSelect
                        dispatch={dispatch}
                        addressState={addressState}
                    />
                </div>
            </div>
            <div className={s['container']}>
                <div className={s['item']}>
                    <AddressTextInput
                        dispatch={dispatch}
                        dataItemState={addressState.apartment}
                        inputName={'Квартира'}
                        stateItemKey={'apartment'}
                    />
                </div>
                <div className={s['item']}>
                    <AddressTextInput
                        dataItemState={addressState.floor}
                        inputName={'Этаж'}
                        dispatch={dispatch}
                        stateItemKey={'floor'}
                    />
                </div>
                <div className={s['item']}>
                    <AddressTextInput
                        dataItemState={addressState.entrance}
                        inputName={'Подьезд'}
                        dispatch={dispatch}
                        stateItemKey={'entrance'}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressBuilderInputs;