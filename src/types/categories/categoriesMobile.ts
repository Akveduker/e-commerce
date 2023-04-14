export interface ICategoriesMobileProps {
    isActive: boolean;
    setIsClose: () => void;
}
export interface ICategoriesMobileButtonProps extends ICategoriesMobileProps {
    setIsOpen: () => void;
}
export interface ICategoriesMobileContainerProps extends ICategoriesMobileProps {
    title: string;
    categoriesIds: number[];
}