import type { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}
