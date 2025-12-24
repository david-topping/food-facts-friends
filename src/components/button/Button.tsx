import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

export type ButtonVariant = "primary" | "contrast";

export type ButtonProps = Omit<MuiButtonProps, "variant" | "color"> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", sx, ...props }, ref) => {
    if (variant === "contrast") {
      return (
        <MuiButton
          ref={ref}
          variant="contained"
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
            },
            ...sx,
          }}
          {...props}
        />
      );
    }

    return <MuiButton ref={ref} variant="contained" color="primary" {...props} />;
  },
);

Button.displayName = "Button";
