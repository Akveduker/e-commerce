import { notEmptyTest } from '../../utils/testInput/notEmptyTest/notEmptyTest';
import { useState } from "react"
import { AddressKeys, AddressState } from "../../types/address/address"
import { useCreateValidationInputState } from '../form/input/useCreateValidationInputState';
import { useCreateValidatorsState } from '../form/input/useCreateValidatorsState';

export const useCreateAddressState = () => {
    const addressKeys: AddressKeys = ['city', 'street', 'house', 'floor', 'apartment', 'entrance']
    const validatorsObjAddress = useCreateValidatorsState(
        addressKeys,
        [[notEmptyTest], [notEmptyTest], [notEmptyTest], [], [], []]
    )
    const [addressState, dispatchAddress] = useCreateValidationInputState(validatorsObjAddress, true)
    return [addressState, dispatchAddress] as const
}