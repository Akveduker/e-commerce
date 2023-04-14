import { useState } from 'react';
import { daDataAddressEndpoint } from '../../../../api/daData/daDataApi';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { useFormSelectData } from '../../../../hooks/form/useFormSelectData';
import { IAddressFormProps } from '../../../../types/address/address';
import { IDaDataReturn } from '../../../../types/daData/DaData';
import { daDataFetchBody } from '../../../../utils/fetch/daDataFetchBody/daDataFetchBody';
import { SET_ADDRESS } from '../../../../utils/roots/reducers/inputValidation/addressReducer/addressReducer';
import FormSelect from '../../../features/Selects/FormSelect/FormSelect';
import InputName from '../parts/InputName/InputName';

import InputValidationError from '../parts/InputValidationError/InputValidationError';
const HouseSelect = ({ addressState, dispatch }: IAddressFormProps) => {
    const { status, errorBody, value } = addressState.house
    const [inputValue, setInputValue] = useState(value)
    const { data, fetchCallback } = useFetchData<IDaDataReturn>(daDataAddressEndpoint())
    const result = useFormSelectData(data, 'house', 'house')
    return (
        <div>
            <InputName inputName='Дом*' />
            <FormSelect
                value={{ label: value }}
                inputValue={inputValue}
                onChange={(value: any) => {
                    dispatch({ type: SET_ADDRESS, payload: { key: 'house', addressId: value.label, value: value.value } })
                }}
                isDisabled={!Boolean(addressState.street.value)}
                onInputChange={(value) => {
                    setInputValue(value)
                    const body = daDataFetchBody(value, 'house',
                        {
                            "city_fias_id": `${addressState.city.addressId}`,
                            'street_fias_id': `${addressState.street.addressId}`
                        }
                    )
                    fetchCallback(body)
                }}
                options={result}
            />
            <InputValidationError
                status={status}
                errorBody={`Дом ${errorBody}`}
            />
        </div>
    );
};

export default HouseSelect;