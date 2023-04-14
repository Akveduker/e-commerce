import { fetchErrorHandlerTest } from "../../helper/testFc/fetchErrorHandlerTest/fetchErrorHandlerTest";
import { cartError } from "./cartError";

fetchErrorHandlerTest(
    'cartError',
    cartError,
    {
        code: 403, result: cartError(403)
    },
    { code: 2132123, result: 'Ошибка' }
)