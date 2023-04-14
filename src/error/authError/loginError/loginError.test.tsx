import { fetchErrorHandlerTest } from "../../../helper/testFc/fetchErrorHandlerTest/fetchErrorHandlerTest";
import { loginError } from "./loginError";

fetchErrorHandlerTest(
    'loginError',
    loginError,
    { code: 400, result: loginError(400) },
    { code: 2132123, result: 'Ошибка' }
)