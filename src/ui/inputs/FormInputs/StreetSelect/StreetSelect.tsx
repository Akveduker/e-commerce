import { useState } from 'react';
import { daDataAddressEndpoint } from '../../../../api/daData/daDataApi';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { useFormSelectData } from '../../../../hooks/form/useFormSelectData';
import { IAddressFormProps } from '../../../../types/address/address';
import { IDaDataReturn } from '../../../../types/daData/DaData';
import { daDataFetchBody } from '../../../../utils/fetch/daDataFetchBody/daDataFetchBody';
import { CLEAR_ADDRESS, SET_ADDRESS } from '../../../../utils/roots/reducers/inputValidation/addressReducer/addressReducer';
import FormSelect from '../../../features/Selects/FormSelect/FormSelect';
import InputValidationError from '../parts/InputValidationError/InputValidationError';
import s from './StreetSelect.module.scss'
const StreetSelect = ({ addressState, dispatch }: IAddressFormProps) => {
    const { status, errorBody, value } = addressState.street
    const [inputValue, setInputValue] = useState(value)
    const { data, fetchCallback } = useFetchData<IDaDataReturn>(daDataAddressEndpoint())
    const result = useFormSelectData(data, 'street_fias_id', 'street_with_type')
    return (
        <div>
            <p className={s['name']}>Улица*</p>
            <FormSelect
                value={{ label: value }}
                inputValue={inputValue}
                onChange={(value: any) => {
                    dispatch({ type: SET_ADDRESS, payload: { key: 'street', addressId: value.value, value: value.label } })
                    dispatch({ type: CLEAR_ADDRESS, payload: 'house' })
                }}
                isDisabled={!Boolean(addressState.city.value)}
                onInputChange={(value) => {
                    setInputValue(value)
                    const body = daDataFetchBody(value, 'street',
                        {
                            "city_fias_id": `${addressState.city.addressId}`
                        }
                    )
                    fetchCallback(body)
                }}
                options={result}
            />
            <InputValidationError
                status={status}
                errorBody={`Улица ${errorBody}`}
            />
        </div>
    );
};

export default StreetSelect;