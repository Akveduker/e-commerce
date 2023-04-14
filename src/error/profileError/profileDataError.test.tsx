import { fetchErrorHandlerTest } from "../../helper/testFc/fetchErrorHandlerTest/fetchErrorHandlerTest";
import { profileDataError } from "./profileDataError";

fetchErrorHandlerTest(
    'profileDataError',
    profileDataError,
    {
        code: 404, result: profileDataError(404)
    },
    { code: 2132123, result: 'Ошибка' }
)