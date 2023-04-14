import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";

type buttonType = 'big' | 'medium' | 'small' | 'full-width';
interface ButtonProps {
    styleType: buttonType;
    children: React.ReactNode;
}

export type LinkWithBorderProps = ButtonProps & LinkProps
export type ButtonWithBorderProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps