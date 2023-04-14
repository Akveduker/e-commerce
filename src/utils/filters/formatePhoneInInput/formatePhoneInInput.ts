const reg = /[^a-zA-Z0-9]/g
export const formatePhoneInInput = (phone: string) => phone.replace(reg, '')