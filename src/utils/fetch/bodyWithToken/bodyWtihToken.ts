export const bodyWithToken = (token: string) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',

        }
    }
}