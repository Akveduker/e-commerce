export interface IModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
}
export interface IModalLayout extends IModalProps {
    layoutClass: string;
}
export interface IModalMobileProps extends IModalProps {
    itemRef: React.RefObject<HTMLDivElement>
    setDrag: React.Dispatch<React.SetStateAction<number>>
}
export interface IIModalLayoutMobile extends IModalLayout {
    itemRef: React.RefObject<HTMLDivElement>
    setDrag: React.Dispatch<React.SetStateAction<number>>
}