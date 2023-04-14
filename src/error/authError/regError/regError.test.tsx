import { fetchErrorHandlerTest } from "../../../helper/testFc/fetchErrorHandlerTest/fetchErrorHandlerTest";
import { regError } from "./regError";

fetchErrorHandlerTest(
    'regError',
    regError,
    { code: 404, result: regError(404) },
    { code: 2132123, result: 'Ошибка' }
)