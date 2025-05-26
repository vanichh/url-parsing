import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import s from "./Button.module.scss";
import cn from "classnames";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...restProps }, ref) => {
  return (
    <button {...restProps} className={cn(s.root, className, { [s.root__disabled]: restProps.disabled })} ref={ref}>
      {children}
    </button>
  );
});
