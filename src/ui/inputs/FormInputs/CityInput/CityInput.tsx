import { useState } from 'react';
import { daDataAddressEndpoint } from '../../../../api/daData/daDataApi';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { useFormSelectData } from '../../../../hooks/form/useFormSelectData';
import { IAddressFormProps } from '../../../../types/address/address';
import { IDaDataReturn } from '../../../../types/daData/DaData';
import { daDataFetchBody } from '../../../../utils/fetch/daDataFetchBody/daDataFetchBody';
import { CLEAR_ADDRESS, SET_ADDRESS } from '../../../../utils/roots/reducers/inputValidation/addressReducer/addressReducer';
import FormSelect from '../../../features/Selects/FormSelect/FormSelect';
import InputName from '../parts/InputName/InputName';
import InputValidationError from '../parts/InputValidationError/InputValidationError';
const CityInput = ({ addressState, dispatch }: IAddressFormProps) => {
    const { status, errorBody, value } = addressState.city
    const [inputValue, setInputValue] = useState(value)
    const { data, fetchCallback } = useFetchData<IDaDataReturn>(daDataAddressEndpoint())
    const result = useFormSelectData(data, 'city_fias_id', 'city')
    return (
        <div>
            <InputName inputName='Город*' />
            <FormSelect
                value={{ label: value }}
                inputValue={inputValue}
                onChange={(value: any) => {
                    dispatch({ type: SET_ADDRESS, payload: { key: 'city', addressId: value.value, value: value.label } })
                    dispatch({ type: CLEAR_ADDRESS, payload: 'street' })
                    dispatch({ type: CLEAR_ADDRESS, payload: 'house' })
                }}
                onInputChange={(value) => {
                    setInputValue(value)
                    const body = daDataFetchBody(value, 'city')
                    fetchCallback(body)
                }}
                options={result}
            />
            <InputValidationError
                status={status}
                errorBody={`Город ${errorBody}`}
            />
        </div>
    );
};

export default CityInput;