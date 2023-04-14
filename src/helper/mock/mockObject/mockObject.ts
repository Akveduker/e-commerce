export const mockObject = <T extends {}>(initialitem: T, item?: Partial<T>) => {
    return { ...initialitem, ...item }
}