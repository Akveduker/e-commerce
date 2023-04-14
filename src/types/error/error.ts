export type ErrorAppCodes = 404 | 403 | 402 | 401 | 400
export type ErrorValidator = (codes: ErrorAppCodes) => string