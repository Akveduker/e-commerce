import { testForMock } from '../../testFc/testForMock/testForMock';
import { mockValidationSchemeItem } from './../mockValidationSchemeItem/mockValidationSchemeItem';
import { initialValidationScheme, mockValidationScheme } from './mockValidationScheme';
testForMock(
    'mockValidationScheme',
    initialValidationScheme,
    mockValidationScheme,
    mockValidationScheme({ name: mockValidationSchemeItem({ value: 'test', status: 'error' }) }),
)