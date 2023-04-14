export const bodyWithToken = (token: string) => {
    return {
        headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',

        }
    }
}