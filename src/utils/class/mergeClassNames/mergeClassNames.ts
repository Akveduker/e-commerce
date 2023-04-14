export const mergeClassNames = (main: string, others?: string) => {
    return others ? `${main} ${others}` : main
}