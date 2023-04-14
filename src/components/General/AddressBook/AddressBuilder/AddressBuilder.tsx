
import { useCreateAddressItem } from '../../../../hooks/fetch/AddressProfileConstructor/useCreateAddressItem';
import { useValidateFormData } from '../../../../hooks/form/useValidateFormData';
import BlurWithLoader from '../../BlurWithLoader/BlurWithLoader';
import s from './AddressBuilder.module.scss'
import { FC, useEffect } from 'react';
import { useCreateAddressState } from '../../../../hooks/address/useCreateAddressState';
import AddressBuilderInputs from '../AddressBuilderInputs/AddressBuilderInputs';
import ButtonWithBorder from '../../../../ui/Buttons/ButtonsWithBorders/ButtonWithBorder/ButtonWithBorder';
import { STATUS_DONE, STATUS_LOADING } from '../../../../data/status/status';
import ErrorHandler from '../../ErrorHandler/ErrorHandler';
interface AdressBuilderProps {
    setIsBuilder?: React.Dispatch<React.SetStateAction<boolean>>
}
const AddressBuilder: FC<AdressBuilderProps> = ({ setIsBuilder }) => {
    const [addressState, dispatch] = useCreateAddressState()
    const [validate, validationStatus] = useValidateFormData(addressState, dispatch)
    const { status } = useCreateAddressItem(validationStatus, addressState)
    useEffect(() => {
        if (status.type === STATUS_DONE && setIsBuilder) setIsBuilder(false)
    }, [status])
    return (
        <BlurWithLoader
            condition={status.type === STATUS_LOADING}
        >
            <ErrorHandler
                errors={[{ type: validationStatus, body: 'Ошибка заполнения полей' }, status]}
            >
                <form onSubmit={validate} className={s['container']}>
                    <h2>Адрес</h2>
                    <AddressBuilderInputs
                        addressState={addressState}
                        dispatch={dispatch}
                    />
                    <div className={s['button']}>
                        <ButtonWithBorder
                            styleType='medium'
                        >
                            Создать новый адресс
                        </ButtonWithBorder>
                    </div>
                </form>
            </ErrorHandler>
        </BlurWithLoader>

    );
};

export default AddressBuilder;