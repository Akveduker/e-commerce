import { validationFunctionArr } from '../../../types/IInputValidation/InputValidation';
import { oneNumberLetterTest } from '../oneNumberLetterTest/oneNumberLetterTest';
import { oneUppercaseLetterTest } from '../oneUppercaseLetterTest/oneUppercaseLetterTest';
import { lengthTest } from './../lengthTest/lengthTest';
export const passwordFullTest: validationFunctionArr = [lengthTest(6), oneNumberLetterTest, oneUppercaseLetterTest]